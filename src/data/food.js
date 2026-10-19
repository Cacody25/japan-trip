// Optional food stops — not locked to a day. Use when you're nearby or hungry.
export const foodSpots = [
  {
    id: "halal-wagyu-ramen-shinjuku",
    name: "Halal Wagyu Ramen Shinjuku",
    area: "Shinjuku",
    address: "3-11-6 Shinjuku, Shinjuku-ku, Tokyo, B1F (Eclair Shinjuku B103)",
    access: "About 5 minutes walk from Shinjuku Station",
    hours: "12:00–21:00",
    note: "100% Halal wagyu ramen. Easy to miss — down the stairs, past the sign.",
    tags: ["halal", "ramen", "wagyu"],
    lat: 35.6919,
    lng: 139.7065,
  },
  {
    id: "chuuka-soba-kirin",
    name: "Chuuka Soba Kirin",
    area: "Ikebukuro",
    address: "2-4-3 Ikebukuro, Toshima-ku, Tokyo (Edo-han Dai-3 Palace Bldg 1F)",
    access: "About 3–5 minutes walk from Ikebukuro Station (Exit C6)",
    hours: "Weekdays 11:00–15:00 & 17:30–22:00 · Sat/Sun/holidays 11:00–22:00",
    note: "Ramen counter — bring cash (no cards, e-money, or QR). Ticket machine before you sit.",
    tags: ["ramen", "cash only"],
    lat: 35.7324,
    lng: 139.7077,
  },
];

export const foodMapPlaces = foodSpots.map((spot) => ({
  id: spot.id,
  name: spot.name,
  area: spot.area,
  days: [],
  optionalFood: true,
  kind: "food",
  lat: spot.lat,
  lng: spot.lng,
  note: [spot.address, spot.access, spot.hours, spot.note].filter(Boolean).join(" · "),
}));
