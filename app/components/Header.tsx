"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatedGroup } from "@/components/ui/animatedGroup";
import { motion } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex flex-col items-start text-left z-50">
            <span className="text-2xl sm:text-3xl font-bold leading-none text-neonGreen ">
              FEMME
            </span>
            <span className="text-2xl sm:text-3xl font-bold leading-none text-neonGreen">
              CRAFT
            </span>
          </Link>

          <nav className="hidden md:flex space-x-6">
            {["About", "Player", "Guests", "Events", "Team"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="hover:text-neonGreen transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          <motion.button
            className="md:hidden z-50 relative w-8 h-8 p-2 flex flex-col justify-center items-center"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {[0, 1, 2].map((index) => (
              <motion.span
                key={index}
                className="w-full h-0.5 bg-white block mb-1 last:mb-0"
                initial={false}
                animate={{
                  rotate:
                    isMobileMenuOpen && index === 0
                      ? 45
                      : isMobileMenuOpen && index === 2
                      ? -45
                      : 0,
                  y:
                    isMobileMenuOpen && index === 0
                      ? 6
                      : isMobileMenuOpen && index === 2
                      ? -6
                      : 0,
                  opacity: isMobileMenuOpen && index === 1 ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </motion.button>
        </div>
      </div>

      <motion.div
        className="fixed inset-0 bg-black text-white z-40 md:hidden overflow-hidden flex items-center justify-center"
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { x: "0%" },
          closed: { x: "100%" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <AnimatedGroup
          className="flex flex-col items-center justify-center space-y-8 sm:space-y-12"
          preset="flip"
          key={`mobile-menu-${isMobileMenuOpen}`}
        >
          {["About", "Player", "Guests", "Events", "Team"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-xl sm:text-2xl uppercase hover:text-neonGreen transition-colors"
              onClick={toggleMobileMenu}
            >
              {item}
            </Link>
          ))}
        </AnimatedGroup>
      </motion.div>
    </header>
  );
}
