"use client";

import { useEffect, useState } from "react";
import LatestEpisodePlayer from "./components/LatestEpisodePlayer";

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

export function InteractiveInvertedCurvedLine() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      const newMousePos = {
        x: event.clientX,
        y: event.clientY,
      };
      setMousePos(newMousePos);

      // Check if mouse has crossed the diagonal
      const crossedDiagonal =
        newMousePos.y > (dimensions.height / dimensions.width) * newMousePos.x;
      setInverted(crossedDiagonal);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dimensions.height, dimensions.width]);

  const createPath = () => {
    const { width, height } = dimensions;

    // Define start and end points based on inversion state
    const start = inverted
      ? { x: width * 0.05, y: height * 0.0 } // Top-left when inverted
      : { x: width * 0, y: height * 0.05 }; // Bottom-left when normal
    const end = inverted
      ? { x: width * 1.0, y: height * 0.8 } // Bottom-right when inverted
      : { x: width * 0.9, y: height * 1.0 }; // Top-right when normal

    // Mirror point function
    const mirrorPoint = (point: { x: number; y: number }) => {
      const t = (point.x / width + point.y / height) / 2;
      return {
        x: (1 - t) * width,
        y: (1 - t) * height,
      };
    };

    // Calculate mouse influence
    const mouseInfluence = {
      x: mousePos.x / width,
      y: mousePos.y / height - 0.4,
    };

    // Calculate control points
    let control1, control2;

    if (inverted) {
      control1 = {
        x: width * (1 + mouseInfluence.x * -1.2) * 0.2,
        y: height * (1 - mouseInfluence.y * -1.2) * 0.7,
      };
      control2 = {
        x: width * (1 - mouseInfluence.x * -0.8) * 0.2,
        y: height * (1 - mouseInfluence.y * -0.8) * 0.8,
      };
    } else {
      control1 = {
        x: width * (mouseInfluence.x * 0.8) + width * 0.2,
        y: height * (mouseInfluence.y * 0.8),
      };
      control2 = {
        x: width * (mouseInfluence.x * 0.2 + 0.8),
        y: height * (mouseInfluence.y * 0.2 + 0.8),
      };
    }

    // Construct the path
    return `
      M ${start.x},${start.y}
      C ${control1.x},${control1.y} ${control2.x},${control2.y} ${end.x},${end.y}
    `;
  };

  return (
    <svg
      width="100%"
      height="100%"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
      }}
    >
      <path
        d={createPath()}
        fill="none"
        stroke="#39FF14" // Blue color to match the image
        strokeWidth="2" // Thin stroke
        strokeLinecap="round" // Round line endings
        strokeLinejoin="round" // Round line joins
      />
    </svg>
  );
}

export default function Home() {
  const podcastId = "2MnJGjpO8t40i9lJFBqPkM";
  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative h-1/2-screen flex items-center justify-center  text-white p-4">
        <div className="w-1/2 md:w-1/4 aspect-square relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-cover bg-center ${teamMembers[0].animation}`}
            style={{ backgroundImage: `url(${teamMembers[0].image})` }}
          ></div>
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto text-black">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to FEMMECRAFT
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Exploring the intersection of technology and craftsmanship
          </p>
          <p className="text-lg md:text-xl mb-8">
            Join Emma Johnson as she bridges the gap between innovation and
            artistry, inspiring listeners to explore the exciting world where
            tech meets craft.
          </p>
          <button className="bg-neonGreen text-gray-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-400 transition-colors duration-300">
            Listen Now
          </button>
        </div>
      </section>

      {/* Podcast Content */}
      <div className="container mx-auto px-4 py-8">
        <LatestEpisodePlayer podcastId={podcastId} />
      </div>
      <InteractiveInvertedCurvedLine />
    </div>
  );
}
