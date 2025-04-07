import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import L from 'leaflet';

import type { NearbyUser } from '@/types/NearbyUser'

type Props = {
  center: LatLngExpression
  users: NearbyUser[]
}

const blueCircleIcon = new L.DivIcon({
  className: 'custom-blue-circle-icon',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12]
});

const createKittenIcon = (imageUrl: string, score: string | null, userId: string) =>
  new L.DivIcon({
    className: '',
    html: `
      <a href="/user/${userId}" style="text-decoration: none;">
        <div style="
          position: relative;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          overflow: visible;
        ">
          <div style="
            width: 52px;
            height: 52px;
            margin: 9px;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          ">
            <img src="${imageUrl}" style="
              width: 100%;
              height: 100%;
              object-fit: cover;
              display: block;
            "/>
          </div>
          ${
            score != null && score !== '' 
              ? `<div style="
                  position: absolute;
                  top: -5px;
                  right: -5px;
                  background: red;
                  color: white;
                  width: 28px;
                  height: 28px;
                  font-size: 11px;
                  font-weight: bold;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
                ">
                  ${score}
                </div>`
              : ''
          }
        </div>
      </a>
    `,
    iconSize: [70, 70],
    iconAnchor: [35, 35],
    popupAnchor: [0, -35],
  })


export default function NearbyMap({ center, users }: Props) {
  console.log(users)
  return (
    <MapContainer center={center} zoom={13} className="h-full w-full">
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Your location marker */}
      <Marker position={center} icon={blueCircleIcon}>
      </Marker>

      {/* Nearby users */}
      {users
        .filter((u) => u.lat !== undefined && u.lng !== undefined)
        .map((user) => (
          <Marker key={user.id} icon={createKittenIcon(user.profile_pic, user.score?.toString(), user.id )} position={[user.lat, user.lng]}>
          </Marker>
        ))}
    </MapContainer>
  )
}
