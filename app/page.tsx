"use client";

import LatestEpisodePlayer from "./components/LatestEpisodePlayer";
import { InView } from "@/components/ui/inView";
import HeroSection from "@/components/HeroSection";
import EventsAndBrandsSection from "@/components/EventsAndBrands";
import TeamSection from "@/components/Team";

export default function Home() {
  const podcastId = "2MnJGjpO8t40i9lJFBqPkM";

  return (
    <div className="min-h-screen flex flex-col">
      <InView>
        <HeroSection />
      </InView>

      <InView>
        <section className="bg-gray-100 py-6">
          <div className="container mx-auto px-4 py-8">
            <LatestEpisodePlayer podcastId={podcastId} />
          </div>
        </section>
      </InView>

      <InView>
        <EventsAndBrandsSection />
      </InView>

      <InView>
        <TeamSection />
      </InView>
    </div>
  );
}
