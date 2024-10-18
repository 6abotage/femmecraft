import ChronologicalTimeline from "../components/ChronicalTimeline";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-8">
          About FEMMECRAFT
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          FEMMECRAFT is more than just a podcast; it's a journey of growth,
          empowerment, and community building. From our humble beginnings in a
          small café to hosting large-scale events and expanding into video
          content, we've been on an incredible adventure. Here's our story:
        </p>
      </div>
      <ChronologicalTimeline />
    </div>
  );
}
