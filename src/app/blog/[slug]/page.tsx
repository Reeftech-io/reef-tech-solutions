import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug } from '../posts';

const SITE_URL = 'https://www.reeftech.io';

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const postJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#blogposting`,
    headline: post.title,
    description: post.description,
    url,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: SITE_URL,
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    articleSection: post.category,
    image: `${SITE_URL}/photos/og-image.jpg`,
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postJsonLd) }}
      />
      <article className="container mx-auto px-4 py-32 max-w-3xl">
        <Link
          href="/blog"
          className="inline-block mb-8 text-sm text-cyan-700 hover:underline"
        >
          ← Back to blog
        </Link>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4 text-sm text-slate-500">
            <span className="rounded-full bg-cyan-50 text-cyan-700 px-2 py-0.5 font-semibold">
              {post.category}
            </span>
            <span>
              {new Date(post.datePublished).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>·</span>
            <span>{post.readingTimeMinutes} min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-xl text-slate-600">{post.description}</p>
        </div>

        <div
          className="blog-body text-slate-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-2 [&_p]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4 [&_ul]:space-y-1 [&_a]:text-cyan-700 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-cyan-800 [&_strong]:text-slate-900"
          dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
        />

        <div className="mt-16 rounded-2xl bg-slate-900 text-white p-8">
          <h2 className="text-xl font-bold mb-2">Need help with a project?</h2>
          <p className="text-slate-300 mb-4">
            Call us or send a request and we&apos;ll get you on the schedule.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+1-808-303-4627"
              className="rounded-lg bg-gradient-to-r from-lime-500 to-cyan-500 px-4 py-2 font-semibold text-slate-900 hover:opacity-90 transition"
            >
              (808) 303-4627
            </a>
            <Link
              href="/#request-form"
              className="rounded-lg border border-white/30 px-4 py-2 font-semibold text-white hover:bg-white/10 transition"
            >
              Request a quote
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
