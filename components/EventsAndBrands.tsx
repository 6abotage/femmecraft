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
          src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          alt="Tech Brand 1"
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
          src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          alt="Tech Brand 1"
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
        <Image
          src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          alt="Craft Brand 3"
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
        <Image
          src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          alt="Craft Brand 3"
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
        <Image
          src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          alt="Craft Brand 3"
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
        <Image
          src="https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          alt="Craft Brand 3"
          width={120}
          height={120}
          className="h-[120px] w-auto object-contain"
        />
      </InfiniteSlider>
    </section>
  );
}
