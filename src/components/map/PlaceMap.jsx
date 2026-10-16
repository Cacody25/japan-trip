import React, { useEffect, useRef, useState } from "react";

import { PLACE_KINDS } from "@/data/mapPlaces";

const TOKYO = { lat: 35.6812, lng: 139.7671 };

// Dark, low-saturation map style that matches the app's theme.
const MAP_STYLE = [
  { elementType: "geometry", stylers: [{ color: "#1a1d24" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1a1d24" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8b93a7" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#c4cbd9" }] },
  { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#8b93a7" }] },
  { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#222831" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#2a2f3a" }] },
  { featureType: "road", elementType: "labels", stylers: [{ visibility: "off" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#353c4a" }] },
  { featureType: "road.highway", elementType: "labels", stylers: [{ visibility: "off" }] },
  { featureType: "road.highway", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2a2f3a" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0e1419" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#5a6678" }] },
];

let scriptPromise = null;
function loadGoogleMaps(apiKey) {
  if (window.google?.maps) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&v=weekly`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => {
      scriptPromise = null;
      reject(new Error("Failed to load Google Maps script."));
    };
    document.head.appendChild(script);
  });
  return scriptPromise;
}

function circleIcon(color, radius) {
  const size = radius * 2 + 4;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${radius}" fill="${color}" fill-opacity="0.55" stroke="${color}" stroke-width="2"/></svg>`;
  return {
    url: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`,
    scaledSize: new window.google.maps.Size(size, size),
    anchor: new window.google.maps.Point(size / 2, size / 2),
  };
}

function buildContent(place) {
  const days = Array.isArray(place.days) ? place.days.join(", ") : place.days;
  const note = place.note
    ? `<p style="margin:6px 0 0;font-size:11.5px;line-height:1.4;color:#475569;">${place.note}</p>`
    : "";
  const items = place.items?.length
    ? `<ul style="margin:6px 0 0;padding-left:16px;list-style:disc;font-size:11.5px;line-height:1.4;color:#475569;">${place.items.map((i) => `<li>${i}</li>`).join("")}</ul>`
    : "";
  return `<div style="min-width:150px;max-width:220px;font-family:inherit;">
    <p style="margin:0;font-size:13px;font-weight:600;line-height:1.3;color:#0f172a;">${place.name}</p>
    <p style="margin:4px 0 0;font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:#64748b;">${place.area} · Day ${days}</p>
    ${note}${items}
  </div>`;
}

export default function PlaceMap({ places }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const infoRef = useRef(null);
  const markersRef = useRef([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mapReady, setMapReady] = useState(false);

  // Initialize the map once the API key is fetched and the script is loaded.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
        if (!apiKey) throw new Error("Google Maps key is not configured yet. The rest of the trip still works.");
        await loadGoogleMaps(apiKey);
        if (cancelled || !containerRef.current) return;

        const g = window.google.maps;
        mapRef.current = new g.Map(containerRef.current, {
          center: TOKYO,
          zoom: 11,
          styles: MAP_STYLE,
          scrollwheel: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        });
        infoRef.current = new g.InfoWindow();
        setLoading(false);
        setMapReady(true);
      } catch (e) {
        if (!cancelled) {
          setError(e.message || "Failed to load map.");
          setLoading(false);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // (Re)draw markers and fit bounds whenever the map is ready or places change.
  useEffect(() => {
    const map = mapRef.current;
    const g = window.google?.maps;
    if (!mapReady || !map || !g) return;

    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];
    const bounds = new g.LatLngBounds();

    places.forEach((place) => {
      const kind = PLACE_KINDS[place.kind] || { color: "#888888" };
      const stay = place.kind === "stay";
      const marker = new g.Marker({
        position: { lat: place.lat, lng: place.lng },
        map,
        icon: circleIcon(kind.color, stay ? 11 : 8),
        title: place.name,
      });
      marker.addListener("click", () => {
        infoRef.current.setContent(buildContent(place));
        infoRef.current.open(map, marker);
      });
      markersRef.current.push(marker);
      bounds.extend({ lat: place.lat, lng: place.lng });
    });

    if (places.length === 1) {
      map.setCenter({ lat: places[0].lat, lng: places[0].lng });
      map.setZoom(13);
    } else if (places.length > 1) {
      map.fitBounds(bounds, 40);
    }
  }, [places, mapReady]);

  return (
    <div className="relative z-0 overflow-hidden rounded-3xl border border-white/[0.07] bg-card/60">
      <div ref={containerRef} className="h-[56vh] min-h-[360px] w-full md:h-[64vh]" />
      {(loading || error) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-card/80 text-center backdrop-blur-sm">
          {loading ? (
            <div className="w-7 h-7 border-4 border-white/15 border-t-vermilion rounded-full animate-spin" />
          ) : (
            <p className="max-w-sm px-6 text-[13px] leading-relaxed text-muted-foreground">{error}</p>
          )}
        </div>
      )}
    </div>
  );
}