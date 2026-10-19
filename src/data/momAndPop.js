// Homie / nice-feel restaurants — small spots with a warm, mom-and-pop vibe.
export const momAndPopSpots = [
  {
    id: "bistro-de-lyon",
    name: "Bistro de Lyon",
    area: "Kiba",
    address: "2-18-7 Kiba, Koto-ku, Tokyo, Hara Bldg 1F (ビストロ・ド・リヨン)",
    access: "1 minute walk from Tokyo Metro Tozai Line Kiba Station, Exit 3",
    hours: "Lunch 12:00–15:00 (LO 13:30) · Dinner 18:00–22:00 (LO 19:30) · Closed Mon & Tue",
    note: "French-style mom-and-pop shop — classic French, small and family-run. Reserve by the day before.",
    tags: ["french", "bistro"],
    lat: 35.67,
    lng: 139.8057,
  },
];

export const momAndPopMapPlaces = momAndPopSpots.map((spot) => ({
  id: spot.id,
  name: spot.name,
  area: spot.area,
  days: [],
  momAndPop: true,
  kind: "food",
  lat: spot.lat,
  lng: spot.lng,
  note: [spot.address, spot.access, spot.hours, spot.note].filter(Boolean).join(" · "),
}));
