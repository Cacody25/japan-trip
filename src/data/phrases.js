export const konbiniScenarios = [
  {
    n: 1,
    topic: "Plastic bag?",
    clerk: {
      kana: "袋はご利用ですか？",
      romaji: "Fukuro wa goriyō desu ka?",
      say: "Foo-koo-roh wah go-ree-yoh dess kah?",
      meaning: "Do you need a bag?",
    },
    replies: [
      { when: "Yes", kana: "はい、お願いします", romaji: "Hai, onegaishimasu", meaning: "Yes, please." },
      { when: "No", kana: "いいえ、大丈夫です", romaji: "Iie, daijōbu desu", meaning: "No, thank you / I'm good." },
    ],
  },
  {
    n: 2,
    topic: "Heat it up?",
    clerk: {
      kana: "温めますか？",
      romaji: "Atatame maska?",
      say: "Ah-tah-tah-meh-mass-kah?",
      meaning: "Do you want this heated up?",
    },
    replies: [
      { when: "Yes", kana: "はい、お願いします", romaji: "Hai, onegaishimasu", meaning: "Yes, please." },
      { when: "No", kana: "いいえ、大丈夫です", romaji: "Iie, daijōbu desu", meaning: "No, thank you." },
    ],
  },
  {
    n: 3,
    topic: "Point card?",
    clerk: {
      kana: "ポイントカードはお持ちですか？",
      romaji: "Pointo kādo wa o-mochi desu ka?",
      say: "Poyn-toh kah-doh wah oh-moh-chee dess kah?",
      meaning: "Do you have a point card?",
    },
    replies: [{ kana: "大丈夫です", romaji: "Daijōbu desu", meaning: "I'm good / No." }],
  },
  {
    n: 4,
    topic: "Chopsticks?",
    clerk: {
      kana: "お箸はつけますか？",
      romaji: "O-hashi wa tsukemasu ka?",
      say: "Oh-hah-shee wah tsoo-keh-mass kah?",
      meaning: "Do you need chopsticks?",
    },
    replies: [{ kana: "はい、お願いします", romaji: "Hai, onegaishimasu", meaning: "Yes, please." }],
  },
  {
    n: 5,
    topic: "How will you pay?",
    clerk: {
      kana: "お支払い方法はいかがなさいますか？",
      romaji: "O-shiharai hōhō wa ikaga nasaimasu ka?",
      say: "Oh-shee-hah-rye hoh-hoh wah ee-kah-gah nah-sah-ee-mah-soo kah?",
      meaning: "How would you like to pay?",
    },
    replies: [
      { when: "Card", kana: "カードで", romaji: "Kādo de", meaning: "By card." },
      { when: "Cash", kana: "現金で", romaji: "Genkin de", meaning: "By cash." },
    ],
  },
];

export const everydayPhrases = [
  { en: "Hello / Good morning", jp: "おはようございます", romaji: "Ohayō gozaimasu", say: "[oh-hah-yoh goh-zye-mahss]" },
  { en: "Hello / Good afternoon", jp: "こんにちは", romaji: "Konnichiwa", say: "[kohn-nee-chee-wah]" },
  { en: "Good evening", jp: "こんばんは", romaji: "Konbanwa", say: "[kohn-bahn-wah]" },
  { en: "Bye (informal)", jp: "じゃあね", romaji: "Ja ne", say: "[jah neh]" },
  { en: "Thank you", jp: "ありがとうございます", romaji: "Arigatō gozaimasu", say: "[ah-ree-gah-toh goh-zye-mahss]" },
  { en: "You're welcome", jp: "どういたしまして", romaji: "Dōitashimashite", say: "[doh-ee-tah-she-mah-she-teh]" },
  { en: "Please (request)", jp: "お願いします", romaji: "Onegai shimasu", say: "[oh-neh-gye she-mahss]" },
  { en: "Excuse me / Sorry / Thanks", jp: "すみません", romaji: "Sumimasen", say: "[soo-mee-mah-sen]" },
  { en: "I'm sorry", jp: "ごめんなさい", romaji: "Gomen nasai", say: "[goh-men nah-sigh]" },
  { en: "Okay / I'm good", jp: "大丈夫", romaji: "Daijōbu", say: "[dye-joh-boo]" },
  { en: "I'm great!", jp: "絶好調です", romaji: "Zekkōchō desu", say: "[Zek-kō-chō-dess]" },
  { en: "Let's go!", jp: "行きましょう", romaji: "Ikimashō", say: "[ee-kee-mah-show]" },
  { en: "How are you?", jp: "お元気ですか？", romaji: "O-genki desu ka?", say: "[oh-gen-kee dess-kah]" },
  { en: "What is your name?", jp: "お名前は何ですか？", romaji: "O-namae wa nan desu ka?", say: "[oh-nah-may wah nahn dess-kah]" },
];

export const helpPhrases = [
  {
    en: "Can you help me?",
    romaji: "Tetsudatte itadaku koto wa kanō deshou ka?",
    meaning: "Is it possible for you to help me? (Polite)",
  },
  {
    en: "Sorry for my Japanese",
    romaji: "Nihongo ga tsutanakute mōshiwake arimasen.",
    meaning: "I apologize for my poor Japanese.",
  },
  {
    en: "May I ask a question?",
    romaji: "Shitsumon shite mo ii desu ka?",
    say: "[Sheet-sue-mon she-teh moh ee dess-kah?]",
    meaning: "Can I ask a question?",
  },
  { en: "Do you speak English?", romaji: "Eigo o hanasemasu ka?", say: "[ay-goh oh hah-nah-seh-mahss-kah]", meaning: "Do you speak English?" },
  { en: "Is English okay?", romaji: "Eigo de daijōbu desu ka?", say: "[AY-goh deh die-JOH-boo dess-kah]", meaning: "Is English okay here?" },
  { en: "I don't understand", romaji: "Wakarimasen", say: "[wah-kah-ree-mah-sen]", meaning: "I don't understand." },
  { en: "Where is the bathroom?", romaji: "Toire wa doko desu ka?", say: "[toy-reh wah doh-koh dess-kah]", meaning: "Where is the restroom?" },
  { en: "How much does it cost?", romaji: "Ikura desu ka?", say: "[ee-koo-rah dess-kah]", meaning: "How much is this?" },
  { en: "This one, please", romaji: "Kore o kudasai", say: "[koh-reh oh koo-dah-sai]", meaning: "I'll take this one." },
  {
    en: "Thank you for your patience",
    romaji: "Shinbōdzuyoku, mata gorikai itadaki, arigatō gozaimasu.",
    meaning: "Thank you for your patience and understanding.",
  },
];

export const diningPhrases = [
  { en: "Greeting on entry", romaji: "Irasshaimase!", meaning: "Staff will call this out enthusiastically — just smile or nod." },
  { en: "A table for two, please", jp: "二人用の席をお願いします", romaji: "Futari-yō no seki o onegaishimasu" },
  { en: "I have a reservation", jp: "予約しています", romaji: "Yoyaku shite imasu" },
  { en: "The menu, please", jp: "メニューをお願いします", romaji: "Menyū o onegaishimasu" },
  { en: "What do you recommend?", jp: "おすすめは何ですか？", romaji: "Osusume wa nan desu ka?" },
  { en: "Where is a good place to eat?", jp: "おいしいお店はどこにありますか？", romaji: "Oishii omise wa doko ni arimasu ka?" },
  { en: "Any other shops you recommend?", jp: "他におすすめのお店はありますか？", romaji: "Hoka ni osusume no o-ten wa arimasu ka?" },
  { en: "I would like [X], please", jp: "[X]をお願いします", romaji: "[X] o onegaishimasu" },
  { en: "The bill, please", jp: "お会計をお願いします", romaji: "O-kaikei o onegaishimasu" },
  { en: "It's delicious", jp: "おいしいです", romaji: "Oishii desu" },
  { en: "It was delicious", jp: "おいしかったです", romaji: "Oishikatta desu" },
  { en: "Before eating", jp: "いただきます", romaji: "Itadakimasu", meaning: "Hands together, slight bow." },
  { en: "After the meal", jp: "ごちそうさまでした", romaji: "Gochisōsama deshita", meaning: "Thank you for the meal." },
];

export const diningWords = [
  { en: "Water", jp: "お冷や", romaji: "O-hiya", meaning: "Complimentary iced tap water is standard at restaurants." },
  { en: "Napkins", jp: "紙ナプキン", romaji: "Kami-napukin", meaning: "Make sure to say the 'kami' part." },
  { en: "Chopsticks", jp: "箸", romaji: "Hashi" },
];

export const diningCustoms = [
  "Otoshi (appetizer charge) — no tipping in Japan, but izakayas charge a small cover charge called O-tōshi (お通し) that includes a small starter dish.",
  "No substitutions — Japanese kitchens stick strictly to the menu recipe.",
  "Tea — hot green tea (Ocha) is commonly served after the meal instead of coffee.",
];

export const foodVocab = [
  { en: "Chicken", romaji: "Tori", jp: "鳥 / 鶏" },
  { en: "Beef", romaji: "Gyūniku", jp: "牛肉" },
  { en: "Pork", romaji: "Butaniku", jp: "豚肉" },
  { en: "Fish", romaji: "Sakana", jp: "魚" },
  { en: "Seafood", romaji: "Kaisen", jp: "海鮮" },
  { en: "Egg", romaji: "Tamago", jp: "卵" },
  { en: "Rice", romaji: "Gohan / Raisu", jp: "ごはん / ライス" },
  { en: "Bread", romaji: "Pan", jp: "パン" },
  { en: "Vegetables", romaji: "Yasai", jp: "野菜" },
  { en: "French fries", romaji: "Furaido poteto", jp: "フライドポテト" },
  { en: "Butter", romaji: "Batā", jp: "バター" },
  { en: "Cheese", romaji: "Chīzu", jp: "チーズ" },
  { en: "Water", romaji: "Mizu", jp: "水" },
  { en: "Beer", romaji: "Bīru", jp: "ビール" },
  { en: "Wine (red / white)", romaji: "Aka / Shiro wain", jp: "赤 / 白ワイン" },
];

export const tcgPhrases = [
  {
    en: "What is your favorite Pokémon?",
    jp: "一番好きなポケモンは何ですか？",
    romaji: "Ichiban sukina pokemon wa nani desu ka?",
  },
  { en: "Sealed product", jp: "未開封", romaji: "Mi-kaifū" },
  { en: "Slabs (graded cards)", jp: "スラブ", romaji: "Surabu" },
];

export const pokemonNames = [
  { en: "Snorlax", jp: "カビゴン", romaji: "Kabigon" },
  { en: "Eevee", jp: "イーブイ", romaji: "Eievui / Iibui" },
  { en: "Bulbasaur", jp: "フシギダネ", romaji: "Fushigidane" },
  { en: "Mr. Mime", jp: "バリヤード", romaji: "Barrierd" },
  { en: "Cubone", jp: "カラカラ", romaji: "Karakara" },
  { en: "Psyduck", jp: "コダック", romaji: "Koduck / Kodakku" },
];

export const currency = {
  note: "Rate used here: ~1 USD = ¥160 JPY.",
  rows: [
    { usd: "$1", jpy: "¥160" },
    { usd: "$5", jpy: "¥800" },
    { usd: "$10", jpy: "¥1,600" },
    { usd: "$20", jpy: "¥3,200" },
    { usd: "$50", jpy: "¥8,000" },
    { usd: "$100", jpy: "¥16,000" },
  ],
};