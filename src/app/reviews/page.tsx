import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://www.reeftech.io';

export const metadata: Metadata = {
  title: 'Customer Reviews — ReefTech Solutions | Big Island Hawaii',
  description:
    'What Big Island homeowners, property managers, and businesses say about working with ReefTech Solutions for electrical, plumbing, fire alarm, access control, and spa & sauna service.',
  alternates: { canonical: `${SITE_URL}/reviews` },
  openGraph: {
    title: 'Customer Reviews — ReefTech Solutions | Big Island Hawaii',
    description:
      'Read what Big Island homeowners, property managers, and businesses say about ReefTech Solutions — electrical, plumbing, fire alarm, access control, and spa & sauna service.',
    url: `${SITE_URL}/reviews`,
    siteName: 'ReefTech Solutions',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${SITE_URL}/photos/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ReefTech Solutions Customer Reviews — Big Island Hawaii',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Reviews — ReefTech Solutions | Big Island Hawaii',
    description:
      'Read what Big Island customers say about ReefTech Solutions for electrical, plumbing, fire alarm, and access control service.',
    images: [`${SITE_URL}/photos/og-image.jpg`],
  },
};

/**
 * Reviews are pulled server-side from /api/google-reviews (the same live Google
 * Places data source used by the homepage ReviewsSection) so real review text and
 * ratings are present in the initial server-rendered HTML — not just injected
 * client-side after the page loads.
 *
 * Google's review-snippet policy: the reviews used in JSON-LD must also be
 * visible on the same page to users, which this page now satisfies directly.
 */
type GoogleReview = {
  author: string;
  profilePhoto?: string;
  rating: number;
  relativeTime: string;
  text: string;
  timestamp: number;
};

type ReviewsPayload = {
  ok: boolean;
  businessName?: string;
  rating?: number;
  totalRatings?: number;
  googleUrl?: string;
  reviews: GoogleReview[];
  error?: string;
};

async function getReviews(): Promise<ReviewsPayload> {
  try {
    const res = await fetch(`${SITE_URL}/api/google-reviews`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return { ok: false, reviews: [] };
    return (await res.json()) as ReviewsPayload;
  } catch {
    return { ok: false, reviews: [] };
  }
}

export default async function ReviewsPage() {
  const data = await getReviews();
  const reviews = data.reviews ?? [];

  const ratingValue =
    data.rating ??
    (reviews.length > 0
      ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
      : undefined);
  const reviewCount = data.totalRatings ?? reviews.length;

  const reviewsJsonLd =
    reviews.length > 0 && ratingValue !== undefined
      ? {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': `${SITE_URL}/#organization`,
          name: 'ReefTech Solutions',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: ratingValue.toFixed(1),
            reviewCount,
            bestRating: 5,
            worstRating: 1,
          },
          review: reviews.map((r) => ({
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: r.rating,
              bestRating: 5,
              worstRating: 1,
            },
            author: { '@type': 'Person', name: r.author },
            reviewBody: r.text,
            datePublished: new Date(r.timestamp * 1000).toISOString().slice(0, 10),
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-white">
      {reviewsJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
        />
      )}
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Customer Reviews
          </h1>
          <p className="text-xl text-slate-600">
            What our customers say about working with ReefTech Solutions.
          </p>
          {ratingValue !== undefined && reviewCount > 0 && (
            <div className="mt-4 flex items-center gap-2">
              <span className="text-amber-500 text-lg" aria-hidden="true">
                {'★'.repeat(Math.round(ratingValue))}
                {'☆'.repeat(5 - Math.round(ratingValue))}
              </span>
              <span className="text-slate-700 font-semibold">
                {ratingValue.toFixed(1)} stars
              </span>
              <span className="text-slate-500">
                from {reviewCount.toLocaleString()} Google review
                {reviewCount === 1 ? '' : 's'}
              </span>
            </div>
          )}
        </div>

        {reviews.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 p-8 bg-slate-50">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Reviews coming soon
            </h2>
            <p className="text-slate-700 mb-4">
              We&apos;re collecting and publishing customer reviews here. In the meantime,
              if you&apos;d like to leave us a review, we&apos;d love to hear from you.
            </p>
            <Link
              href="/#request-form"
              className="inline-block rounded-lg bg-gradient-to-r from-lime-500 to-cyan-500 px-5 py-3 font-semibold text-slate-900 hover:opacity-90 transition"
            >
              Get in touch
            </Link>
          </div>
        ) : (
          <ul className="space-y-6">
            {reviews.map((r, i) => (
              <li key={`${r.timestamp}-${i}`} className="rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-amber-500 text-lg" aria-hidden="true">
                    {'★'.repeat(Math.round(r.rating))}
                    {'☆'.repeat(5 - Math.round(r.rating))}
                  </span>
                  <span className="font-semibold text-slate-900">{r.author}</span>
                  <span className="text-sm text-slate-500">{r.relativeTime}</span>
                </div>
                <p className="text-slate-700 leading-relaxed">{r.text}</p>
              </li>
            ))}
          </ul>
        )}

        {data.googleUrl && (
          <div className="mt-8">
            <a
              href={data.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-700 font-semibold hover:underline"
            >
              See all reviews on Google →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
