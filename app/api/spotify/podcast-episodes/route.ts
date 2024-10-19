import { NextResponse } from 'next/server';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';

const spotify = SpotifyApi.withClientCredentials(
  process.env.SPOTIFY_CLIENT_ID!,
  process.env.SPOTIFY_CLIENT_SECRET!
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const podcastId = searchParams.get('id');

  if (!podcastId) {
    return NextResponse.json({ error: 'Podcast ID is required' }, { status: 400 });
  }

  try {
    const result = await spotify.shows.episodes(podcastId);

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch podcast episodes' }, { status: 500 });
  }
}