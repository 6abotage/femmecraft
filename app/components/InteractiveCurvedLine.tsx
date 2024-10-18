"use client";

import { useEffect, useState } from "react";

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
        stroke="#39FF14"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
