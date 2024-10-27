"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

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

  const fetchLatestEpisode = useCallback(async () => {
    try {
      const episodesResponse = await fetch(
        `/api/spotify/podcast-episodes?id=${podcastId}`
      );
      if (!episodesResponse.ok) throw new Error("Failed to fetch episodes");

      const episodesData = await episodesResponse.json();
      const latestEpisodeId = episodesData.items[0]?.id;
      if (!latestEpisodeId) throw new Error("No episodes found");

      const oembedResponse = await fetch(
        `/api/spotify/oembed?id=${latestEpisodeId}`
      );
      if (!oembedResponse.ok) throw new Error("Failed to fetch oEmbed data");

      const oembedData = await oembedResponse.json();
      setOembedData(oembedData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, [podcastId]);

  useEffect(() => {
    fetchLatestEpisode();
  }, [fetchLatestEpisode]);

  const aspectRatio = 351 / 624; // Original height / width

  return (
    <div className="w-full max-w-2xl mx-auto mb-8 px-4 sm:px-0">
      <h2 className="text-2xl font-bold mb-4">Latest Episode</h2>
      <div
        className="relative w-full"
        style={{ paddingBottom: `${aspectRatio * 100}%` }}
      >
        <AnimatePresence>
          {loading ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Skeleton className="w-full h-full rounded-md" />
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center text-center p-4 text-lg font-semibold text-red-500 bg-gray-100 rounded-md"
            >
              Error: {error}
            </motion.div>
          ) : oembedData ? (
            <motion.iframe
              key="iframe"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full rounded-md"
              title={oembedData.title}
              src={oembedData.html.match(/src="([^"]*)/)?.[1]}
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="eager"
            />
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
