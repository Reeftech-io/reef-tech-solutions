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
 * Real customer reviews go here. Once this page is populated, you can re-enable
 * `aggregateRating` in `src/app/layout.tsx` (LocalBusiness JSON-LD).
 *
 * Required fields per review for valid schema:
 *   - author (real first name or full name)
 *   - rating (1-5)
 *   - reviewBody (1-3 sentences)
 *   - datePublished (YYYY-MM-DD)
 *
 * Google's review-snippet policy: the reviews used in JSON-LD must also be
 * visible on the same page to users.
 */
type CustomerReview = {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
};

const reviews: CustomerReview[] = [
  // Example shape — replace with real reviews:
  // {
  //   author: 'Jane S.',
  //   rating: 5,
  //   reviewBody: 'Joshua fixed our breaker panel same day. Professional and fast.',
  //   datePublished: '2025-08-14',
  // },
];

const reviewsJsonLd =
  reviews.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#organization`,
        name: 'ReefTech Solutions',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: (
            reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
          ).toFixed(1),
          reviewCount: reviews.length,
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
          reviewBody: r.reviewBody,
          datePublished: r.datePublished,
        })),
      }
    : null;

export default function ReviewsPage() {
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
              <li key={i} className="rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-amber-500 text-lg">
                    {'★'.repeat(r.rating)}
                    {'☆'.repeat(5 - r.rating)}
                  </span>
                  <span className="font-semibold text-slate-900">{r.author}</span>
                  <span className="text-sm text-slate-500">
                    {new Date(r.datePublished).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <p className="text-slate-700 leading-relaxed">{r.reviewBody}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
