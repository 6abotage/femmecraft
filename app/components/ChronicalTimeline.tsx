"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Event1 from "../events.jpg";
import Event2 from "../events2.jpg";
import SherryBg from "../sherry-bg.jpg";
import Team from "../team.jpg";

const timelineEvents = [
  {
    year: 2021,
    title: "The Beginning",
    description:
      "First episode recorded with best friend at Cafe Yuna. Learned audio editing and created custom artwork for each episode.",
    image: Event1,
  },
  {
    year: 2022,
    title: "Growth and Expansion",
    description:
      "Recorded at various locations, including a professional studio in Kreuzberg. Hosted CEOs, initiative leaders, and journalists.",
    image: Event2,
  },
  {
    year: 2023,
    title: "Bringing the Podcast to Life",
    description:
      "Organized first large-scale Femme Craft event at The Reed. Partnered with brands like PepsiCo, Lululemon, and Vitamin Well.",
    image: SherryBg,
  },
  {
    year: 2024,
    title: "Multimedia Expansion",
    description:
      "Launched video episodes, collaborated with Mindspace, and expanded social media presence across Instagram, YouTube, and TikTok.",
    image: Team,
  },
];

interface TimelineEventProps {
  event: {
    year: number;
    title: string;
    description: string;
    image: StaticImageData;
  };
  index: number;
}

const TimelineEvent = ({ event, index }: TimelineEventProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row items-center justify-between mb-24 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0 relative z-10"
        style={{ y, opacity }}
      >
        <Image
          src={event.image}
          alt={event.title}
          width={400}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
      <div className="md:w-1/2 md:px-8 relative z-10">
        <motion.h3
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        >
          {event.year}
        </motion.h3>
        <motion.h4
          className="text-xl font-semibold mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        >
          {event.title}
        </motion.h4>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
        >
          {event.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default function ChronologicalTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="container mx-auto px-4 py-16" ref={containerRef}>
      <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 z-0"></div>
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-neonGreen z-0"
          style={{
            scaleY,
            originY: 0,
            height: "100%",
          }}
        />
        {timelineEvents.map((event, index) => (
          <TimelineEvent key={event.year} event={event} index={index} />
        ))}
      </div>
    </div>
  );
}
