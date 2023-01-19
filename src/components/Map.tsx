import React from 'react';
import Props from "@/types/Props";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import styles from '@/styles/Map.module.scss'

const Map: React.FC<Props> = (props) => {
  return (
    <div className={`${props.className} ${styles.map}`}>
      <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
      </MapContainer>
    </div>
  )
}

export default Map;