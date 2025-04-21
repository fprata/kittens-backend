export type NearbyUser = {
    id: string
    username: string
    bio: string
    distance_meters: number
    lat: number
    lng: number,
    profile_pic: string,
    score: number
  }

export type ProfilePic = {
    id: string
    profile_id: string
    url: string
    
  }