// Pitch when you hand someone a Trick or Trade pack.
export const halloweenPitch = {
  title: "Pack pitch",
  blurb: "Say this when you hand out a pack — tap Speak for Japanese audio.",
  jp: "こんにちは！カリフォルニアから来ました。これは2023年/2024年に北米限定で配られたハロウィン限定のポケモンカードパックです！ゲンガー、ピカチュウ、ブラッキーなどが当たります。気軽に楽しんでください！（PSA10の完品は価値がつくこともあります！）どうぞ！",
  romaji:
    "Konnichiwa! Kariforunia kara kimashita. Kore wa nisen-nijū-san-nen / nisen-nijū-yon-nen ni Hokubei-gentei de kubarareta Harowin-gentei no Pokémon kādo pakku desu! Gengā, Pikachū, Burakkī nado ga atarimasu. Kigaruni tanoshimatte kudasai! (PSA-jū no kampin wa kachi ga tsuku koto mo arimasu!) Dōzo!",
  en: "Hello! I'm from California. This is an exclusive Halloween Pokémon card pack given out only in North America in 2023/2024! Top hits include Gengar, Pikachu, and Umbreon. Enjoy! (PSA 10 graded copies can actually be worth some money!) Here you go!",
};

// Trick or Trade packs you're handing out — hits to help people find what they pulled.
export const halloweenPacks = [
  {
    id: "trick-or-trade-2023",
    year: "2023",
    title: "2023 Trick or Trade",
    blurb: "Top pulls from the packs you're giving out.",
    hits: [
      { rank: 1, en: "Gengar", jp: "ゲンガー", romaji: "Gangā" },
      { rank: 2, en: "Pikachu", jp: "ピカチュウ", romaji: "Pikachū" },
      { rank: 3, en: "Mimikyu", jp: "ミミッキュ", romaji: "Mimikkyu" },
      { rank: 4, en: "Houndoom", jp: "ヘルガー", romaji: "Herugā" },
      { rank: 5, en: "Marshadow", jp: "マーシャドー", romaji: "Māshadō" },
    ],
  },
  {
    id: "trick-or-trade-2024",
    year: "2024",
    title: "2024 Trick or Trade",
    blurb: "Top pulls from the packs you're giving out.",
    hits: [
      { rank: 1, en: "Gengar", jp: "ゲンガー", romaji: "Gangā" },
      { rank: 2, en: "Pikachu", jp: "ピカチュウ", romaji: "Pikachū" },
      { rank: 3, en: "Darkrai", jp: "ダークライ", romaji: "Dākurai" },
      { rank: 4, en: "Umbreon", jp: "ブラッキー", romaji: "Burakkī" },
      { rank: 5, en: "Mimikyu", jp: "ミミッキュ", romaji: "Mimikkyu" },
    ],
  },
];
