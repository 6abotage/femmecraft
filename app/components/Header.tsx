import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex flex-col items-center text-center">
            <span className="text-3xl font-bold leading-none text-neonGreen">FEMME</span>
            <span className="text-3xl font-bold leading-none text-neonGreen">CRAFT</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="hover:text-neonGreen transition-colors">About</Link>
            <Link href="/player" className="hover:text-neonGreen transition-colors">Player</Link>
            <Link href="/guests" className="hover:text-neonGreen transition-colors">Guests</Link>
            <Link href="/events" className="hover:text-neonGreen transition-colors">Events</Link>
            <Link href="/teams" className="hover:text-neonGreen transition-colors">Teams</Link>
          </nav>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}