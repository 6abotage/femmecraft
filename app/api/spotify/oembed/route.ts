import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const episodeId = searchParams.get("id");

  if (!episodeId) {
    return NextResponse.json(
      { error: "Episode ID is required" },
      { status: 400 }
    );
  }

  const spotifyUrl = `https://open.spotify.com/episode/${episodeId}`;
  const oembedUrl = `https://open.spotify.com/oembed?url=${encodeURIComponent(
    spotifyUrl
  )}`;

  try {
    const response = await fetch(oembedUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch oEmbed data");
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch oEmbed data" },
      { status: 500 }
    );
  }
}
