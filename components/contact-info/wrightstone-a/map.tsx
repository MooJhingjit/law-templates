'use client'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { useMemo } from 'react'

export const Map = () => {
  const apiKey = 'AIzaSyBMYlNXpTBvVh4lyreqVWZZuEmF318R_JA'

  const center = useMemo(
    () => ({
      lat: 43.5936,
      lng: -79.6145,
    }),
    []
  )

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '400px',
          borderRadius: '20px',
        }}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}
