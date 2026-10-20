// Jazz / music cafes & listening bars — sit with coffee, dessert, or a cocktail and a soundtrack.
export const jazzCafeSpots = [
  {
    id: "biblio-classic",
    name: "Biblio.Classic",
    area: "Zoshigaya",
    address: "3-7-2 Zoshigaya, Toshima-ku, Tokyo, Sunrise Bldg 3F (ビブリオ.クラシック)",
    access: "About 2 minutes from Zoshigaya Station (Fukutoshin Line), Exit 2 · 3 minutes from Kishibojin-mae tram stop",
    hours: "Mon/Thu–Sun 13:00–21:00 (LO drinks 20:00) · Closed Tue & Wed (open if holiday)",
    note: "Dessert and coffee — classical vinyl listening cafe with hand-drip coffee, tea, and cakes.",
    tags: ["coffee", "dessert", "classic vinyl"],
    days: [],
    lat: 35.7203,
    lng: 139.7148,
  },
  {
    id: "pass-shibuya",
    name: "PASS",
    area: "Shibuya",
    address: "F93 Shibuya II 3F, 3-15-2 Shibuya, Shibuya-ku, Tokyo",
    access: "About 3 minutes from Shibuya Station (New South / Namikibashi area) · 050-1794-7133",
    hours: "Tue–Sun 18:00–24:00 · Closed Mon",
    note: "Minimalist hi-fi listening bar — turntable in a raw stone counter, vintage 1960s JBL, warm wood. Cover ¥1,000 · cocktails ¥1,100–1,980. Guests rotate the “sweet spot” seat after each song. Photos OK, no flash (ask first for video).",
    tags: ["hi-fi", "listening bar", "jazz"],
    days: [2],
    lat: 35.65591,
    lng: 139.70551,
  },
];

export const jazzCafeMapPlaces = jazzCafeSpots.map((spot) => ({
  id: spot.id,
  name: spot.name,
  area: spot.area,
  days: spot.days ?? [],
  jazzCafe: true,
  kind: "food",
  lat: spot.lat,
  lng: spot.lng,
  note: [spot.address, spot.access, spot.hours, spot.note].filter(Boolean).join(" · "),
}));
