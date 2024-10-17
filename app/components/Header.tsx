"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white relative">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex flex-col items-start text-left">
            <span className="text-3xl font-bold leading-none text-neonGreen">
              FEMME
            </span>
            <span className="text-3xl font-bold leading-none text-neonGreen">
              CRAFT
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/about"
              className="hover:text-neonGreen transition-colors"
            >
              About
            </Link>
            <Link
              href="/player"
              className="hover:text-neonGreen transition-colors"
            >
              Player
            </Link>
            <Link
              href="/guests"
              className="hover:text-neonGreen transition-colors"
            >
              Guests
            </Link>
            <Link
              href="/events"
              className="hover:text-neonGreen transition-colors"
            >
              Events
            </Link>
            <Link
              href="/teams"
              className="hover:text-neonGreen transition-colors"
            >
              Teams
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 relative"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-90 text-white transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40 flex flex-col items-center justify-center space-y-8`}
      >
        <Link
          href="/about"
          className="text-2xl uppercase hover:text-neonGreen transition-colors"
          onClick={toggleMobileMenu}
        >
          About
        </Link>
        <Link
          href="/player"
          className="text-2xl uppercase hover:text-neonGreen transition-colors"
          onClick={toggleMobileMenu}
        >
          Player
        </Link>
        <Link
          href="/guests"
          className="text-2xl uppercase hover:text-neonGreen transition-colors"
          onClick={toggleMobileMenu}
        >
          Guests
        </Link>
        <Link
          href="/events"
          className="text-2xl uppercase hover:text-neonGreen transition-colors"
          onClick={toggleMobileMenu}
        >
          Events
        </Link>
        <Link
          href="/teams"
          className="text-2xl uppercase hover:text-neonGreen transition-colors"
          onClick={toggleMobileMenu}
        >
          Teams
        </Link>
      </div>
    </header>
  );
}
