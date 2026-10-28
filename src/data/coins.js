// Coin-ring workshops in Taito — make a band from real currency, or buy one ready-made.
export const coinShops = [
  {
    id: "coin-luck-tokyo",
    name: "COIN LUCK Tokyo (Ueno)",
    area: "Ueno / Higashi-Ueno",
    address: "ROUTE89 BLDG. 3F, 4-13-9 Higashi-Ueno, Taito-ku, Tokyo",
    access: "JR Ueno Iriya Exit · about 5 minutes · 090-2510-9859",
    hours: "10:00–19:00 · Closed Tue & irregular holidays",
    note: "Popular workshop — hammer a vintage or modern coin into a ring. Wide domestic and international coin wall, plus ready-made rings and accessories. Book ahead on LINE if you want a seat.",
    tags: ["workshop", "rings", "souvenir"],
    days: [7],
    lat: 35.714,
    lng: 139.7806,
  },
  {
    id: "ragtime-coin-factory",
    name: "RAGTIME COIN FACTORY",
    area: "Asakusa / Kotobuki",
    address: "1F, 1-16-1 Kotobuki, Taito-ku, Tokyo",
    access: "Tokyo Metro Tawaramachi Exit 2 · about 5 minutes · or Kuramae A5 · 03-6231-7723",
    hours: "10:00–19:00 (last intake) · Irregular holidays",
    note: "Private booth silversmithing — keep the coin’s text and motifs on the band. Ring-only from ¥6,500 or ring + charm from ¥7,500 · 60–90 min. Reservation preferred; same-day call ahead.",
    tags: ["workshop", "rings", "silversmith"],
    days: [7],
    lat: 35.7075,
    lng: 139.7901,
  },
];

export const coinMapPlaces = coinShops.map((shop) => ({
  id: shop.id,
  name: shop.name,
  area: shop.area,
  days: shop.days ?? [],
  kind: "coin",
  lat: shop.lat,
  lng: shop.lng,
  note: [shop.address, shop.access, shop.hours, shop.note].filter(Boolean).join(" · "),
}));
