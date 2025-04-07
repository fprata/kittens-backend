'use client'

import { useEffect, useState, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function UserDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('')
  const [score, setScore] = useState<number | ''>('')
  const [profilePic, setProfilePic] = useState('')

  const [originalState, setOriginalState] = useState({ username: '', bio: '', profilePic: '' })

  function handleScore (score: string) {
    const scoreInt = Number(score) / 10.0;
    return scoreInt;    
  }
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', id)
        .single()

      if (!error && data) {
        setUser(data)
        setUsername(data.username || '')
        setBio(data.bio || '')
        setScore(handleScore(data.score) || '')
        setProfilePic(data.profile_pic || '')
        setOriginalState({
          username: data.username || '',
          bio: data.bio || '',
          profilePic: data.profile_pic || '',
        })
      }

      setLoading(false)
    }

    if (id) fetchUser()
  }, [id])

  const saveChanges = async () => {
    setSaving(true)

    const { error } = await supabase
      .from('profiles')
      .update({
        username,
        bio,
        profile_pic: profilePic,
      })
      .eq('id', id)

    if (!error) {
      alert('✅ Profile updated!')
      setEditMode(false)
      setOriginalState({ username, bio, profilePic })
    } else {
      alert('❌ Failed to update.')
      console.error(error)
    }

    setSaving(false)
  }

  const cancelEdit = () => {
    setUsername(originalState.username)
    setBio(originalState.bio)
    setProfilePic(originalState.profilePic)
    setEditMode(false)
  }

  const handleImageUpload = async (file: File) => {
    if (!id) return

    const fileExt = file.name.split('.').pop()
    const filePath = `${id}.${fileExt}`

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, file, { upsert: true })

    if (uploadError) {
      alert('❌ Failed to upload image.')
      return
    }

    const { data: publicUrl } = supabase.storage.from('avatars').getPublicUrl(filePath)
    setProfilePic(publicUrl.publicUrl)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (acceptedFiles[0]) handleImageUpload(acceptedFiles[0])
    },
    accept: { 'image/*': [] },
    multiple: false,
    disabled: !editMode,
  })

  const formattedScore = typeof score === 'number' ? score.toFixed(1) : score

  if (loading) return <p className="p-4">🔄 Loading user...</p>
  if (!user) return <p className="p-4 text-red-500">⚠️ User not found</p>

  return (
    <div className="p-6 max-w-lg mx-auto space-y-4">
      <Button variant="outline" onClick={() => router.back()} className="mb-2">
        ← Back
      </Button>
      <Card>
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Profile</h1>
            {!editMode && (
              <Button variant="outline" size="sm" onClick={() => setEditMode(true)}>
                Edit
              </Button>
            )}
          </div>

          <Input
            id="username"
            className={`text-3xl font-bold text-center bg-transparent ${editMode ? 'border border-gray-300' : 'border-none'}`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={!editMode}
          />

          <div {...getRootProps()} className={`relative w-[120px] h-[120px] cursor-pointer transition-shadow hover:shadow-md ${isDragActive ? 'ring-2 ring-blue-400' : ''}`}>
            <input {...getInputProps()} />
            <div className="relative w-[120px] h-[120px]">
              <Image
                src={profilePic || '/woman-placeholder.jpg'}
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
              <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 w-9 h-9 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center shadow-md z-10">
                {formattedScore}
              </div>
            </div>
          </div>

          <div className="w-full space-y-2">
            <Input
              id="pic"
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
              disabled={!editMode}
              placeholder="Profile Picture URL"
              className={`bg-transparent ${editMode ? 'border border-gray-300' : 'border-none'}`}
            />
          </div>

          <div className="w-full space-y-2">
            <Textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={3}
              disabled={!editMode}
              placeholder="Your bio here..."
              className={`bg-transparent ${editMode ? 'border border-gray-300' : 'border-none'}`}
            />
          </div>

          {editMode && (
            <div className="w-full flex flex-col gap-2">
              <Button onClick={saveChanges} disabled={saving} className="w-full">
                {saving ? 'Saving...' : 'Save Changes'}
              </Button>
              <Button variant="outline" onClick={cancelEdit} className="w-full">
                Cancel
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}