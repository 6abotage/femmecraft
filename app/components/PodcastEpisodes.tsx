'use client'

import { useState, useEffect } from 'react'

export default function PodcastEpisodes({ podcastId }: { podcastId: string }) {
  const [episodes, setEpisodes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <ul className="space-y-4">
      {episodes.map((episode: any) => (
        <li key={episode.id} className="border p-4 rounded-md">
          <h3 className="font-bold">{episode.name}</h3>
          <p className="text-sm text-gray-600">{episode.description}</p>
        </li>
      ))}
    </ul>
  )
}