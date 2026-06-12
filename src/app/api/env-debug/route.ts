import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// TEMPORARY debug endpoint — reports whether GOOGLE_MAPS_API_KEY is set
// at request time. Never returns the value itself. Delete after verifying.
export async function GET() {
  const key = process.env.GOOGLE_MAPS_API_KEY;
  return NextResponse.json(
    {
      hasKey: typeof key === 'string' && key.length > 0,
      keyLength: typeof key === 'string' ? key.length : 0,
      keyPrefix: typeof key === 'string' ? key.slice(0, 4) : null,
      vercelEnv: process.env.VERCEL_ENV ?? null,
      vercelUrl: process.env.VERCEL_URL ?? null,
      vercelRegion: process.env.VERCEL_REGION ?? null,
      runtime: process.env.NEXT_RUNTIME ?? 'unknown',
      nodeVersion: process.version,
    },
    { headers: { 'Cache-Control': 'no-store, max-age=0' } }
  );
}
