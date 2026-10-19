// Jazz / music cafes — sit with coffee, dessert, and a soundtrack.
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
    lat: 35.7203,
    lng: 139.7148,
  },
];

export const jazzCafeMapPlaces = jazzCafeSpots.map((spot) => ({
  id: spot.id,
  name: spot.name,
  area: spot.area,
  days: [],
  jazzCafe: true,
  kind: "food",
  lat: spot.lat,
  lng: spot.lng,
  note: [spot.address, spot.access, spot.hours, spot.note].filter(Boolean).join(" · "),
}));
