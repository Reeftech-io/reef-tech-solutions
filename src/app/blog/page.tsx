import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from './posts';

const SITE_URL = 'https://www.reeftech.io';

export const metadata: Metadata = {
  title: 'Blog — Property Maintenance & Building Technology on the Big Island',
  description:
    "Tips, guides, and updates from ReefTech Solutions on electrical, plumbing, fire alarms, access control, and spa & sauna service for Hawaii's Big Island.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'ReefTech Solutions Blog',
    description:
      "Tips and guides on electrical, plumbing, access control, fire alarms, and spa & sauna service for Hawaii's Big Island.",
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
};

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': `${SITE_URL}/blog#blog`,
  url: `${SITE_URL}/blog`,
  name: 'ReefTech Solutions Blog',
  publisher: { '@id': `${SITE_URL}/#organization` },
  blogPost: blogPosts.map((p) => ({
    '@type': 'BlogPosting',
    headline: p.title,
    url: `${SITE_URL}/blog/${p.slug}`,
    datePublished: p.datePublished,
    dateModified: p.dateModified ?? p.datePublished,
    author: { '@type': 'Organization', name: p.author },
  })),
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished)
  );
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Blog</h1>
          <p className="text-xl text-slate-600">
            Tips, guides, and notes from the field — electrical, plumbing, access
            control, fire alarms, and spa &amp; sauna service across the Big Island.
          </p>
        </div>

        {sorted.length === 0 ? (
          <p className="text-slate-600">No posts yet. Check back soon.</p>
        ) : (
          <ul className="space-y-6">
            {sorted.map((p) => (
              <li
                key={p.slug}
                className="rounded-2xl border border-slate-200 p-6 hover:border-cyan-300 hover:shadow-md transition"
              >
                <Link href={`/blog/${p.slug}`} className="block group">
                  <div className="flex items-center gap-3 mb-2 text-sm text-slate-500">
                    <span className="rounded-full bg-cyan-50 text-cyan-700 px-2 py-0.5 font-semibold">
                      {p.category}
                    </span>
                    <span>
                      {new Date(p.datePublished).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span>·</span>
                    <span>{p.readingTimeMinutes} min read</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-cyan-700 mb-2">
                    {p.title}
                  </h2>
                  <p className="text-slate-600">{p.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
