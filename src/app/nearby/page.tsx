'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import Link from 'next/link'
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
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map')

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

      {/* View modes */}
      {viewMode === 'map' ? (
        <NearbyMap center={center} users={users} />
      ) : (
        <ul className="h-full overflow-y-auto p-4 space-y-3 bg-white">
          {users.map((user) => (
            <Link key={user.id} href={`/user/${user.id}`}>
              <li className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md border border-gray-200 hover:bg-gray-50 transition cursor-pointer">
                {/* Left: Avatar + Info */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={user.profile_pic || '/woman-placeholder.jpg'}
                    width={56}
                    height={56}
                    alt={user.username}
                    className="rounded-full object-cover border border-gray-300"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-900">{user.username}</h2>
                    <p className="text-sm text-gray-600 line-clamp-2">{user.bio}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {Math.round(user.distance_meters)} meters away
                    </p>
                  </div>
                </div>

                {/* Right: Score badge */}
                {user.score !== null && (
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
                    {user.score}
                  </div>
                )}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  )
}
