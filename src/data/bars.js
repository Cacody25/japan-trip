// Cocktail / hotel bars worth a stop — not locked to a day.
export const barSpots = [
  {
    id: "janu-bar",
    name: "Janu Bar",
    area: "Azabudai Hills",
    address: "Janu Tokyo, 5F — 1-2-2 Azabudai, Minato-ku, Tokyo 106-0041",
    access: "Inside Janu Tokyo at Azabudai Hills · near Kamiyacho / Roppongi",
    hours: "17:00–midnight (food LO 23:00 · drinks LO 23:30) · walk-ins welcome",
    note: "Stunning Tokyo Tower view in a top luxury hotel. Neighborhood-inspired cocktails for Ginza, Nezu, Kanda, Shinjuku, Azabudai, and more.",
    tags: ["cocktails", "tokyo tower view"],
    lat: 35.662,
    lng: 139.7404,
  },
];

export const barMapPlaces = barSpots.map((spot) => ({
  id: spot.id,
  name: spot.name,
  area: spot.area,
  days: [],
  barList: true,
  kind: "bar",
  lat: spot.lat,
  lng: spot.lng,
  note: [spot.address, spot.access, spot.hours, spot.note].filter(Boolean).join(" · "),
}));
