"use client";

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import Event1 from "@/assets/pictures/events.webp";
import Event2 from "@/assets/pictures/events2.webp";
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

export default function ChronologicalTimeline() {
  const mappedData = timelineEvents.map((event) => ({
    title: `${event.year}: ${event.title}`,
    content: (
      <div className="flex flex-col items-start justify-between">
        <Image
          src={event.image}
          alt={event.title}
          width={500}
          height={400}
          className="rounded-lg shadow-lg w-3/4 h-auto object-cover"
        />
        <div className="md:w-3/4  py-10 relative z-10 mr-auto">
          <ul className="text-gray-600 leading-relaxed list-none space-y-2">
            {event.description.map((point, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </div>
      </div>
    ),
  }));

  return <Timeline data={mappedData} />;
}
