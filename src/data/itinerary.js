export const trip = {
  name: "Japan 2026",
  range: "Oct 30 — Nov 11",
  totalDays: 13,
};

export const days = [
  {
    n: 1,
    weekday: "Friday",
    dateLabel: "Oct 30",
    city: "Tokyo",
    title: "Arrival in Tokyo",
    blurb: "Land, settle in, and keep the first night slow.",
    accent: "#E4573D",
    stops: [
      { time: "5:00 PM", title: "Land in Tokyo", kind: "transit", detail: "Touch down and clear immigration." },
      {
        time: "If Narita",
        title: "Pokémon Store Narita Airport",
        kind: "shop",
        detail: "Terminal 1 South Wing 4F — official Pokémon Store if you land at Narita (9:00–20:00).",
      },
      {
        time: "Evening",
        title: "Hotel check-in",
        kind: "rest",
        detail: "Transfer to the hotel, check in, unpack, then explore the immediate neighborhood for dinner and rest.",
      },
    ],
  },
  {
    n: 2,
    weekday: "Saturday",
    dateLabel: "Oct 31",
    city: "Tokyo",
    title: "Shinjuku, Harajuku & Shibuya",
    blurb: "Gardens in the morning, neon by night.",
    accent: "#E2A03F",
    stops: [
      {
        time: "9:00 AM",
        title: "Shinjuku Gyoen National Garden",
        kind: "nature",
        detail: "Morning walk through the gardens — autumn foliage season.",
      },
      {
        time: "11:00 AM",
        title: "Meiji Shrine & Yoyogi Park",
        kind: "sight",
        detail: "Stroll the quiet shrine grounds, then walk south through Yoyogi Park toward Harajuku.",
      },
      {
        time: "12:00 PM",
        title: "Harajuku & Cat Street",
        kind: "shop",
        detail: "Takeshita Street and the boutique-lined Cat Street.",
        items: [
          "Street food — Le Shiner: rainbow cheese sandwich (Takeshita Street)",
          "Street food — Totti Candy Factory: rainbow cotton candy (Takeshita Street)",
          "Street food — Marion Crêpes (Takeshita Street)",
        ],
      },
      {
        time: "1:30 PM",
        title: "Omotesando walk",
        kind: "shop",
        detail: "Tree-lined boulevard from Harajuku toward Shibuya — architecture, boutiques, cafés. Mostly on foot (Yamanote / Fukutoshin if you hop).",
      },
      {
        time: "If you book",
        title: "Skin — Omotesando & Shibuya",
        kind: "note",
        detail:
          "Omotesando Skin Clinic (Kitajyu 4F, 5-9-13 Jingumae) is on this walk — Sat 11:00–19:00, closed Wed. Shibuya International Skin Clinic (Tokai 1F, Higashi 1-27-10, ~7 min toward Ebisu) has English staff, but Saturday is mornings only (10:00–13:00).",
      },
      {
        time: "3:00 PM",
        title: "Shibuya highlights",
        kind: "sight",
        items: [
          "Views & parks — Shibuya Sky, Miyashita Park",
          "Icons — Shibuya Scramble Crossing, Hachiko Statue",
          "Shopping & culture — Tower Records, d47 Museum, Shibuya 109",
          "Poke! — Pokémon Center SHIBUYA (Shibuya PARCO 6F)",
          "Watch spot — Shellman (Shibuya)",
        ],
      },
      {
        time: "Meal in the tower",
        title: "TsuruTonTan UDON — Scramble Square 13F",
        kind: "food",
        detail:
          "Udon with a Shibuya view — same building as Shibuya Sky. Daily 11:00–23:00 (LO 22:00). Grab a north-facing counter seat if you can.",
      },
      {
        time: "If nearby / hungry",
        title: "Hirokatsu — Dogenzaka (massive tendon)",
        kind: "food",
        detail:
          "Shoriki Bldg B1F, 1-5-4 Dogenzaka — giant shrimp + king crab tempura + Wagyu sukiyaki piled in one bowl (Wagyu Sukiyaki Chanko Tendon ¥4,980). Daily 12:00–23:00 · Sun until 22:30.",
      },
      {
        time: "6:00 PM",
        title: "PASS — hi-fi listening bar (Shibuya)",
        kind: "food",
        detail:
          "F93 Shibuya II 3F, 3-15-2 Shibuya — minimalist listening bar with vintage JBL and a rotating “sweet spot” seat. Cover ¥1,000 · cocktails ¥1,100–1,980 · Tue–Sun 18:00–24:00 (closed Mon). Photos OK, no flash.",
      },
      {
        time: "Later",
        title: "Shinjuku block (Yamanote)",
        kind: "food",
        detail:
          "Give Shinjuku its own evening — Tokyo Metropolitan Government Building (free observatory views), then Omoide Yokocho, Kabukicho, and Golden Gai. Yamanote Line is the easy hop from Shibuya.",
      },
    ],
  },
  {
    n: 3,
    weekday: "Sunday",
    dateLabel: "Nov 1",
    city: "Tokyo",
    title: "Flea Market & Tattoo Follow-up",
    blurb: "Market hunting, then tattoos and open exploration.",
    accent: "#C4708C",
    stops: [
      { time: "9:00 AM – 2:30 PM", title: "Tokyo Flea Market", kind: "shop", detail: "Explore the stalls at your own pace." },
      {
        time: "Afternoon",
        title: "Tattoo consultation follow-up",
        kind: "note",
        detail: "Follow up on the tattoo consultation or appointment, then keep the rest of the day open for city exploration.",
      },
      {
        time: "Before dinner",
        title: "Akasaka Station — Harry Potter Exit 3B",
        kind: "sight",
        detail:
          "Tokyo Metro Chiyoda Line. Exit 3B has a wizarding-themed red staircase, Hogwarts-style portraits, magical creature shadows, a large Time-Turner sculpture, and Harry Potter theme music.",
        items: [
          "TBS Akasaka ACT Theater — Harry Potter and the Cursed Child",
          "Official Harry Potter Café — just outside the station",
          "Harry Potter Mahou Dokoro — official merchandise shop",
        ],
      },
      {
        time: "Nearby",
        title: "Hie Shrine",
        kind: "sight",
        detail:
          "Akasaka — striking red torii staircase up the hill. Short walk from Tameike-Sanno / Kokkai-gijomae before dinner at Sakai.",
      },
      {
        time: "Dinner",
        title: "Sakai Dinner",
        kind: "food",
        detail:
          "Tokyu Capitol Tower 1F, 2-10-3 Nagatachō, Chiyoda City, Tokyo — connected to Kokkai-gijomae Station.",
      },
    ],
  },
  {
    n: 4,
    weekday: "Monday",
    dateLabel: "Nov 2",
    city: "Tokyo",
    title: "Imperial Palace, Ginza & Akihabara",
    blurb: "Old Tokyo, luxury retail, then deep otaku hunting.",
    accent: "#4FA3A5",
    stops: [
      {
        time: "10:00 AM – 12:00 PM",
        title: "Imperial Palace & East Gardens",
        kind: "sight",
        detail: "Guided tour or a stroll around the grounds — check ticket requirements in advance.",
      },
      {
        time: "After palace",
        title: "Tokyo Station Character Street (Marunouchi)",
        kind: "shop",
        detail:
          "1-9-1 Marunouchi — First Avenue via Yaesu gates · 10:00–20:30. Poke! — Pokémon Store (Character Street; Station Master Pikachu exclusives). Dragon Ball Store TOKYO — world’s first official DB store (First Avenue 1F; exclusives, statues, apparel). Star Wars pop-up here ended Jan 2026 (permanent store is Ikebukuro PARCO 6F).",
      },
      {
        time: "Lunch",
        title: "TaiKouRou TOKYO — jumbo gyoza (Yaesu)",
        kind: "food",
        detail:
          "TOFROM YAESU TOWER 1F, 1-6-1 Yaesu — ~3 min from Tokyo Station. Historic jumbo dumpling lunch set (6 pcs ¥1,250) since 1949; lines from open. Mon lunch 11:00–14:30 (LO 14:00) · closed Sun/holidays.",
      },
      {
        time: "12:00 – 3:00 PM",
        title: "Ginza",
        kind: "shop",
        items: [
          "Lunch alt — Rabu Ginza Grasse (羅豚): Kurobuta main + Japanese buffet + drink bar, Ginza Grasse 10F · Exit C8 (viral ~¥1k; sets now ~¥1,900–2,600)",
          "Itoya — multi-story stationery paradise",
          "Ginza Six — luxury complex with a rooftop garden view",
          "Flagship stores — Muji & Uniqlo",
          "Skin — BIANCA CLINIC Ginza (ONE GINZA 12F, 1-8-19): lasers & skin rejuvenation · 10:00–19:00 · Kyobashi-side high-floor elevator",
        ],
      },
      {
        time: "3:00 – 6:00 PM",
        title: "Akihabara: otaku, TCG & watch hunt",
        kind: "tcg",
        items: [
          "Retro & pop culture — Mandarake Complex, Super Potato, Radio Kaikan, Radio Center (1-14-2 Sotokanda — electronics under the tracks), Don Quijote, Yodobashi Camera",
          "TCG shops — Hareruya 2, Magi Akihabara, Fukufuku, Taro, Card Secret, Valuable Card Tokyo, Trading Card Shop YK",
          "Watch shops — VIN Time (Ginza), Mizutani Camera (Akihabara)",
          "Culture & solo spot — Hanabusa Inari Shrine, Dashiya (solo dashi / ochazuke)",
        ],
      },
      {
        time: "Poke!",
        title: "Pokémon Center TOKYO DX & Café",
        kind: "shop",
        detail:
          "Nihombashi Takashimaya East 5F — flagship DX + Pokémon Cafe (reserve café). Station Store with Station Master Pikachu is on Character Street B1 (see stop above).",
      },
      {
        time: "Late afternoon",
        title: "Sasamaki Kenuki Sushi (笹巻けぬきすし総本店)",
        kind: "food",
        detail:
          "Udagawa Bldg 1F, 2-12 Kanda Ogawacho — Edo-era (1702) bamboo-leaf sushi, takeout classic (best ~3 hrs after making). Mon–Sat ~10:00 until sold out · closed Sun/holidays · cash · ~3 min from Ogawamachi. Hit before they sell out, then on to mAach.",
      },
      {
        time: "Evening",
        title: "mAach ecute & 2k540 Aki-Oka Artisan",
        kind: "shop",
        detail: "Kanda Manseibashi, plus artisan shops under the train tracks between Akihabara and Okachimachi.",
      },
      {
        time: "Dinner option",
        title: "Yurakucho Gado-shita",
        kind: "food",
        detail:
          "Tiny izakayas under the JR tracks between Ginza and Yurakucho — classic end to a Tokyo Station / Ginza / Akihabara day. Marunouchi Line or walk from Ginza.",
      },
    ],
  },
  {
    n: 5,
    weekday: "Tuesday",
    dateLabel: "Nov 3",
    city: "Tokyo",
    title: "Toyosu / Tsukiji & Odaiba",
    blurb: "Market breakfast by the bay, then a waterfront day.",
    accent: "#4C7FD1",
    stops: [
      {
        time: "9:00 AM",
        title: "Market breakfast",
        kind: "food",
        detail: "Start at Toyosu Market or the Tsukiji Outer Market.",
      },
      {
        time: "Daytime",
        title: "Toyosu Bay + Odaiba (keep the bay together)",
        kind: "sight",
        detail: "Yurikamome links Toyosu → Shin-Toyosu (teamLab Planets) → Odaiba — avoid criss-crossing the city.",
        items: [
          "teamLab Planets TOKYO (Shin-Toyosu) — book timed tickets ahead",
          "Odaiba Seaside Park (Odaiba Kaihin Koen)",
          "DiverCity Tokyo Plaza — life-sized Unicorn Gundam Statue",
          "Panasonic Center Tokyo & Miraikan — National Museum of Emerging Science and Innovation",
          "Fuji TV Building",
          "Tokyo Joypolis — indoor arcade and amusement park",
        ],
      },
      {
        time: "Optional Poke!",
        title: "Pokémon Center TOKYO-BAY",
        kind: "shop",
        detail:
          "LaLaport TOKYO-BAY West Wing 2F (Funabashi) — full official Center across the bay if you want a detour from Toyosu / Odaiba (~30–40 min).",
      },
      {
        time: "Lunch / if nearby",
        title: "Tempura Kakiage Nomura (Shinbashi)",
        kind: "food",
        detail:
          "6-13-13 Shinbashi 1F — ~4 min from Onarimon, same neighborhood as dinner. Michelin Bib Gourmand kakiage don (shrimp, ¥1,600 / special ¥2,100). Tue open 11:00–14:00 & 17:00–21:00 · cash only · lines before open — arrive early.",
      },
      {
        time: "Dinner",
        title: "Shinbashi Yakiniku New Myondon",
        kind: "food",
        detail:
          "6-22-7 Shinbashi — Korean BBQ house near Onarimon (Exit A3b, ~3 min), right by Tokyo Tower. Miyazaki wagyu skirt steak + secret sauce · dinner course ¥5,000–7,000 · AYCE drinks +¥2,000. Tue dinner 17:00–22:00 · closed Mon/Sun/holidays.",
      },
      { time: "Evening", title: "Tokyo Tower", kind: "sight", detail: "Nighttime views over the city — short hop from Onarimon / New Myondon." },
      {
        time: "If nearby",
        title: "Skin — Roppongi & Motoazabu",
        kind: "note",
        detail:
          "One stop from Kamiyacho. Azabu Beauty Clinic — AXALL ROPPONGI 6F, 7-8-6 Roppongi (Tue 10:00–18:00, closed Sun). Motoazabu Skin Clinic — Cadre 2F, 3-10-5 Motoazabu, ~2 min from Roppongi Hills (reception 9:00–18:00).",
      },
    ],
  },
  {
    n: 6,
    weekday: "Wednesday",
    dateLabel: "Nov 4",
    city: "Tokyo",
    title: "Tokyo DisneySea",
    blurb: "Ticket is booked — full day at the park. The Shinjuku walk and Ikebukuro stay as backups.",
    accent: "#B47FD8",
    stops: [
      {
        time: "All day",
        title: "Tokyo DisneySea",
        kind: "sight",
        detail:
          "Ticket in hand. 1-13 Maihama, Urayasu — JR Keiyo Line to Maihama (about 15 min from Tokyo Station; from Higashi-Shinjuku, Shinjuku → Tokyo → Maihama). Plan on the whole day in the park.",
      },
      {
        time: "Option B",
        title: "Shinjuku → Imperial Palace Loop walk",
        kind: "note",
        detail:
          "15 stops from GLOU Higashi Shinjuku east to Chidorigafuchi. Everything is open by 11:00 AM — then a counter-clockwise 5 km Imperial Palace Loop with gate, bridge, and garden stops along the path.",
      },
      {
        time: "Option C",
        title: "Ikebukuro — Star Wars + Pokémon MEGA TOKYO + Hinata",
        kind: "shop",
        detail:
          "STAR WARS STORE by BENELIC (PARCO Main 6F) · Pokémon Center MEGA TOKYO & Pikachu Sweets (Sunshine City alpa 2F) · Gyukatsu Motomura one floor up (Alpa 3F, 11:00–22:00) · dinner alt Yakiton Hinata West Exit (First Bldg 2F, Exit C3 — daily 16:00–23:00). ~10 min Fukutoshin from Higashi-Shinjuku.",
      },
      {
        time: "Stops 1–10",
        title: "Shinjuku & Kabukicho",
        kind: "shop",
        items: [
          "namco TOKYO (Kabukicho Tower 3F) — neon arcade lounge, claw machines, pop-culture capsules",
          "GiGO Shinjuku Kabukicho — multi-floor arcade (crane, rhythm, fighting cabinets)",
          "Shinsoku Shinjuku — Pokémon TCG singles, boosters, retro games",
          "WATCHNIAN Shinjuku — authenticated pre-owned Swiss watches",
          "Housekihiroba Shinjuku — new and secondhand watches",
          "KOMEHYO Shinjuku — tourist-friendly pre-owned watch floors",
          "BOOKOFF SUPER BAZAAR Shinjuku Station West Exit — used cards, games, figures",
          "Yellow Submarine Shinjuku Gameshop — TCG, model kits, board games",
          "SURUGA-YA Shinjuku Marui Annex — retro games, anime goods, cards",
          "TCG ROYAL SHINJUKU — Pokémon and One Piece singles and sealed packs",
        ],
      },
      {
        time: "Stops 11–15",
        title: "Historic moving east",
        kind: "sight",
        items: [
          "Hanazono Shrine — quiet vermilion shrine tucked behind the towers",
          "Ichigaya Fish Center — outdoor fishing pond on the castle moat",
          "Yasukuni Shrine — grand walkways and the 25m steel torii",
          "Tayasumon Gate (Kitanomaru Park) — oldest surviving wooden Edo Castle gate (1636)",
          "Chidorigafuchi Moat — scenic finish, then start the palace running loop",
        ],
      },
      {
        time: "Then",
        title: "Imperial Palace Loop — 5 km counter-clockwise",
        kind: "nature",
        detail:
          "Start at Chidorigafuchi. The western half is hilly with moat views; the eastern half is flat and wide, with Marunouchi skyscrapers against the castle walls. Look for these sights along the path:",
        items: [
          "Sakuradamon Gate — fortified early-1600s gate; walk through the wooden doors toward the main plaza (site of the 1860 assassination)",
          "Nijubashi Bridge — postcard double bridge across the moat into the inner palace grounds",
          "Statue of Kusunoki Masashige — bronze samurai on a rearing horse, just off the running path",
          "Fushimi Yagura — white watchtower on the stone walls, visible from the Nijubashi area (moved from Fushimi Castle in Kyoto)",
          "East Gardens · Tenshudai Ruins — free daytime entry (closed Mon & Fri); climb the Edo Castle donjon foundation",
        ],
      },
    ],
  },
  {
    n: 7,
    weekday: "Thursday",
    dateLabel: "Nov 5",
    city: "Tokyo",
    title: "Ueno, Asakusa & Skytree Town",
    blurb: "Quieter Yanaka first, then temples, market food and knives — classic east side (Ginza Line links Ueno ↔ Asakusa).",
    accent: "#7FB069",
    stops: [
      {
        time: "Morning",
        title: "Yanaka + Yanaka Ginza + Nezu Shrine",
        kind: "sight",
        detail:
          "Quieter Tokyo — tiny shops, cafés, bakeries, cat statues on Yanaka Ginza, then Nezu Shrine’s red torii tunnel. Chiyoda Line to Sendagi or Nezu; explore on foot.",
      },
      { time: "Late morning", title: "Ueno Park & Tokyo National Museum", kind: "sight" },
      {
        time: "11:30 AM",
        title: "Ameyoko Market street food walk",
        kind: "food",
        items: ["Takoyaki — octopus balls", "Yakitori — grilled chicken skewers", "Taiyaki — fish-shaped sweet bean pastry"],
      },
      {
        time: "12:30 PM",
        title: "Kappabashi Kitchenware Street",
        kind: "shop",
        detail: "Professional Japanese chef knives and kitchen goods.",
      },
      {
        time: "1:30 PM",
        title: "Asakusa: Senso-ji & Kaminarimon",
        kind: "sight",
        detail: "The Thunder Gate and temple grounds — matcha treats at Chacha Futatsume. Start early if you want the temple before the crowds.",
      },
      {
        time: "Note",
        title: "Kita-Senju café (closed today)",
        kind: "note",
        detail:
          "Coffee Work Shop Shanty (Mom+Pop) is ~5 min from Kita-Senju on the Tobu Skytree Line — but closed Wed/Thu. Save it for Day 9 (Sat) free day.",
      },
      {
        time: "4:00 PM",
        title: "Pokémon Center SKYTREE TOWN + Starbucks East 6F",
        kind: "shop",
        detail:
          "Solamachi East Yard — Pokémon Center on 4F, then Starbucks East 6F for Skytree window seats (Sumida-limited Edo Kiriko iced coffee glasses).",
      },
      {
        time: "6:00 PM",
        title: "Dinner — Taishoen (大昌園)",
        kind: "food",
        detail:
          "Authentic yakiniku — 2-14-7 Asakusa. Reservation-only omakase meat grill (50+ years) · Thu 17:00–23:00 · cash · ~3 min from TX Asakusa. Alt: FUJI SAKU sushi in Kinshichō.",
      },
      {
        time: "8:00 PM",
        title: "Evening stroll on the Sumida River",
        kind: "nature",
        detail: "Scenic walk along Sumida Park.",
      },
      {
        time: "Watch spot",
        title: "Kurofune Clock Ko Liquor Store",
        kind: "watch",
        detail: "Asakusa — watches and spirits in one shop.",
      },
    ],
  },
  {
    n: 8,
    weekday: "Friday",
    dateLabel: "Nov 6",
    city: "Yokohama",
    title: "Yokohama & Coastal Day Trip",
    blurb: "Waterfront, noodles, cards and sweets.",
    accent: "#3FA7C4",
    stops: [
      {
        time: "Day trip",
        title: "Yokohama: Minato Mirai 21",
        kind: "sight",
        items: [
          "Minato Mirai 21 waterfront district",
          "Yokohama Landmark Tower & Sky Garden observatory",
          "Cup Noodles Museum",
          "Poke! — Pokémon Center YOKOHAMA (Sky Building 8F)",
          "Poke! — Pokémon Center YOKOHAMA SATELLITE (JOINUS 2F)",
        ],
      },
      {
        time: "TCG",
        title: "トレカトップ 横浜店 — Toreka Top",
        kind: "tcg",
        detail: "TCG専門 トレカトップ 横浜店, Yokohama.",
      },
      {
        time: "Cafe",
        title: "ナタデココ 横浜店 — Nata de Coco",
        kind: "food",
        detail: "Sweets and cafe stop in Yokohama.",
      },
      {
        time: "On the way back",
        title: "The Roaleans Coffee And Bar (Omori)",
        kind: "food",
        detail:
          "αNEXT Omori Kaigan 9F — 1920s jazz café-bar with working gramophones & McIntosh horns. On the Keikyu/JR line between Yokohama and Tokyo · opens Fri 15:00 · cocktails ~¥1,500 · light meals ¥1,200–1,600.",
      },
      {
        time: "Note",
        title: "Weather swap option",
        kind: "note",
        detail: "Can be adjusted to a Hakone / Mt. Fuji day trip depending on the weather.",
      },
    ],
  },
  {
    n: 9,
    weekday: "Saturday",
    dateLabel: "Nov 7",
    city: "Tokyo",
    title: "Free Day & Fine Dining",
    blurb: "Iron Chef Sakai — French-Japanese, booked ahead.",
    accent: "#C9A24A",
    stops: [
      {
        time: "Lunch / Dinner",
        title: "La Rochelle Sanno",
        kind: "food",
        detail: "Nagatacho / Sanno area — founded by Iron Chef French Hiroyuki Sakai. Reserve online ahead of time.",
      },
      {
        time: "Note",
        title: "The Sanno branch is the one to book",
        kind: "note",
        detail:
          "The flagship Minami-Aoyama location has closed for major building renovations; the Sanno branch remains open for French-Japanese fine dining.",
      },
      {
        time: "If nearby",
        title: "Coffee Work Shop Shanty (Kita-Senju)",
        kind: "food",
        detail:
          "Mom+Pop kissaten ~5 min from Kita-Senju — 50+ years, elderly couple, thick toast & sandwiches with house coffee. Open Sat 10:00–18:00 · cash only. Closed Wed/Thu.",
      },
    ],
  },
  {
    n: 10,
    weekday: "Sunday",
    dateLabel: "Nov 8",
    city: "Tokyo",
    title: "Free Day & Tattoo Day",
    blurb: "Ink, then cafes and easy wandering.",
    accent: "#8C7BD8",
    stops: [
      {
        time: "Today",
        title: "Tattoo appointment",
        kind: "note",
        detail: "Designated time for getting your tattoo or touch-ups.",
      },
      {
        time: "After",
        title: "Nearby cafes & exploring",
        kind: "food",
        detail: "Take the rest of the day slow around the neighborhood.",
      },
    ],
  },
  {
    n: 11,
    weekday: "Monday",
    dateLabel: "Nov 9",
    city: "Tokyo",
    title: "Ultimate Watch Hunting Day",
    blurb: "Nakano Broadway first, then the rest of the city.",
    accent: "#E0B04A",
    stops: [
      {
        time: "9:00 AM",
        title: "Nakano Broadway watch hub",
        kind: "watch",
        items: [
          "Jack Road — pre-owned luxury and new models (Teppanyaki Chinese food JIN is right next door)",
          "Renzu — pre-owned luxury and vintage",
          "Timezone — Swiss and international variety",
          "Universal Value — pre-owned luxury, 3rd floor",
        ],
      },
      {
        time: "Later",
        title: "Other essential watch stores",
        kind: "watch",
        items: ["Carese (Ginza)", "Private Eyes (Kita-ku / Nishi-Sugamo)", "Watch CTI (Ginza)", "Shellman (Imperial Palace / Ginza)"],
      },
      {
        time: "Nearby Poke!",
        title: "Pokémon Center TOKYO DX & Café",
        kind: "shop",
        detail: "Nihombashi Takashimaya East 5F — short hop from Ginza watch hunting.",
      },
    ],
  },
  {
    n: 12,
    weekday: "Tuesday",
    dateLabel: "Nov 10",
    city: "Tokyo",
    title: "Final Free Day",
    blurb: "Souvenirs, packing, and one last favorite.",
    accent: "#8FA0B5",
    stops: [
      {
        time: "Today",
        title: "Souvenir shopping & packing",
        kind: "shop",
        detail: "Last-minute gifts, packing, and revisiting favorite spots.",
      },
    ],
  },
  {
    n: 13,
    weekday: "Wednesday",
    dateLabel: "Nov 11",
    city: "Tokyo",
    title: "Departure",
    blurb: "Check out, head to the airport, fly home.",
    accent: "#E4573D",
    stops: [
      { time: "Morning", title: "Check out of the hotel", kind: "rest" },
      {
        time: "Then",
        title: "Head to the airport",
        kind: "transit",
        detail: "Fly home. If Narita T1 — Pokémon Store South Wing 4F for last-minute merch.",
      },
    ],
  },
];