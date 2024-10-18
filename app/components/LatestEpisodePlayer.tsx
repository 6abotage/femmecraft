"use client";

import { useState, useEffect, useRef } from "react";

interface OEmbedData {
  html: string;
  width: number;
  height: number;
  title: string;
}

export default function LatestEpisodePlayer({
  podcastId,
}: {
  podcastId: string;
}) {
  const [oembedData, setOembedData] = useState<OEmbedData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const fetchLatestEpisode = async () => {
      try {
        // First, fetch the latest episode ID
        const episodesResponse = await fetch(
          `/api/spotify/podcast-episodes?id=${podcastId}`
        );
        if (!episodesResponse.ok) {
          throw new Error("Failed to fetch episodes");
        }
        const episodesData = await episodesResponse.json();
        const latestEpisodeId = episodesData.items[0]?.id;

        if (!latestEpisodeId) {
          throw new Error("No episodes found");
        }

        // Then, fetch the oEmbed data for the latest episode
        const oembedResponse = await fetch(
          `/api/spotify/oembed?id=${latestEpisodeId}`
        );
        if (!oembedResponse.ok) {
          throw new Error("Failed to fetch oEmbed data");
        }
        const oembedData = await oembedResponse.json();
        setOembedData(oembedData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestEpisode();
  }, [podcastId]);

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        const parentWidth = iframeRef.current.parentElement?.clientWidth || 0;
        const aspectRatio = 351 / 624; // Original height / width
        const newHeight = Math.floor(parentWidth * aspectRatio);

        iframeRef.current.style.width = `${parentWidth}px`;
        iframeRef.current.style.height = `${newHeight}px`;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial size

    return () => window.removeEventListener("resize", handleResize);
  }, [oembedData]);

  if (loading)
    return (
      <div className="text-center text-2xl font-bold">
        Loading latest episode...
      </div>
    );
  if (error)
    return (
      <div className="text-center text-2xl font-bold text-red-500">
        Error: {error}
      </div>
    );
  if (!oembedData) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8 px-4 sm:px-0 ">
      <h2 className="text-2xl font-bold mb-4">Latest Episode</h2>
      <div className="relative w-full " style={{ paddingBottom: "56.25%" }}>
        <iframe
          ref={iframeRef}
          className="absolute top-0 left-0 w-full h-full rounded-md"
          title={oembedData.title}
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          src={oembedData.html.match(/src="([^"]*)/)?.[1]}
        />
      </div>
    </div>
  );
}
