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

// Public Google Business Profile CID for ReefTech Solutions. Sourced from
// the share.google link the owner provided. Not a secret — it's the same
// identifier embedded in the Google Maps share URL.
const DEFAULT_CID = '13864943262942483160';

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

// Resolve a Google Maps CID to a ChIJ Place ID. Tries multiple endpoints
// that expose the ChIJ id in SSR HTML: /maps/place lookup pages, the search
// fallback, and the /maps?cid= redirect.
async function resolvePlaceIdFromCid(cid: string): Promise<string | null> {
  const urls = [
    `https://www.google.com/maps?cid=${cid}`,
    `https://maps.google.com/?cid=${cid}`,
    `https://www.google.com/search?q=cid:${cid}&hl=en`,
  ];
  const ua =
    'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
  for (const url of urls) {
    try {
      const res = await fetch(url, {
        redirect: 'follow',
        headers: { 'User-Agent': ua, 'Accept-Language': 'en-US,en;q=0.9' },
        next: { revalidate: 86400 },
      });
      if (!res.ok) continue;
      const html = await res.text();
      const m = html.match(/ChIJ[A-Za-z0-9_-]{15,}/);
      if (m) return m[0];
    } catch {
      // try next
    }
  }
  return null;
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

    // 1) Try Place Details (New) against multiple ID candidates. v1 accepts
    //    several canonical forms; we try them in order. The CID candidate
    //    uses a Geocoding fallback to resolve to a ChIJ id.
    const candidateIds = [
      process.env.GOOGLE_PLACE_ID,
      // Known ChIJ candidates surfaced from Google's own data layer.
      'ChIJS7Yh1Z25_aYR2NKhInAsasA',
    ].filter((v): v is string => typeof v === 'string' && v.length > 0);

    for (const candidate of candidateIds) {
      const r = await fetchPlaceDetailsV1(apiKey, candidate);
      if (r.place) {
        place = r.place;
        break;
      }
      if (!lastError) {
        lastError = `Place Details v1 (${candidate}) HTTP ${r.httpStatus}: ${r.body.slice(0, 150)}`;
      }
    }

    // 1b) CID -> ChIJ resolver via SSR HTML scrape (best-effort).
    const cid = process.env.GOOGLE_PLACE_CID ?? DEFAULT_CID;
    if (cid && !place) {
      const resolvedId = await resolvePlaceIdFromCid(cid);
      if (resolvedId) {
        const r = await fetchPlaceDetailsV1(apiKey, resolvedId);
        if (r.place) place = r.place;
        else if (!lastError) lastError = `CID->Details v1 HTTP ${r.httpStatus}: ${r.body.slice(0, 200)}`;
      }
    }

    // 3) Text Search (New) WITHOUT bias.
    if (!place) {
      const r = await searchTextV1(apiKey, SEARCH_QUERY, false);
      if (r.place) place = r.place;
      else if (!lastError)
        lastError = `Text Search v1 HTTP ${r.httpStatus}: ${r.body.slice(0, 200)}`;
    }

    // 4) Retry Text Search with location bias around Waimea.
    if (!place) {
      const r = await searchTextV1(apiKey, SEARCH_QUERY, true);
      if (r.place) place = r.place;
      else if (!lastError)
        lastError = `Text Search v1 (biased) HTTP ${r.httpStatus}: ${r.body.slice(0, 200)}`;
    }

    // 5) Last resort: searchText with just "ReefTech" near coords.
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
