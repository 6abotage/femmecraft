"use client";
import { useEffect, useState } from "react";
import PodcastEpisodes from "./components/PodcastEpisodes";

export default function Home() {
  const podcastId = "2MnJGjpO8t40i9lJFBqPkM";

  return <InteractiveCurvedLine />;
}

export function InteractiveCurvedLine() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: event.clientX,
        y: event.clientY,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const createPath = () => {
    const { width, height } = dimensions;

    // Adjust start and end points
    const start = { x: width * 0.05, y: height * 0.95 }; // More bottom-left
    const end = { x: width * 0.95, y: height * 0.05 }; // More top-right

    // Use mouse position to influence the control points
    const control1 = {
      x: mousePos.x * 0.5,
      y: mousePos.y * 0.5,
    };
    const control2 = {
      x: width - (width - mousePos.x) * 0.5,
      y: height - (height - mousePos.y) * 0.5,
    };

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
        stroke="#39FF14" // Neon green color
        strokeWidth="2" // Thin stroke
        strokeLinecap="round" // Round line endings
        strokeLinejoin="round" // Round line joins
      />
    </svg>
  );
}
