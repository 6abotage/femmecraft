import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import EventOne from "@/assets/pictures/events.webp";
import EventTwo from "@/assets/pictures/events2.webp";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

import BloomAndWild from "@/assets/brands/Bloom & Wild png.png";
import Halara from "@/assets/brands/Halara png.png";
import Lillet from "@/assets/brands/Lillet png.webp";
import Pepsi from "@/assets/brands/Pepsi png.png";
import Barebells from "@/assets/brands/barebells png logo.png";
import Guess from "@/assets/brands/guess.png";
import JohnReed from "@/assets/brands/john reed png.png";
import Lululemon from "@/assets/brands/lululemon png.png";
import MilanoVice from "@/assets/brands/milano vice logopng.png";
import Mindspace from "@/assets/brands/mindspace logo png.png";
import Nevernot from "@/assets/brands/nevernot logo png.webp";
import Shure from "@/assets/brands/shure png.png";
import VitaminWell from "@/assets/brands/vitamin well png.webp";

export default function EventsAndBrandsSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto gap-8 max-w-screen-2xl px-4 md:px-8">
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
              Fade(),
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 ">
              Events & Brands
            </h2>
            <p className="text-lg mb-6">
              FEMMECRAFT is dedicated to creating events that connect BIPOC
              women in tech and crafts. We&apos;ve partnered with innovative
              brands to bring you unique experiences that celebrate creativity
              and diversity. Our events provide a platform for networking,
              learning, and showcasing the incredible talents within our
              community.
            </p>
            <Link href="/events" passHref>
              <Button variant="outline">Schau dir unsere Events an</Button>
            </Link>
          </div>
        </div>
      </div>
      <InfiniteSlider
        gap={16}
        duration={30}
        durationOnHover={100}
        className="py-12"
        direction="horizontal"
        reverse
      >
        <Image
          src={BloomAndWild}
          alt="Bloom And Wild"
          width={120}
          height={120}
          className="h-[120px] w-auto object-contain"
        />
        <Image
          src={Halara}
          alt="Halara"
          width={120}
          height={120}
          className="h-[120px] w-auto object-contain"
        />
        <Image
          src={Lillet}
          alt="Lillet"
          width={120}
          height={120}
          className="h-[120px] w-auto object-contain"
        />
        <Image
          src={Pepsi}
          alt="Pepsi"
          width={120}
          height={120}
          className="h-[120px] w-auto object-contain"
        />
        <Image
          src={Barebells}
          alt="Barebells"
          width={120}
          height={120}
          className="h-[120px] w-auto object-contain"
        />
        <Image
          src={Guess}
          alt="Guess"
          width={120}
          height={120}
          className="h-[120px] w-auto object-contain"
        />
        <Image
          src={JohnReed}
          alt="John Reed"
          width={120}
          height={120}
          className="h-[120px] w-auto object-contain"
        />
        <Image
          src={Lululemon}
          alt="Lululemon"
          width={120}
          height={120}
          className="h-[120px] w-auto object-contain"
        />
        <Image
          src={MilanoVice}
          alt="Milano Vice"
          width={120}
          height={120}
          className="h-[120px] w-auto object-contain"
        />
        <Image
          src={Mindspace}
          alt="Mindspace"
          width={120}
          height={120}
          className="h-[120px] w-auto object-contain"
        />
        <Image
          src={Nevernot}
          alt="Nevernot"
          width={120}
          height={120}
          className="h-[120px] w-auto object-contain"
        />
        <Image
          src={Shure}
          alt="Shure"
          width={120}
          height={120}
          className="h-[120px] w-auto object-contain"
        />
        <Image
          src={VitaminWell}
          alt="Vitamin Well"
          width={120}
          height={120}
          className="h-[120px] w-auto object-contain"
        />
      </InfiniteSlider>
    </section>
  );
}
