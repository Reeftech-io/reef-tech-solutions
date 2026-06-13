'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const ROTATION_MS = 6500;

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
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

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

  useEffect(() => {
    if (paused || reviews.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, ROTATION_MS);
    return () => window.clearInterval(id);
  }, [paused, reviews.length]);

  // Hide the section entirely until reviews load; if API errors or returns
  // nothing, don't render an empty stub.
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

  const current = reviews[index];
  const headline = data?.rating
    ? `${data.rating.toFixed(1)} stars on Google`
    : 'What our customers say';

  return (
    <section
      aria-label="Customer reviews from Google"
      className="relative border-t border-slate-100 bg-gradient-to-b from-white via-cyan-50/40 to-white py-12 md:py-14 overflow-hidden"
    >
      {/* Soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(60% 50% at 10% 10%, rgba(132,204,22,0.10), transparent 70%), radial-gradient(50% 50% at 90% 90%, rgba(34,211,238,0.10), transparent 70%)',
        }}
      />

      <div className="container relative mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-cyan-700 shadow-sm backdrop-blur">
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

          <h2 className="mt-3 font-tan-headline text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            {headline}
          </h2>
          <div className="mt-2 flex items-center gap-2.5 text-slate-600">
            {data?.rating !== undefined && <Stars rating={data.rating} />}
            {data?.totalRatings !== undefined && (
              <span className="text-xs">
                {data.totalRatings.toLocaleString()} review
                {data.totalRatings === 1 ? '' : 's'} from Big Island neighbors
              </span>
            )}
          </div>
        </div>

        {/* Carousel card */}
        <div
          className="relative mx-auto max-w-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="relative rounded-2xl border border-white bg-white/90 p-5 md:p-6 shadow-[0_20px_45px_-25px_rgba(8,47,73,0.22)] backdrop-blur min-h-[200px] sm:min-h-[190px]">
            <Quote
              aria-hidden="true"
              className="absolute -top-3 left-5 h-7 w-7 rounded-full bg-gradient-to-br from-lime-500 to-cyan-500 p-1.5 text-white shadow-md"
            />

            <AnimatePresence mode="wait">
              <motion.figure
                key={current.timestamp}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Stars rating={current.rating} />
                <blockquote className="mt-3 text-[15px] leading-relaxed text-slate-800 line-clamp-6">
                  &ldquo;{current.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2.5">
                  {current.profilePhoto ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={current.profilePhoto}
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full object-cover shadow-md"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <Initials name={current.author} />
                  )}
                  <div className="flex flex-col leading-tight">
                    <span className="font-semibold text-slate-900 text-sm">
                      {current.author}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {current.relativeTime} · via Google
                    </span>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Dot pagination */}
          {reviews.length > 1 && (
            <div className="mt-4 flex items-center justify-center gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Show review ${i + 1} of ${reviews.length}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? 'w-6 bg-gradient-to-r from-lime-500 to-cyan-500'
                      : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer link */}
        {data?.googleUrl && (
          <div className="mt-5 flex justify-center">
            <a
              href={data.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-700 hover:text-cyan-800 transition-colors"
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
