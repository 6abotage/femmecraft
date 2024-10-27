"use client";

import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="/datenschutz"
              className="mr-4 hover:text-neon-green transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="hover:text-neon-green transition-colors"
            >
              Impressum
            </Link>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-green transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-green transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-green transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
