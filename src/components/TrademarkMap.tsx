'use client'

import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// ---------------------------------------------------------------------------
// Country data
// NOTE: Add Supabase certificate image URLs to `imgUrl` when ready
// ---------------------------------------------------------------------------
const countries = [
  { id: 'us', name: 'United States',       coords: [37.09,  -95.71] as [number, number], imgUrl: '' },
  { id: 'ru', name: 'Russia',              coords: [61.52,  105.32] as [number, number], imgUrl: '' },
  { id: 'ae', name: 'UAE',                 coords: [23.42,   53.85] as [number, number], imgUrl: '' },
  { id: 'ph', name: 'Philippines',         coords: [12.88,  121.77] as [number, number], imgUrl: '' },
  { id: 'cl', name: 'Chile',               coords: [-35.68, -71.54] as [number, number], imgUrl: '' },
  { id: 'ec', name: 'Ecuador',             coords: [ -1.83, -78.18] as [number, number], imgUrl: '' },
  { id: 'dz', name: 'Algeria',             coords: [28.03,    1.66] as [number, number], imgUrl: '' },
  { id: 'ye', name: 'Yemen',               coords: [15.55,   48.52] as [number, number], imgUrl: '' },
  { id: 'jo', name: 'Jordan',              coords: [30.59,   36.24] as [number, number], imgUrl: '' },
  { id: 'do', name: 'Dominican Rep.',      coords: [18.74,  -70.16] as [number, number], imgUrl: '' },
  { id: 'kh', name: 'Cambodia',            coords: [12.57,  104.99] as [number, number], imgUrl: '' },
  { id: 'lb', name: 'Lebanon',             coords: [33.85,   35.86] as [number, number], imgUrl: '' },
]

// ---------------------------------------------------------------------------
// Custom marker icon
// ---------------------------------------------------------------------------
function createMarkerIcon(selected: boolean) {
  return L.divIcon({
    className: '',
    iconSize: [22, 28],
    iconAnchor: [11, 28],
    popupAnchor: [0, -28],
    html: `
      <div style="width:22px;height:28px;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.25))">
        <svg viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 0C4.925 0 0 4.925 0 11c0 7.667 11 17 11 17s11-9.333 11-17C22 4.925 17.075 0 11 0z"
            fill="${selected ? '#016cab' : '#3489bc'}"/>
          <circle cx="11" cy="11" r="4.5" fill="white"/>
        </svg>
      </div>`,
  })
}

// ---------------------------------------------------------------------------
// Map flyTo controller
// ---------------------------------------------------------------------------
function MapController({ selected }: { selected: string | null }) {
  const map = useMap()
  useEffect(() => {
    const country = countries.find((c) => c.id === selected)
    if (country) {
      map.flyTo(country.coords, 5, { duration: 1.2 })
    } else {
      map.flyTo([20, 15], 2, { duration: 1.2 })
    }
  }, [selected, map])
  return null
}

// ---------------------------------------------------------------------------
// Left panel — certificate image only
// ---------------------------------------------------------------------------
function CertPanel({ country }: { country: typeof countries[number] | null }) {
  if (!country) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50 rounded-xl border border-dashed border-gray-200 text-center px-6 gap-3">
        <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <p className="text-gray-400 text-xs">Select a pin to view certificate</p>
      </div>
    )
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      {country.imgUrl ? (
        <img
          src={country.imgUrl}
          alt={`${country.name} trademark certificate`}
          className="w-full h-full object-contain rounded-lg shadow-sm"
        />
      ) : (
        <div className="w-full h-full bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col items-center justify-center gap-2">
          <div className="space-y-1.5 w-20">
            <div className="h-1 bg-gray-200 rounded" />
            <div className="h-1 bg-gray-200 rounded w-4/5" />
            <div className="h-1 bg-gray-200 rounded" />
            <div className="h-1 bg-gray-200 rounded w-3/5" />
          </div>
          <div className="w-12 h-8 bg-blue-100 rounded mt-2" />
          <p className="text-gray-300 text-[10px] mt-1 tracking-wider uppercase">Certificate</p>
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export default function TrademarkMap() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selectedCountry = countries.find((c) => c.id === selectedId) ?? null

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    })
  }, [])

  const toggle = (id: string) => setSelectedId(selectedId === id ? null : id)

  return (
    <div className="flex flex-col lg:flex-row gap-5">

      {/* ── Left: Certificate image panel ── */}
      <div className="w-full lg:w-[330px] lg:shrink-0" style={{ height: undefined }}>
        <div className="aspect-[3/4] lg:h-[440px] lg:aspect-auto">
          <CertPanel country={selectedCountry} />
        </div>
      </div>

      {/* ── Right: country tabs + map ── */}
      <div className="flex-1 min-w-0 flex flex-col gap-2.5" style={{ minHeight: 360 }}>

        {/* Country text buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {countries.map((c) => (
            <button
              key={c.id}
              onClick={() => toggle(c.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                selectedId === c.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Map */}
        <div className="flex-1 rounded-xl overflow-hidden border border-gray-100 shadow-sm" style={{ minHeight: 300 }}>
          <MapContainer
            center={[20, 15]}
            zoom={2}
            scrollWheelZoom={false}
            style={{ width: '100%', height: '100%' }}
            zoomControl={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />
            <MapController selected={selectedId} />
            {countries.map((c) => (
              <Marker
                key={c.id}
                position={c.coords}
                icon={createMarkerIcon(selectedId === c.id)}
                eventHandlers={{ click: () => toggle(c.id) }}
              />
            ))}
          </MapContainer>
        </div>
      </div>

    </div>
  )
}
