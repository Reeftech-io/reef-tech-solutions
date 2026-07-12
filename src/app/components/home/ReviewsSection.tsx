'use client';

import { useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

type Review = {
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
  reviews: Review[];
  error?: string;
};


function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= Math.round(rating)
              ? 'fill-amber-400 text-amber-400'
              : 'text-slate-300'
          }`}
        />
      ))}
    </div>
  );
}

function Initials({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase() ?? '')
    .join('');
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-lime-500 text-white font-semibold text-sm shadow-md"
      aria-hidden="true"
    >
      {initials || '★'}
    </div>
  );
}

export default function ReviewsSection() {
  const [data, setData] = useState<ReviewsPayload | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/google-reviews')
      .then((r) => r.json() as Promise<ReviewsPayload>)
      .then((payload) => {
        if (cancelled) return;
        setData(payload);
        setLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setData({ ok: false, reviews: [], error: 'Failed to load reviews.' });
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const reviews = data?.reviews ?? [];

  if (loading) {
    return (
      <section
        aria-label="Customer reviews"
        className="relative border-t border-slate-100 bg-gradient-to-b from-white to-slate-50 py-12"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="h-32 rounded-2xl bg-slate-100/60 animate-pulse" />
        </div>
      </section>
    );
  }

  if (!reviews.length) {
    // Silent fail — don't surface API errors to visitors.
    return null;
  }

  const headline = data?.rating
    ? `${data.rating.toFixed(1)} stars on Google`
    : 'What our customers say';

  // Duplicate reviews to create a seamless infinite scroll effect
  const marqueeItems = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section
      aria-label="Customer reviews from Google"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Wave background — fixed, never shifts during review rotation */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'url(/photos/wave-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Dark overlay so text remains readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/55"
      />

      <div className="container relative mx-auto px-4 max-w-7xl flex flex-col items-center">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-cyan-300 shadow-sm backdrop-blur">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-3 w-3"
              fill="currentColor"
            >
              <path d="M12 11.5v2.9h4.8c-.2 1.2-1.4 3.6-4.8 3.6-2.9 0-5.2-2.4-5.2-5.3s2.3-5.3 5.2-5.3c1.6 0 2.7.7 3.3 1.3l2.2-2.2C16.1 5.2 14.3 4.4 12 4.4 7.8 4.4 4.4 7.8 4.4 12s3.4 7.6 7.6 7.6c4.4 0 7.3-3.1 7.3-7.5 0-.5-.1-.9-.1-1.3H12z" />
            </svg>
            Verified Google reviews
          </div>

          <h2 className="mt-3 font-tan-headline text-2xl md:text-3xl font-bold tracking-tight text-white">
            <span className="bg-gradient-to-r from-teal-700 via-cyan-600 to-lime-600 bg-clip-text text-transparent">
              {headline}
            </span>
          </h2>
          <div className="mt-2 flex items-center gap-2.5 text-white/80">
            {data?.rating !== undefined && <Stars rating={data.rating} />}
            {data?.totalRatings !== undefined && (
              <span className="text-xs text-white/80">
                {data.totalRatings.toLocaleString()} review
                {data.totalRatings === 1 ? '' : 's'} from Big Island neighbors
              </span>
            )}
          </div>
        </div>

        {/* Marquee Carousel Container */}
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
          {/* Gradient masks for smooth fade in/out at edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#0d171d]/90 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#0d171d]/90 to-transparent z-10" />

          {/* Scrolling Track */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4">
            {marqueeItems.map((review, idx) => (
              <div 
                key={`${review.timestamp}-${idx}`} 
                className="relative flex-shrink-0 w-[300px] md:w-[400px] mx-3 md:mx-4 rounded-2xl border border-white/20 bg-white/10 p-6 md:p-8 shadow-[0_20px_45px_-25px_rgba(8,47,73,0.45)] backdrop-blur-md"
              >
                <Quote
                  aria-hidden="true"
                  className="absolute -top-3 left-5 h-7 w-7 rounded-full bg-gradient-to-br from-lime-500 to-cyan-500 p-1.5 text-white shadow-md"
                />
                <Stars rating={review.rating} />
                <blockquote className="mt-4 text-[14px] md:text-[15px] leading-relaxed text-white/90 line-clamp-4 min-h-[90px]">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  {review.profilePhoto ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={review.profilePhoto}
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full object-cover shadow-md"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <Initials name={review.author} />
                  )}
                  <div className="flex flex-col leading-tight">
                    <span className="font-semibold text-white text-sm">
                      {review.author}
                    </span>
                    <span className="text-[11px] text-white/60">
                      {review.relativeTime} · via Google
                    </span>
                  </div>
                </figcaption>
              </div>
            ))}
          </div>
        </div>

        {/* Footer link */}
        {data?.googleUrl && (
          <div className="mt-5 flex justify-center">
            <a
              href={data.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white transition-colors"
            >
              See all {data.totalRatings ?? ''} reviews on Google
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
