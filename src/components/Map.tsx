import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

type NearbyUser = {
  id: string
  username: string
  bio: string
  distance_meters: number
  lat: number
  lng: number
}

type Props = {
  center: LatLngExpression
  users: NearbyUser[]
}

export default function NearbyMap({ center, users }: Props) {
  //console.log(users)
  return (
    <MapContainer center={center} zoom={13} className="h-full w-full">
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Your location marker */}
      <Marker position={center}>
        <Popup>You are here</Popup>
      </Marker>

      {/* Nearby users */}
      {users
        .filter((u) => u.lat !== undefined && u.lng !== undefined)
        .map((user) => (
          <Marker key={user.id} position={[user.lat, user.lng]}>
            <Popup>
              <strong>{user.username}</strong>
              <p>{user.bio}</p>
              <p>{Math.round(user.distance_meters)}m away</p>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  )
}
