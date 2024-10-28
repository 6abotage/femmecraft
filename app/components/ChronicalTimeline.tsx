"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Event1 from "@/assets/pictures/events.webp";
import Event2 from "@/assets/pictures/events2.webp";
import SherryBg from "@/assets/pictures/sherry-bg.webp";
import Team from "@/assets/pictures/team.webp";
import BlackWhite from "@/assets/pictures/season4blackwhite.webp";

const timelineEvents = [
  {
    year: 2021,
    title: "Der Anfang",
    description: [
      "<strong>Mai</strong>: Erste Podcast-Folge mit der besten Freundin im Café Yuna aufgenommen. Nutzung eines ausgeliehenen Rode Zoom-Mikrofons und eines Google-Dokuments zur Strukturierung des Gesprächs.",
      '<strong>Postproduktion</strong>: Akribische Bearbeitung in Audacity, inklusive Entfernen von "Ähms" und Lachen.',
      "<strong>Veröffentlichung</strong>: Zwischen Mai und September insgesamt 10 Folgen veröffentlicht.",
      "<strong>Design</strong>: Architekturstudentin engagiert, um die Gästinnen als Comic-Versionen mit Superkräften zu zeichnen.",
    ],
    image: Event1,
  },
  {
    year: 2022,
    title: "Wachstum und Erweiterung",
    description: [
      "<strong>Mai</strong>: Job gekündigt, um sich voll auf den Podcast zu konzentrieren und eine Community mit Mehrwert aufzubauen.",
      "<strong>Gästinnen</strong>: Erweiterung der Gästeliste um CEOs, Journalistinnen und Initiativenleiterinnen.",
      "<strong>Aufnahme-Locations</strong>: Unterschiedliche Locations, darunter ein Büro in Kreuzberg.",
      "<strong>Selbstbewusstsein</strong>: Die Gastgeberin wurde sicherer, integrierte Feedback und zeigte mehr von sich.",
    ],
    image: Event2,
  },
  {
    year: 2023,
    title: "Das Podcast-Erlebnis zum Leben erwecken",
    description: [
      '<strong>Februar</strong>: LinkedIn-Aufruf zur Partnersuche für das erste große "Connects"-Event von Femme Craft.',
      '<strong>November</strong>: Großes Event im "The Reed" anlässlich des Geburtstags. Partner wie PepsiCo, Lululemon, Lillet uvm. unterstützen.',
      "<strong>Teilnehmende</strong>: Über 400 Personen bei drei geplanten Events.",
    ],
    image: BlackWhite,
  },
  {
    year: 2024,
    title: "Multimediale Expansion",
    description: [
      "<strong>Juli</strong>: Artfusion x Femmecraft-Event im Mindspace Berlin, inklusive Live-Podcast-Aufnahme, Networking auf dem Rooftop, Drinks und Essen.",
      "<strong>Videofolgen</strong>: Erstmals Video-Folgen produziert, gestartet mit 3 Solo-Folgen und 12 Interviews in Kooperation mit Mindspace.",
      "<strong>Zukünftige Events</strong>: Weitere Events mit Fotografiska und Yoga-Coach Aleks sind geplant.",
      "<strong>Social Media</strong>: Aufbau von Instagram-, YouTube- und TikTok-Kanälen mit 300–400 Followern.",
    ],
    image: Team,
  },
];
interface TimelineEventProps {
  event: {
    year: number;
    title: string;
    description: string[];
    image: StaticImageData;
  };
  index: number;
}

const TimelineEvent = ({ event, index }: TimelineEventProps) => {
  // Determine margin classes based on index for desktop screens
  const imageMarginClass =
    index % 2 === 1 ? "md:mr-8 md:pl-4" : "md:ml-8 md:pr-4";

  return (
    <motion.div
      className={`flex flex-col md:flex-row items-start justify-between mb-24 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div
        className={`md:w-1/2 mb-8 md:mb-0 relative z-10 ${imageMarginClass}`}
      >
        <Image
          src={event.image}
          alt={event.title}
          width={500}
          height={400}
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>
      <div className="md:w-1/2 md:px-8 relative z-10">
        <h3 className="text-3xl font-bold mb-2 text-neonGreen">{event.year}</h3>
        <h4 className="text-xl font-semibold mb-4">{event.title}</h4>
        <ul className="text-gray-600 leading-relaxed list-disc pl-5 space-y-2">
          {event.description.map((point, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function ChronologicalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Use useScroll in the same component as the ref
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // Adjusted offset values
  });

  // Map scrollYProgress from [0, 1] to [0.15, 1]
  const scaleYRange = useTransform(scrollYProgress, [0, 1], [0.15, 1]);

  // Apply spring animation to scaleYRange
  const scaleY = useSpring(scaleYRange, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="container mx-auto px-4 py-16 relative" ref={containerRef}>
      <h2 className="text-4xl font-bold text-center mb-16">Unsere Reise</h2>
      <div className="relative overflow-hidden">
        {/* Gray background line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 z-0 top-0 bottom-0"></div>

        {/* Animated neonGreen line with spring animation */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-neonGreen z-10 origin-top top-0"
          style={{
            scaleY,
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
