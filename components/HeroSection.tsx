import Image from "next/image";
import { Button } from "@/components/ui/button";
import SherryHero from "@/assets/pictures/sherry-bg.webp";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between p-4 md:p-8 lg:p-12 max-w-screen-2xl mx-auto">
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
          Welcome to FEMMECRAFT
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4">
          Exploring the intersection of technology and craftsmanship
        </p>
        <p className="text-base md:text-lg mb-6">
          Join Emma Johnson as she bridges the gap between innovation and
          artistry, inspiring listeners to explore the exciting world where tech
          meets craft.
        </p>
        <Button className="bg-neonGreen text-gray-900 hover:bg-green-400">
          Listen Now
        </Button>
      </div>

      <div className="w-3/4 md:w-1/3 aspect-square relative overflow-hidden">
        <Image
          src={SherryHero}
          alt="Sherry Hero"
          layout="fill"
          objectFit="cover"
          className="animate-morphLight"
        />
      </div>
    </section>
  );
}
