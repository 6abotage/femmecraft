import PodcastEpisodes from "./components/PodcastEpisodes";

export default function Home() {
  const podcastId = "2MnJGjpO8t40i9lJFBqPkM";
  
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Latest Episodes</h1>
        <PodcastEpisodes podcastId={podcastId} />
      </div>
    </div>
  );
}