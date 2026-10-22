// Shinto shrines and Buddhist temples near the Tokyo walks.
// Days are set only when the grounds are on that day's route.
// Pins are approximate.

const shrine = (spot) => ({
  ...spot,
  kind: "shrine",
  note: [spot.address, spot.access, "Shinto shrine — bow at the torii, 2 bows, 2 claps, 1 bow.", spot.note]
    .filter(Boolean)
    .join(" · "),
});

const temple = (spot) => ({
  ...spot,
  kind: "temple",
  note: [spot.address, spot.access, "Buddhist temple — bow at the gate, hands together, no clapping.", spot.note]
    .filter(Boolean)
    .join(" · "),
});

export const shrineSpots = [
  {
    id: "togo-shrine",
    name: "Togo Shrine",
    area: "Harajuku",
    address: "1-5-3 Jingumae, Shibuya-ku",
    access: "At the top of Takeshita Street, toward the station",
    note: "Small shrine right above the Harajuku crowds. Saturday walk passes the gate.",
    days: [2],
    lat: 35.6717,
    lng: 139.7076,
  },
  {
    id: "konno-hachimangu",
    name: "Konno Hachimangu",
    area: "Shibuya",
    address: "3-5-12 Shibuya, Shibuya-ku",
    access: "About 5 minutes from Shibuya Station, up the slope behind the scramble",
    note: "Shibuya's old local shrine. Easy to miss between the towers.",
    days: [2],
    lat: 35.6558,
    lng: 139.7019,
  },
  {
    id: "kanda-myojin",
    name: "Kanda Myojin",
    area: "Akihabara",
    address: "2-16-2 Soto-Kanda, Chiyoda-ku",
    access: "About 5 minutes north of Akihabara Station",
    note: "The big shrine beside the electronics district. Edo-period protector of the neighborhood.",
    days: [4],
    lat: 35.7021,
    lng: 139.7678,
  },
  {
    id: "namiyoke-inari",
    name: "Namiyoke Inari Shrine",
    area: "Tsukiji",
    address: "6-20-37 Tsukiji, Chuo-ku",
    access: "Inside Tsukiji Outer Market",
    note: "The market's own shrine, between the food stalls. Lion heads guard the gate.",
    days: [5],
    lat: 35.6654,
    lng: 139.7706,
  },
  {
    id: "asakusa-shrine",
    name: "Asakusa Shrine",
    area: "Asakusa",
    address: "2-3-1 Asakusa, Taito-ku",
    access: "On the Senso-ji grounds, just east of the main hall",
    note: "Shinto shrine sharing the temple grounds. This is the one where you clap.",
    days: [7],
    lat: 35.7151,
    lng: 139.7974,
  },
  {
    id: "ueno-toshogu",
    name: "Ueno Toshogu",
    area: "Ueno Park",
    address: "9-88 Ueno Park, Taito-ku",
    access: "Inside Ueno Park, near the zoo path",
    note: "Gold-and-black shrine in the park. The peony garden is beside it.",
    days: [7],
    lat: 35.7156,
    lng: 139.7706,
  },
  {
    id: "imado-shrine",
    name: "Imado Shrine",
    area: "Asakusa",
    address: "1-5-22 Imado, Taito-ku",
    access: "About 12 minutes northeast of Senso-ji",
    note: "Lucky-cat shrine. A short walk if you are already at the temple.",
    days: [7],
    lat: 35.7202,
    lng: 139.8022,
  },
];

export const templeSpots = [
  {
    id: "tsukiji-honganji",
    name: "Tsukiji Hongan-ji",
    area: "Tsukiji",
    address: "3-15-1 Tsukiji, Chuo-ku",
    access: "Across the street from Tsukiji Outer Market, about 2 minutes from Tsukiji Station",
    note: "Large temple with an Indian-style stone front. Right beside the market breakfast.",
    days: [5],
    lat: 35.6667,
    lng: 139.7722,
  },
  {
    id: "zojoji",
    name: "Zojo-ji",
    area: "Tokyo Tower",
    address: "4-7-35 Shibakoen, Minato-ku",
    access: "At the foot of Tokyo Tower",
    note: "The temple you walk through to see the tower. Rows of Jizo statues by the gate.",
    days: [5],
    lat: 35.6575,
    lng: 139.7482,
  },
  {
    id: "tennoji-yanaka",
    name: "Tenno-ji",
    area: "Yanaka",
    address: "7-14-8 Yanaka, Taito-ku",
    access: "Beside Yanaka Cemetery, a few minutes from Yanaka Ginza",
    note: "Temple and cemetery on the morning Yanaka walk.",
    days: [7],
    lat: 35.7266,
    lng: 139.7707,
  },
  {
    id: "shinobazu-bentendo",
    name: "Shinobazu Benten-do",
    area: "Ueno Park",
    address: "2-1 Ueno Park, Taito-ku",
    access: "On the island in Shinobazu Pond, Ueno Park",
    note: "Temple hall in the middle of the pond. Part of the Ueno Park walk.",
    days: [7],
    lat: 35.7118,
    lng: 139.7713,
  },
];

export const shrineMapPlaces = shrineSpots.map(shrine);
export const templeMapPlaces = templeSpots.map(temple);
