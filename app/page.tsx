"use client";

import Link from "next/link";
import Image from "next/image";
import LatestEpisodePlayer from "./components/LatestEpisodePlayer";
import { InteractiveInvertedCurvedLine } from "./components/InteractiveCurvedLine";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import TeamPicture from "./team.jpg";
import SherryHero from "./sherry-bg.jpg";
import EventOne from "./events.jpg";
import EventTwo from "./events2.jpg";
import Autoplay from "embla-carousel-autoplay";

const teamMembers = [
  {
    name: "Emma Johnson",
    role: "Host & Producer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description:
      "Emma is the creative force behind FEMME CRAFT, bringing her passion for technology and craftsmanship to every episode. With her background in both tech and traditional crafts, she bridges the gap between these worlds, inspiring listeners to explore the intersection of innovation and artistry.",
    animation: "animate-morphLight",
  },
];

export default function Home() {
  const podcastId = "2MnJGjpO8t40i9lJFBqPkM";

  return (
    <div className="min-h-screen flex flex-col">
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
            artistry, inspiring listeners to explore the exciting world where
            tech meets craft.
          </p>
          <Button className="bg-neonGreen text-gray-900 hover:bg-green-400">
            Listen Now
          </Button>
        </div>

        <div className="w-3/4 md:w-1/3 aspect-square relative overflow-hidden rounded-full">
          <Image
            src={SherryHero}
            alt="Sherry Hero"
            layout="fill"
            objectFit="cover"
            className={teamMembers[0].animation}
          />
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <LatestEpisodePlayer podcastId={podcastId} />
      </div>

      <section className="bg-gray-100 py-12 ">
        <div className="container mx-auto gap-8 max-w-screen-2xl px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Events & Brands
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-between">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
              className="w-full md:w-1/2 mb-8 md:mb-0"
            >
              <CarouselContent>
                <CarouselItem>
                  <Image
                    src={EventOne}
                    alt="Event One"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src={EventTwo}
                    alt="Event Two"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
            <div className="w-full md:w-1/2 md:pl-8">
              <p className="text-lg mb-6">
                FEMMECRAFT is dedicated to creating events that connect BIPOC
                women in tech and crafts. We've partnered with innovative brands
                to bring you unique experiences that celebrate creativity and
                diversity. Our events provide a platform for networking,
                learning, and showcasing the incredible talents within our
                community.
              </p>
              <Link href="/events" passHref>
                <Button variant="outline">
                  Learn More About Our Events & Brand Partnerships
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <InfiniteSlider
          gap={16}
          duration={30}
          durationOnHover={100}
          className="py-12"
        >
          <Image
            src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            alt="Tech Brand 1"
            width={120}
            height={120}
            className="h-[120px] w-auto object-contain"
          />
          <Image
            src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            alt="Tech Brand 2"
            width={120}
            height={120}
            className="h-[120px] w-auto object-contain"
          />
          <Image
            src="https://images.unsplash.com/photo-1606293459339-aa5d34a7b0e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            alt="Craft Brand 2"
            width={120}
            height={120}
            className="h-[120px] w-auto object-contain"
          />
          <Image
            src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            alt="Tech Brand 3"
            width={120}
            height={120}
            className="h-[120px] w-auto object-contain"
          />
          <Image
            src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            alt="Tech Brand 1"
            width={120}
            height={120}
            className="h-[120px] w-auto object-contain"
          />
          <Image
            src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            alt="Craft Brand 3"
            width={120}
            height={120}
            className="h-[120px] w-auto object-contain"
          />
        </InfiniteSlider>
      </section>

      <section className="py-12 px-4 md:px-8 pb-24">
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
                diversity, fosters innovation, and builds a supportive
                community. Today, FEMMECRAFT has grown into a vibrant network of
                creators, innovators, and change-makers, all working together to
                push the boundaries of technology and craftsmanship.
              </p>
              <Link href="/team" passHref>
                <Button variant="outline">Meet Our Incredible Team</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <InteractiveInvertedCurvedLine />
    </div>
  );
}
