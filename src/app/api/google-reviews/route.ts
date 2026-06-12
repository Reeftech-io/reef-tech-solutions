import { NextResponse } from 'next/server';

// Cache the response at the Next.js data layer for 24 hours.
// Vercel will serve the cached JSON to all visitors during this window.
export const revalidate = 86400; // 24 hours

const SEARCH_QUERY = 'ReefTech Solutions Big Island Hawaii';

type GoogleReview = {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
};

type FindPlaceResponse = {
  candidates: Array<{ place_id: string }>;
  status: string;
};

type PlaceDetailsResponse = {
  result?: {
    name?: string;
    rating?: number;
    user_ratings_total?: number;
    reviews?: GoogleReview[];
    url?: string;
  };
  status: string;
  error_message?: string;
};

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

async function findPlaceId(apiKey: string): Promise<string | null> {
  // Allow override via env to skip the lookup entirely.
  if (process.env.GOOGLE_PLACE_ID) {
    return process.env.GOOGLE_PLACE_ID;
  }

  const url = new URL(
    'https://maps.googleapis.com/maps/api/place/findplacefromtext/json'
  );
  url.searchParams.set('input', SEARCH_QUERY);
  url.searchParams.set('inputtype', 'textquery');
  url.searchParams.set('fields', 'place_id');
  url.searchParams.set('key', apiKey);

  const res = await fetch(url.toString(), { next: { revalidate: 86400 } });
  if (!res.ok) return null;
  const data: FindPlaceResponse = await res.json();
  if (data.status !== 'OK' || !data.candidates?.length) return null;
  return data.candidates[0].place_id;
}

async function fetchPlaceDetails(
  placeId: string,
  apiKey: string
): Promise<PlaceDetailsResponse> {
  const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
  url.searchParams.set('place_id', placeId);
  url.searchParams.set(
    'fields',
    'name,rating,user_ratings_total,reviews,url'
  );
  // 'reviews_sort=newest' returns the most recent (default is 'most_relevant').
  url.searchParams.set('reviews_sort', 'newest');
  url.searchParams.set('reviews_no_translations', 'true');
  url.searchParams.set('key', apiKey);

  const res = await fetch(url.toString(), { next: { revalidate: 86400 } });
  return res.json();
}

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    return NextResponse.json<ReviewsPayload>(
      {
        ok: false,
        reviews: [],
        error: 'GOOGLE_MAPS_API_KEY is not set in the environment.',
      },
      { status: 200 } // Use 200 so the client renders the empty state gracefully.
    );
  }

  try {
    const placeId = await findPlaceId(apiKey);
    if (!placeId) {
      return NextResponse.json<ReviewsPayload>({
        ok: false,
        reviews: [],
        error: 'Could not resolve Place ID for the business.',
      });
    }

    const details = await fetchPlaceDetails(placeId, apiKey);
    if (details.status !== 'OK' || !details.result) {
      return NextResponse.json<ReviewsPayload>({
        ok: false,
        reviews: [],
        error:
          details.error_message ??
          `Place Details returned status ${details.status}.`,
      });
    }

    const { name, rating, user_ratings_total, reviews, url } = details.result;

    const cleaned = (reviews ?? [])
      .filter((r) => typeof r.text === 'string' && r.text.trim().length > 0)
      .map((r) => ({
        author: r.author_name,
        profilePhoto: r.profile_photo_url,
        rating: r.rating,
        relativeTime: r.relative_time_description,
        text: r.text,
        timestamp: r.time,
      }));

    return NextResponse.json<ReviewsPayload>({
      ok: true,
      businessName: name,
      rating,
      totalRatings: user_ratings_total,
      googleUrl: url,
      reviews: cleaned,
    });
  } catch (err) {
    return NextResponse.json<ReviewsPayload>({
      ok: false,
      reviews: [],
      error:
        err instanceof Error ? err.message : 'Unknown error fetching reviews.',
    });
  }
}
