'use client'

import { useState, useEffect } from 'react'
import { SimplifiedEpisode } from '@spotify/web-api-ts-sdk'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function PodcastEpisodes({ podcastId }: { podcastId: string }) {
  const [episodes, setEpisodes] = useState<SimplifiedEpisode[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expandedEpisodes, setExpandedEpisodes] = useState<Set<string>>(new Set())

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch(`/api/spotify/podcast-episodes?id=${podcastId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch episodes')
        }
        const data = await response.json()
        setEpisodes(data.items)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchEpisodes()
  }, [podcastId])

  const toggleDescription = (episodeId: string) => {
    setExpandedEpisodes((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(episodeId)) {
        newSet.delete(episodeId)
      } else {
        newSet.add(episodeId)
      }
      return newSet
    })
  }

  if (loading) return <div className="text-center text-2xl font-bold">Loading...</div>
  if (error) return <div className="text-center text-2xl font-bold text-red-500">Error: {error}</div>

  return (
    <ul className="space-y-6 w-full max-w-2xl">
      {episodes.map((episode) => (
        <li key={episode.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{episode.name}</h3>
            <p className="text-sm text-gray-500 mb-4">
              Duration: {Math.floor(episode.duration_ms / 60000)} minutes
            </p>
            <div className="relative">
              <p className={`text-gray-600 text-sm overflow-hidden transition-all duration-300 ${
                expandedEpisodes.has(episode.id) ? 'max-h-full' : 'max-h-20'
              }`}>
                {episode.description}
              </p>
              {!expandedEpisodes.has(episode.id) && (
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
              )}
            </div>
            <button
              onClick={() => toggleDescription(episode.id)}
              className="mt-2 flex items-center text-neonGreen hover:text-green-400 transition-colors duration-200"
            >
              {expandedEpisodes.has(episode.id) ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-1" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-1" />
                  Show More
                </>
              )}
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}