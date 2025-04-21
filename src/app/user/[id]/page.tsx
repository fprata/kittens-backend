'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import Profile from '@/components/app/Profile'
import { ProfilePic } from '@/types/NearbyUser'

export default function UserDetailPage() {
  const { id } = useParams()
  const router = useRouter()

  const [user, setUser] = useState(null)
  const [profilePics, setProfilePics] = useState<ProfilePic[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const { data: userData, error: userError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', id)
        .single()

      if (userData && !userError) {
        setUser(userData)
      }

      const { data: picsData, error: picsError } = await supabase
        .from('profile_pics')
        .select('*')
        .eq('profile_id', id)

      if (picsData && !picsError) {
        setProfilePics(picsData)
      }

      setLoading(false)
    }

    if (id) fetchData()
  }, [id])

  if (loading) return <p className="p-4">🔄 Loading user...</p>
  if (!user) return <p className="p-4 text-red-500">⚠️ User not found</p>

  return (
    <div>
      <Button variant="outline" onClick={() => router.back()} className="mb-2">
        ← Back
      </Button>
      <Profile user={user} profilePics={profilePics} />
    </div>
  )
}
