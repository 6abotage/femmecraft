'use client'

import { useState, useEffect } from 'react'

const teamMembers = [
  {
    name: "Emma Johnson",
    role: "Host & Producer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description: "Emma is the creative force behind FEMME CRAFT, bringing her passion for technology and craftsmanship to every episode. With her background in both tech and traditional crafts, she bridges the gap between these worlds, inspiring listeners to explore the intersection of innovation and artistry.",
    animation: "animate-morphLight"
  },
  {
    name: "Sophia Chen",
    role: "Co-host & Tech Expert",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description: "Sophia's deep knowledge of the tech industry adds invaluable insights to our discussions on innovation and entrepreneurship. Her experience in software development and AI research brings cutting-edge perspectives to each episode, helping our audience stay ahead of the curve in the rapidly evolving tech landscape.",
    animation: "animate-morphVideo"
  },
  {
    name: "Olivia Martinez",
    role: "Sound Engineer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description: "Olivia ensures that every episode of FEMME CRAFT sounds crisp and professional, enhancing the listening experience for our audience. Her expertise in audio production and sound design creates an immersive auditory environment that brings our conversations to life, making complex topics accessible and engaging for all listeners.",
    animation: "animate-morphSound"
  },
  {
    name: "Zoe Thompson",
    role: "Guest Coordinator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    description: "Zoe's network and communication skills help us bring diverse and inspiring guests to the show, enriching our content. Her talent for identifying unique voices in the tech and craft communities ensures that FEMME CRAFT always has fresh perspectives and exciting stories to share with our listeners.",
    animation: "animate-morphBlinds"
  }
]

export default function Team() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h1>
        <div className="space-y-12 md:space-y-24">
          {teamMembers.map((member, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
              <div className="w-full md:w-1/2 aspect-square relative overflow-hidden">
                <div 
                  className={`absolute inset-0 bg-cover bg-center ${member.animation}`}
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>
              </div>
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-3xl font-semibold text-gray-800">{member.name}</h2>
                <p className="text-lg font-medium text-neonGreen">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}