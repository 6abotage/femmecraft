"use client";

import { useState, useEffect } from "react";

const teamMembers = [
  {
    name: "Sehriban Cirik",
    role: "Host & Founder",
    image: "/avatars/sherry.webp",
    animation: "animate-morphLight",
  },
  {
    name: "Elif Baran",
    role: "Brand Managerin",
    image: "/avatars/elif.webp",
    animation: "animate-morphVideo",
  },
  {
    name: "Eilar Sotoudi Namin",
    role: "Social Media Managerin",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    animation: "animate-morphSound",
  },
  {
    name: "Malick",
    role: "Online Marketing Manager",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    animation: "animate-morphBlinds",
  },
  {
    name: "Dino",
    role: "IT",
    image: "/avatars/dino.webp",
    animation: "animate-morphBlinds",
  },
];

export default function Team() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Unser Team
        </h1>

        {/* First Row with 3 Members */}
        <div className="flex justify-around gap-8 mb-8 flex-wrap lg:flex-nowrap">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div key={index} className="flex flex-col  items-center gap-4">
              <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-cover bg-center ${member.animation}`}
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>
              </div>
              <h2 className="text-xl font-semibold text-gray-950 flex flex-col items-center">
                {member.name}
                <p className="text-sm font-medium text-gray-800">
                  {member.role}
                </p>
              </h2>
            </div>
          ))}
        </div>

        {/* Second Row with Last 2 Members */}
        <div className="flex justify-evenly  gap-8 flex-wrap lg:flex-nowrap">
          {teamMembers.slice(-2).map((member, index) => (
            <div key={index} className="flex flex-col items-center  gap-4">
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-cover bg-center ${member.animation}`}
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>
              </div>
              <h2 className="text-xl font-semibold text-gray-950 flex flex-col items-center">
                {member.name}
                <p className="text-sm font-medium text-gray-800">
                  {member.role}
                </p>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
