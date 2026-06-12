import { NextResponse } from 'next/server';

// Force the route to run on every request so process.env is read at request
// time (not build time). We still cache successful Google API responses for
// 24h via the inner fetch() { next: { revalidate: 86400 } } calls.
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Search query and optional location bias for finding the business.
// Defaults are tuned for ReefTech Solutions at 64-5085 Kalake St, Waimea HI.
const SEARCH_QUERY = 'ReefTech Solutions Waimea Hawaii';
const BIAS_LAT = 20.0314744;
const BIAS_LNG = -155.6164902;

// ---------- Types: Places API (New) v1 ----------

type PlacesV1Review = {
  name?: string;
  relativePublishTimeDescription?: string;
  rating?: number;
  text?: { text?: string; languageCode?: string };
  originalText?: { text?: string; languageCode?: string };
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
  publishTime?: string;
};

type PlacesV1Place = {
  id?: string; // bare place id like "ChIJ..."
  name?: string; // resource name like "places/ChIJ..."
  displayName?: { text?: string; languageCode?: string };
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesV1Review[];
};

type PlacesV1SearchTextResponse = {
  places?: PlacesV1Place[];
};

// ---------- Output payload ----------

export type ReviewsPayload = {
  ok: boolean;
  businessName?: string;
  rating?: number;
  totalRatings?: number;
  googleUrl?: string;
  reviews: Array<{
    author: string;
    profilePhoto?: string;
    rating: number;
    relativeTime: string;
    text: string;
    timestamp: number;
  }>;
  error?: string;
};

// ---------- Helpers ----------

function errorResponse(payload: ReviewsPayload) {
  return NextResponse.json<ReviewsPayload>(payload, {
    status: 200, // 200 so the client renders an empty state gracefully.
    headers: { 'Cache-Control': 'no-store, max-age=0' },
  });
}

function successResponse(payload: ReviewsPayload) {
  return NextResponse.json<ReviewsPayload>(payload, {
    // Successful payload: cache at the edge for 24h, allow SWR for another 24h.
    headers: {
      'Cache-Control':
        'public, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}

// Map a Places API (New) review to our flat payload shape.
function mapReview(r: PlacesV1Review) {
  const text = r.text?.text ?? r.originalText?.text ?? '';
  const publishMs = r.publishTime ? Date.parse(r.publishTime) : Date.now();
  return {
    author: r.authorAttribution?.displayName ?? 'Google user',
    profilePhoto: r.authorAttribution?.photoUri,
    rating: typeof r.rating === 'number' ? r.rating : 5,
    relativeTime: r.relativePublishTimeDescription ?? '',
    text,
    timestamp: Math.floor(publishMs / 1000),
  };
}

// ---------- Places API (New) calls ----------

const FIELD_MASK = [
  'places.id',
  'places.displayName',
  'places.rating',
  'places.userRatingCount',
  'places.googleMapsUri',
  'places.reviews',
].join(',');

async function searchTextV1(
  apiKey: string,
  textQuery: string,
  biased: boolean
): Promise<{ place?: PlacesV1Place; httpStatus: number; body: string }> {
  const body: Record<string, unknown> = { textQuery };
  if (biased) {
    body.locationBias = {
      circle: {
        center: { latitude: BIAS_LAT, longitude: BIAS_LNG },
        radius: 5000,
      },
    };
  }

  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': FIELD_MASK,
    },
    body: JSON.stringify(body),
    next: { revalidate: 86400 },
  });

  const raw = await res.text();
  if (!res.ok) return { httpStatus: res.status, body: raw };

  let parsed: PlacesV1SearchTextResponse = {};
  try {
    parsed = JSON.parse(raw) as PlacesV1SearchTextResponse;
  } catch {
    return { httpStatus: res.status, body: raw };
  }
  return { place: parsed.places?.[0], httpStatus: res.status, body: raw };
}

// If the user has hardcoded a place id, fetch details directly via v1.
async function fetchPlaceDetailsV1(
  apiKey: string,
  placeId: string
): Promise<{ place?: PlacesV1Place; httpStatus: number; body: string }> {
  // v1 accepts the bare id under /v1/places/{id}; reviews require the reviews
  // field in the field mask.
  const detailsMask = [
    'id',
    'displayName',
    'rating',
    'userRatingCount',
    'googleMapsUri',
    'reviews',
  ].join(',');

  const res = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
    {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': detailsMask,
      },
      next: { revalidate: 86400 },
    }
  );
  const raw = await res.text();
  if (!res.ok) return { httpStatus: res.status, body: raw };

  let parsed: PlacesV1Place = {};
  try {
    parsed = JSON.parse(raw) as PlacesV1Place;
  } catch {
    return { httpStatus: res.status, body: raw };
  }
  return { place: parsed, httpStatus: res.status, body: raw };
}

// ---------- Route handler ----------

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return errorResponse({
      ok: false,
      reviews: [],
      error: 'GOOGLE_MAPS_API_KEY is not set in the environment.',
    });
  }

  try {
    let place: PlacesV1Place | undefined;
    let lastError = '';

    // 1) If a Place ID is hardcoded, use it directly via v1 Place Details.
    const hardcodedId = process.env.GOOGLE_PLACE_ID;
    if (hardcodedId) {
      const r = await fetchPlaceDetailsV1(apiKey, hardcodedId);
      if (r.place) place = r.place;
      else lastError = `Place Details v1 HTTP ${r.httpStatus}: ${r.body.slice(0, 200)}`;
    }

    // 2) Otherwise, try Text Search (New) WITHOUT bias.
    if (!place) {
      const r = await searchTextV1(apiKey, SEARCH_QUERY, false);
      if (r.place) place = r.place;
      else if (!lastError)
        lastError = `Text Search v1 HTTP ${r.httpStatus}: ${r.body.slice(0, 200)}`;
    }

    // 3) Retry Text Search with location bias around Waimea.
    if (!place) {
      const r = await searchTextV1(apiKey, SEARCH_QUERY, true);
      if (r.place) place = r.place;
      else if (!lastError)
        lastError = `Text Search v1 (biased) HTTP ${r.httpStatus}: ${r.body.slice(0, 200)}`;
    }

    // 4) Last resort: searchText with just "ReefTech" near coords.
    if (!place) {
      const r = await searchTextV1(apiKey, 'ReefTech property maintenance', true);
      if (r.place) place = r.place;
      else if (!lastError)
        lastError = `Text Search v1 fallback HTTP ${r.httpStatus}: ${r.body.slice(0, 200)}`;
    }

    if (!place) {
      return errorResponse({
        ok: false,
        reviews: [],
        error: `Could not resolve business listing. ${lastError}`,
      });
    }

    // Some search responses don't include `reviews` directly; if missing,
    // do a follow-up Place Details fetch by id.
    if ((!place.reviews || place.reviews.length === 0) && place.id) {
      const detail = await fetchPlaceDetailsV1(apiKey, place.id);
      if (detail.place) {
        place = { ...place, ...detail.place };
      }
    }

    const cleaned = (place.reviews ?? [])
      .map(mapReview)
      .filter((r) => r.text.trim().length > 0);

    return successResponse({
      ok: true,
      businessName: place.displayName?.text,
      rating: place.rating,
      totalRatings: place.userRatingCount,
      googleUrl: place.googleMapsUri,
      reviews: cleaned,
    });
  } catch (err) {
    return errorResponse({
      ok: false,
      reviews: [],
      error:
        err instanceof Error ? err.message : 'Unknown error fetching reviews.',
    });
  }
}
