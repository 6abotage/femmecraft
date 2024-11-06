import Image from "next/image";
import { Button } from "@/components/ui/button";
import SherryHero from "@/assets/pictures/sherry-bg.webp";
import Link from "next/link";

const HEADLINE = "Dein Raum zum Netzwerken, Lernen und Teilen!";
const DESCRIPTION =
  "FEMMECRAFT ist der Ort, an dem BiWoC mit ihren inspirierenden Lebensgeschichten gehört und gesehen werden.";

const DESCRIPTION_TWO =
  "Neben dem Podcast bietet FEMMECRAFT auf wiederkehrenden Networkevents Live-Talks und Workshops für Teilnehmer an, die voneinander lernen und über gesellschaftsrelevante Hürden sprechen möchten.";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between p-4 md:p-8 lg:p-12 max-w-screen-2xl mx-auto gap-4">
      <div className="w-3/4 md:w-1/3 aspect-square relative overflow-hidden">
        <Image
          src={SherryHero}
          alt="Sherry Hero"
          layout="fill"
          objectFit="cover"
          className="animate-morphLight"
        />
      </div>
      <div className="w-full md:w-1/2 text-justify md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl text-left md:text-4xl lg:text-6xl font-bold mb-2">
          Wilkommen
        </h1>
        <p className="text-md md:text-xl lg:text-2xl mb-3">{HEADLINE}</p>
        <p className="text-base md:text-lg mb-3">{DESCRIPTION}</p>
        <p className="text-base md:text-lg mb-3">{DESCRIPTION_TWO}</p>
        <Link href="/about" passHref>
          <Button className="bg-neonGreen text-gray-900 hover:bg-green-400">
            Mehr über FEMMECRAFT
          </Button>
        </Link>
      </div>
    </section>
  );
}
