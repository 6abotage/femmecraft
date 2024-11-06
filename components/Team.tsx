import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import team2 from "./team2.webp";

const TITLE = "Our Team";
const DESCRIPTION =
  "FEMME CRAFT ist ein inspirierender Podcast und eine Networking-Plattform, die von Sehriban Cirik gegründet wurde und darauf abzielt, Frauen und Menschen of Color zusammenzubringen.";

const DESCRIPTION_TWO =
  "Neben dem Podcast bietet FEMME CRAFT regelmäßig Live - Events, bei denen spannende Persönlichkeiten aus verschiedenen Bereichen Einblicke teilen und in Workshops ihr Wissen weitergeben.";

const DESCRIPTION_THREE =
  "Elif Baran, die als Brandmanagerin eine Schlüsselrolle spielt, gestaltet gemeinsam mit Social Media Managerin Eilar, Marketing Manager Malick und IT - Experten Dino die Events und die Plattform aktiv mit.FEMME CRAFT schafft Raum für authentische Begegnungen, neuen Austausch und das Wachstum kreativer Energien – beruflich wie privat.";

export default function TeamSection() {
  return (
    <section className="py-12 px-4 md:px-8 pb-24 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-start justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
            <Image
              src={team2}
              alt="FEMMECRAFT Team"
              width={600}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 ">{TITLE}</h2>
            <p className="text-lg mb-6">{DESCRIPTION}</p>
            <p className="text-lg mb-6">{DESCRIPTION_TWO}</p>
            <p className="text-lg mb-6">{DESCRIPTION_THREE}</p>
            <Link href="/team" passHref>
              <Button variant="outline">Lern uns kennen</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
