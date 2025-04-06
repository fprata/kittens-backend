'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { supabase } from '@/lib/supabase'

// Dynamically import the map with SSR disabled
const NearbyMap = dynamic(() => import('@/components/Map'), {
  ssr: false,
})

type NearbyUser = {
  id: string
  username: string
  bio: string
  distance_meters: number
  lat: number
  lng: number
}

export default function NearbyPage() {
  const [users, setUsers] = useState<NearbyUser[]>([])
  const [center, setCenter] = useState<[number, number] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map')

  // Get user's current location
  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude
          const lng = pos.coords.longitude
          if (lat && lng) {
            setCenter([lat, lng])
          } else {
            setError('Invalid coordinates received.')
            setCenter([38.7223, -9.1393]) // fallback: Lisbon
          }
        },
        () => {
          setError('Could not get your location, using fallback.')
          setCenter([38.7223, -9.1393])
        }
      )
    } else {
      setError('Geolocation not supported.')
      setCenter([38.7223, -9.1393])
    }
  }, [])

  // Fetch nearby users
  useEffect(() => {
    if (!center || center[0] === undefined || center[1] === undefined) return

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
        //console.log(data);
        const formatted = data.map((user: any) => ({
          ...user
        }))
        setUsers(formatted)
      }

      setLoading(false)
    }

    fetchNearby()
  }, [center])

  // Guard rendering
  if (!center || center[0] === undefined || center[1] === undefined) {
    return <p className="p-4">📍 Getting your location…</p>
  }

  if (loading) {
    return <p className="p-4">🔄 Loading nearby users…</p>
  }

  if (error) {
    return <p className="p-4 text-red-500">⚠️ {error}</p>
  }

  return (
    <div className="relative w-full h-screen">
    {/* Floating toggle label (top right) */}
    <div className="absolute top-4 right-4 z-[9999] px-3 py-1 bg-white border shadow rounded-full text-sm text-gray-700 font-medium">
        {viewMode === 'map' ? 'Map View' : 'List View'}
    </div>

    {/* Toggle button - top center */}
    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[9999]">
        <button
        onClick={() => setViewMode(viewMode === 'map' ? 'list' : 'map')}
        className="px-4 py-2 bg-white text-gray-800 border shadow-md rounded-full hover:bg-gray-100 transition"
        >
        {viewMode === 'map' ? 'Show List' : 'Show Map'}
        </button>
    </div>
      {/* View mode */}
      {viewMode === 'map' ? (
        <NearbyMap center={center} users={users} />
      ) : (
        <ul className="h-full overflow-y-auto p-4 space-y-3 bg-white">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-4 bg-gray-100 rounded-md shadow-sm border"
            >
              <h2 className="font-bold text-lg">{user.username}</h2>
              <p className="text-sm text-gray-600">{user.bio}</p>
              <p className="text-xs text-gray-500 mt-1">
                {Math.round(user.distance_meters)} meters away
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
