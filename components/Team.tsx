import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TeamPicture from "@/assets/pictures/team.webp";

export default function TeamSection() {
  return (
    <section className="py-12 px-4 md:px-8 pb-24 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Our Team
        </h2>
        <div className="flex flex-col md:flex-row-reverse items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pl-8">
            <Image
              src={TeamPicture}
              alt="FEMMECRAFT Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-6">
              FEMMECRAFT was founded by Sarah Chen and Emma Johnson to address
              the underrepresentation of BIPOC women in tech and traditional
              crafts. Their vision was to create a platform that celebrates
              diversity, fosters innovation, and builds a supportive community.
              Today, FEMMECRAFT has grown into a vibrant network of creators,
              innovators, and change-makers, all working together to push the
              boundaries of technology and craftsmanship.
            </p>
            <Link href="/team" passHref>
              <Button variant="outline">Meet Our Incredible Team</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
