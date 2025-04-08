'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { supabase } from '@/lib/supabase'
import type { NearbyUser } from '@/types/NearbyUser'

// Dynamically import the map with SSR disabled
const NearbyMap = dynamic(() => import('@/components/Map'), {
  ssr: false,
})



export default function NearbyPage() {
  const [users, setUsers] = useState<NearbyUser[]>([])
  const [center, setCenter] = useState<[number, number] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Get user's current location
  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude
          const lng = pos.coords.longitude
          setCenter([lat, lng])
        },
        () => {
          setError('Could not get your location, using fallback.')
          setCenter([38.7223, -9.1393]) // Lisbon fallback
        }
      )
    } else {
      setError('Geolocation not supported.')
      setCenter([38.7223, -9.1393])
    }
  }, [])

  // Fetch nearby users
  useEffect(() => {
    if (!center) return

    const fetchNearby = async () => {
      const [lat, lng] = center

      const { data, error } = await supabase.rpc('get_nearby_users', {
        lat,
        lng,
        radius: 5000,
      })

      if (error) {
        setError('Failed to fetch nearby users.')
      } else {
        console.log(data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formatted = data.map((user: any) => ({
          id: user.id,
          username: user.username,
          bio: user.bio,
          distance_meters: user.distance_meters,
          lat: user.lat,
          lng: user.lng,
          profile_pic: user.profile_pic || '/woman-placeholder.jpg',
          score: user.score ?? '',
        }))
        setUsers(formatted)
      }

      setLoading(false)
    }

    fetchNearby()
  }, [center])

  // Loading states
  if (!center) return <p className="p-4">📍 Getting your location…</p>
  if (loading) return <p className="p-4">🔄 Loading nearby users…</p>
  if (error) return <p className="p-4 text-red-500">⚠️ {error}</p>

  return (
    <div className="relative w-full h-screen bg-white">
          <NearbyMap center={center} users={users} />      
    </div>
  )
}
