// Blog post registry. Add new posts here.
// Each post body is JSX-friendly markdown-ish HTML rendered server-side via dangerouslySetInnerHTML.
// Keep slugs lowercase, hyphenated, and stable — they are part of the URL and sitemap.

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  datePublished: string; // ISO YYYY-MM-DD
  dateModified?: string;
  author: string;
  category: string;
  readingTimeMinutes: number;
  // HTML body. Use <h2>, <h3>, <p>, <ul>, <li>, <strong>, <a>.
  bodyHtml: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'flologic-smart-water-shutoff-big-island',
    title: 'FloLogic smart water shutoff: why every Big Island home should have one',
    description:
      'How a smart water shutoff valve like FloLogic prevents catastrophic leaks, what installation looks like, and why it matters on the Big Island.',
    datePublished: '2026-06-12',
    author: 'ReefTech Solutions',
    category: 'Plumbing',
    readingTimeMinutes: 4,
    bodyHtml: `
      <p>If you own a home or manage a vacation rental on the Big Island, water damage is one of the most expensive and most preventable problems you can have. A pinhole leak behind a wall, a failed dishwasher hose, or a burst water heater can dump thousands of gallons before anyone notices — especially in a vacation rental that sits empty between guests.</p>
      <p>That's where a smart water shutoff like <strong>FloLogic</strong> comes in.</p>

      <h2>What FloLogic does</h2>
      <p>FloLogic installs on your main water line. It continuously monitors flow and automatically shuts off the water if it detects:</p>
      <ul>
        <li>A leak that runs longer than expected</li>
        <li>Abnormally high flow rates that signal a burst pipe</li>
        <li>Slow drip-style leaks over time</li>
      </ul>
      <p>You also get an app on your phone so you can shut the water off manually from anywhere — useful when you're off-island.</p>

      <h2>Why this matters on the Big Island</h2>
      <p>A lot of properties here are second homes, rental properties, or sit empty during off-season. By the time someone notices a leak, the damage is already done. A FloLogic-style valve stops the bleed within seconds and notifies you immediately.</p>

      <h2>Installation</h2>
      <p>This is plumbing work that has to be done right. The valve installs on the main supply line, and the system needs power and a network connection. We handle the full install on Big Island properties — see our <a href="/plumbing-services">plumbing services</a> page for details.</p>

      <h2>When to call</h2>
      <p>If you've ever had a leak, are buying or building a property, or own a vacation rental, a smart water shutoff pays for itself the first time it does its job. Call <a href="tel:+1-808-303-4627">(808) 303-4627</a> or use our <a href="/#request-form">request form</a> for a quote.</p>
    `,
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);
