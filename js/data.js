/* ============================================================
   LAYERS OF PLACE — all editable content lives in this file.
   [TODO] = placeholder for the team to fill.
   Content below comes from the team's research notes (UNESCO/ICOMOS 2024 mission,
   Leiden University, Aga Khan Trust/ArchNet, Encyclopaedia Iranica, UN News).
   Items marked [verify] were found only in tertiary or tourism sources.
   Exact citations (title, URL, date) still need to be filled in.
   ============================================================ */

/* ---- Opening dig: bands from the surface down ---- */
window.ERAS = [
  { year: 2026,  label: "Today",                       note: "Samarkand, the living city" },
  { year: 1950,  label: "20th century",                note: "Soviet era" },
  { year: 1420,  label: "15th century",                note: "Timurid capital" },
  { year: 1220,  label: "1220",                        note: "Mongol invasion" },
  { year: 650,   label: "c. 650 CE",                   note: "Sogdian murals" },
  { year: -329,  label: "329 BCE",                     note: "Marakanda" },
  { year: -650,  label: "7th–6th century BCE",         note: "Earliest settlement" }
];

/* ---- Real coordinates [lng, lat] (checked against OpenStreetMap) ---- */
window.SITES = {
  registan: { lngLat: [66.9758, 39.6548] },
  gur:      { lngLat: [66.9691, 39.6485] },
  afrasiyab:{ lngLat: [66.9933, 39.6694] }
};
/* Signpost for traditions: placed at Siyob Bazaar (a place where living customs are visible). */
window.SIGNPOST = { lngLat: [66.9811, 39.6614] };

/* ---- People (from Group Task.docx, Team A) ---- */
window.TEAM = [
  { name: "Pages Mark Thomas Frank Mathieu",   role: "[TODO]", photo: "thomas" },
  { name: "Ma Shanshan",                       role: "[TODO]", photo: "mashanshan" },
  { name: "Shahafas K A",                      role: "[TODO]", photo: "sha" },
  { name: "Udalova Polina Dmitriyevna",        role: "[TODO]", photo: "polina" },
  { name: "Deng Shuang",                       role: "[TODO]", photo: "dengshuang" },
  { name: "Eliboyeva Mashhura Otabek qizi",    role: "[TODO]", photo: "mashkura" }
];

/* Field photo sets shown in FieldNotes. All photos were taken by Team A members.
   Each set tells one small story; edit the text freely (saw = what is in the photos,
   think = our interpretation, ask = the question it leaves). First image is shown largest. */
window.FIELD_SETS = [
  { no: "01", place: "Afrasiyab archaeological site", title: "A city that is now a hill",
    imgs: ["site-city-edge", "site-mound-people", "site-hill-sheep", "site-sheep-trees", "site-mounds-buildings"],
    saw: "Low mounds of earth where a city once stood (the site covers about 219 hectares). Ordinary Samarkand housing begins at the edge of the mounds, and sheep graze between the trees and the hill.",
    think: "The oldest layer does not look like a building at all: it reads as ground. Today it sits next to houses and doubles as pasture, so it is a layer people still live beside, not only study.",
    ask: "How do you present a site that is mostly earth?" },
  { no: "02", place: "Afrasiyab Museum", title: "What the road uncovered",
    imgs: ["museum-building", "museum-murals-drawing", "museum-mural-birds", "museum-ceramics", "museum-vessel"],
    saw: "The museum building on the site. Inside, Sogdian wall paintings with faded blue grounds and white birds hang beside line drawings that redraw each scene so visitors can read it. In the cases: pottery labelled “Ceramics of the VIII–VII centuries BC” and “A large cylindrical vessel, V–IV centuries BC”.",
    think: "The murals came to light when a road was cut through the site in 1965, and the same work destroyed the upper ones. The museum can only show what survived, and the drawings next to the paint show how much we read through reconstruction.",
    ask: "A road both revealed the murals and destroyed them. How should heritage and traffic share the same ground?" },
  { no: "03", place: "Registan", title: "Same square, day and night",
    imgs: ["reg-sherdor-day", "reg-night-facade", "reg-night-courtyard", "reg-dome-interior", "reg-dome-tiles"],
    saw: "By day, Sher-Dor’s facade and minarets with visitors sitting on the paving. At night the madrasa facades are lit and people still gather in the square and courtyards. A gilded dome ceiling inside, and a tiled dome on a stepped base outside. [TODO name the buildings]",
    think: "The square works as a public stage again (education, worship and markets once; festivals and visitors now). The tile and the light are the “coat” we read, and a photo cannot tell us what is original and what was restored. That is what the 2024 mission asked to be explained on site.",
    ask: "Is Registan still an authentic site today?" },
  { no: "04", place: "Gur-e-Amir", title: "Looking at the coat",
    imgs: ["gur-dome", "gur-portal"],
    saw: "The ribbed turquoise dome and a tiled minaret against plain brick walls. A person is working on a ladder at the right edge of the first photo. The second photo looks straight up the entrance portal, a honeycomb vault of tile.",
    think: "Only part of the original complex survives (the gate, part of one minaret, foundations of the madrasa and khanaqah), so the tomb we photograph is carried by its tiled surface. The person on the ladder reminds us that the surface is still being maintained.",
    ask: "Is a ruin beside a restored tomb honest, or does it hide part of the story?" },
  { no: "05", place: "Samarkand station", title: "The newest layer arrives by rail",
    imgs: ["train"],
    saw: "An Afrosiyob high-speed train at the platform. The station building behind it has arched windows that echo local pointed arches.",
    think: "The first piece of modern architecture many visitors meet is infrastructure, and it borrows local forms. Modern Samarkand is still adding layers, and it quotes the older ones while doing so.",
    ask: "Do new infrastructure projects make you feel connected with how the region was in the past?" }
];

/* ---- The five subject pages ----
   tag: F = documented fact · I = our interpretation · Q = open question
   refs: numbers point into `refs` of the same entry
   timeline: "then → now" nodes shown as a strip on the page            */
window.TOPICS = {
  registan: {
    kind: "SITE", title: "Registan", period: "15th–17th century, rebuilt many times",
    presenter: "[TODO presenter]",
    short: "Registan",
    fact: [
      { t: "F", text: "Three madrasas built across two centuries (1417–1660): the Registan shows continuity of the place through time, and its role as the primary site in the city.", refs: [1, 4] },
      { t: "F", text: "Three madrasas face one square: Ulugh Beg (1417–1420; the Aga Khan Trust gives 1418–1422), Sher-Dor (1619–1636), Tilya-Kori (1646–1660).", refs: [1, 4] },
      { t: "F", text: "Two of them replaced other buildings: in the 17th century Tilya-Kori took the place of a caravanserai from Ulugh Beg’s time, and Sher-Dor the place of a khanaqah.", refs: [4] },
      { t: "F", text: "What we see is the product of repeated restoration: the dome now on Tilla-Kori was added in works ending in 1975, and no photo or drawing of the original dome survives; later work used reinforced concrete under brick facing.", refs: [3, 4] }
    ],
    why: [
      { t: "I", text: "The glazed tile works like a “coat” over the structure: the restorers treated the exterior as clothing, so new tile was a practical choice, not a lie.", refs: [3] },
      { t: "F", text: "The 2024 UNESCO/ICOMOS mission found almost no on-site explanation of how the square evolved, and recommended telling visitors what changed in each building and how much was rebuilt.", refs: [2] },
      { t: "F", text: "It was a place of various use such as education, worship and public life (market square, community gathering, etc).", refs: [] }
    ],
    question: [
      { t: "Q", text: "If the dome was reinvented in 1975 and there is concrete under the brick, what are we preserving: the building, its look, or an idea of it?", refs: [] },
      { t: "Q", text: "“Registan” means “sandy place”. The popular story says sand soaked up blood; a more likely source is sandy sediment from old watercourses. Legend or evidence?", refs: [] },
      { t: "Q", text: "Is Registan still an authentic site today?", refs: [] }
    ],
    connect: [
      { to: "afrasiyab", text: "The Registan was a public space of the later, southern city. Tashkent Street is a widened version of the old bazaar street linking Bibi-Khanym and the Registan." },
      { to: "afrasiyab", text: "Just as Afrasiyab was where Samarkand’s main site evolved, Registan served as a Silk Road exchange hub." },
      { to: "modern",    text: "In the 1950s the surroundings were cleared so the monuments stood out from afar; the street later became a pedestrian zone. Ticketed entry, festivals, retail." }
    ],
    refs: [
      "UNESCO World Heritage Centre. “Samarkand – Crossroad of Cultures.” whc.unesco.org/en/list/603",
      "UNESCO / ICOMOS. 2024 advisory mission report on Samarkand. [TODO exact title, URL]",
      "Leiden University materials on the restoration of the Registan. [TODO exact citation]",
      "Aga Khan Trust for Culture / ArchNet, Registan Square entry. [TODO exact citation]"
    ]
  },

  gur: {
    kind: "SITE", title: "Gur-e-Amir", period: "from the early 15th century",
    presenter: "[TODO presenter]",
    short: "Gur-e-Amir",
    images: [
      { src: "img/sites/gur-exterior.jpg",        cap: "Gur-e-Amir [TODO credit]" },
      { src: "img/sites/gur-expedition-1941.jpg", cap: "The 1941 expedition [TODO credit]" },
      { src: "img/sites/gur-tombs.jpg",           cap: "The tombs [TODO credit]" },
      { src: "img/sites/gur-ceiling.jpg",         cap: "Interior dome [TODO credit]" },
      { src: "img/sites/gur-night.jpg",           cap: "Gur-e-Amir at night [TODO credit]" }
    ],
    fact: [
      { t: "F", text: "Historical background: Gur-e-Amir is one of the most important historical monuments in Samarkand. It was built in the early 15th century as a mausoleum for Muhammad Sultan, the grandson of Amir Timur. After Timur’s death in 1405, he was also buried here.", refs: [1, 4] },
      { t: "F", text: "The mausoleum later became the family burial place of the Timurid dynasty. It is famous for its turquoise ribbed dome, beautiful decorations and historical significance.", refs: [4] },
      { t: "F", text: "The Soviet expedition of 1941: in June 1941, a Soviet scientific expedition opened the tombs of Amir Timur and other members of the Timurid dynasty at Gur-e-Amir.", refs: [4] },
      { t: "F", text: "The expedition was led by scientists, including anthropologist Mikhail Gerasimov. They studied the human remains to investigate the physical characteristics of historical figures.", refs: [4] },
      { t: "F", text: "Gerasimov examined Timur’s skull and reconstructed his facial appearance. The expedition became an important event in the archaeological and anthropological study of Central Asian history.", refs: [4] },
      { t: "F", text: "In December 1942, the remains were returned to their graves according to Islamic burial traditions.", refs: [4] },
      { t: "F", text: "Only foundations of the madrasa and khanaqah, the entrance gate and part of one minaret remain.", refs: [1] }
    ],
    why: [
      { t: "I", text: "The story of Gur-e-Amir shows how historical events can become part of cultural beliefs and collective memory.", refs: [4] },
      { t: "F", text: "From a scientific perspective, the opening of the tomb was an archaeological and anthropological investigation.", refs: [4] },
      { t: "I", text: "From a cultural perspective, it was perceived by some people as a violation of a sacred burial place.", refs: [4] },
      { t: "I", text: "The legend of Tamerlane’s curse reflects the respect, fear and spiritual significance associated with the ruler and his tomb.", refs: [4] },
      { t: "I", text: "Today, Gur-e-Amir represents not only the architectural heritage of the Timurid period but also the cultural memory and traditions of Samarkand.", refs: [4] }
    ],
    question: [
      { t: "Q", text: "Main question: What did the Soviets do at Gur-e-Amir in 1941, and what cultural beliefs are associated with this event?", refs: [4] },
      { t: "F", text: "The Curse of Tamerlane: the opening of Timur’s tomb became associated with this popular legend. According to the legend, disturbing the tomb of the great ruler would bring terrible disasters, and people believed Timur’s resting place should not be disturbed.", refs: [4] },
      { t: "F", text: "The legend became especially famous because Nazi Germany invaded the Soviet Union on 22 June 1941, shortly after the tomb was opened. Some people connected these events and interpreted the beginning of the war as a consequence of disturbing Timur’s grave.", refs: [4] },
      { t: "F", text: "However, there is no scientific evidence that the opening of the tomb caused the war.", refs: [4] },
      { t: "Q", text: "The madrasa and khanaqah were not rebuilt [verify]. Is a ruin beside a restored tomb honest, or does it hide part of the story?", refs: [] }
    ],
    connect: [
      { to: "registan", text: "Same Timurid-era city. Ulugh Beg, who built the first Registan madrasa, is buried here." },
      { to: "modern",   text: "New entrance plaza and visitor centre: the tomb is being redesigned for visitors, not only for burial. (UNESCO/ICOMOS 2024 mission)" }
    ],
    refs: [
      "Wikipedia, “Gur-e-Amir” (tertiary: verify each claim with a scholarly source). [TODO]",
      "UNESCO / ICOMOS. 2024 advisory mission report on Samarkand. [TODO exact title, URL]",
      "UNESCO World Heritage Centre. “Samarkand – Crossroad of Cultures.” whc.unesco.org/en/list/603",
      "Team A, Gur-e-Amir presentation slides (5 slides: background, 1941 expedition, curse of Tamerlane, facts and beliefs, open question). Image credits [TODO]"
    ]
  },

  afrasiyab: {
    kind: "SITE", title: "Afrasiyab", period: "7th–6th century BCE to 1220 and after",
    presenter: "[TODO presenter]",
    short: "Afrasiyab",
    fact: [
      { t: "F", text: "The site covers 219 hectares with archaeological excavations (layers 8–12 m thick); people settled here in the 7th–6th century BCE and four periods of walls surround it.", refs: [1] },
      { t: "F", text: "In March 1220 Genghis Khan’s army took and destroyed Samarkand; the site was never resettled.", refs: [1] },
      { t: "F", text: "In 1965 a road was cut through the site; Sogdian murals were found and the upper ones were largely destroyed by bulldozers. The museum now stands alongside this road.", refs: [2] }
    ],
    why: [
      { t: "I", text: "“Destroyed, so the city moved” is only half the story: the same source says life had begun to shift south in the 11th–12th century, and the Mongol invasion completed it.", refs: [1] },
      { t: "I", text: "It is the layer the later monuments cannot show us.", refs: [] },
      { t: "F", text: "The frescoes found on the site are beautifully conserved and depict heroes, guards, wars, leaders, diplomats of that time in the region and beyond.", refs: [] }
    ],
    question: [
      { t: "Q", text: "A road both revealed the murals and destroyed them. How should heritage and traffic share the same ground?", refs: [] },
      { t: "Q", text: "How do you present a site that is mostly earth?", refs: [] }
    ],
    connect: [
      { to: "registan", text: "It shows the migration of the city-center through its main distinctive periods: from a hilltop city in the north-east to a centre built to the south. Afrasiyab (oldest), the Timurid city, and the 19th–20th-century western extension." }
    ],
    refs: [
      "Encyclopaedia Iranica, entries on Afrasiab / Samarkand. [TODO exact entry, author, year]",
      "Wikipedia, “Afrasiab”, and a travel-guide source for the 1965 road (tertiary: verify). [TODO]",
      "UNESCO World Heritage Committee decisions on Samarkand, 2006 and 2008. [TODO exact decision numbers]"
    ]
  },

  modern: {
    kind: "MODERN ARCHITECTURE", title: "Modern Architecture", period: "new buildings, visitor infrastructure",
    presenter: "[TODO presenter]",
    short: "Modern architecture",
    fact: [
      { t: "F", text: "Soviet planners in 1963 planned to replace the housing of the old city, but apart from a small area opposite the Registan those districts were not demolished.", refs: [1] },
      { t: "F", text: "UNESCO’s listing in 2001 as “Crossroad of Cultures” includes the Russian-era area of the city.", refs: [3] }
    ],
    why: [
      { t: "I", text: "The modern architecture of Samarkand not only includes the Russian era till the 1990s, but especially its post-independence era’s (21st century) quest of renewing new projects with past design and history.", refs: [] }
    ],
    question: [
      { t: "Q", text: "Do new infrastructure (Samarkand’s train station and the famous Afrasiyab HS-train, the Eternal City or the Silk Road International University, among others) make you feel connected with how the region was in the past?", refs: [] }
    ],
    connect: [
      { to: "registan", text: "Eternal City is inspired by Registan & Gur-e-Amir." },
      { to: "registan", text: "Entry tickets, pedestrian streets, retail in the madrasas: the square is now also a visitor product." },
      { to: "gur",      text: "Planned entrance plaza and visitor centre at Gur-e-Amir." }
    ],
    refs: [
      "UNESCO / ICOMOS. 2024 advisory mission report on Samarkand. [TODO exact title, URL]",
      "UN News, 31 October, report on tourism in Samarkand. [TODO exact URL and year]",
      "UNESCO World Heritage Centre. “Samarkand – Crossroad of Cultures” (inscribed 2001). whc.unesco.org/en/list/603"
    ]
  },

  traditions: {
    kind: "LOCAL CUSTOMS & TRADITIONS", title: "Customs & Traditions", period: "living practice",
    presenter: "[TODO presenter]",
    short: "Traditions",
    intro: "The traditions and customs of the Uzbek people have been passed down from generation to generation for centuries. They are special because they are rich, diverse, and based on kindness and tolerance. These traditions show the lifestyle, moral views, and cultural values of our people.",
    custom: [
      { title: "Hospitality and Warmth",
        means: "In Uzbek culture, a guest is treated with the highest respect, even compared to parents. It is believed that when a guest comes, they bring blessings and prosperity to the house.",
        practice: "Whether the guest is expected or not, they are immediately welcomed to the table. First, hot tea is served in a traditional bowl (piyola), followed by bread, sweets, and the best food. Sending off the guest with great care and respect is a matter of family honor." },
      { title: "Respect for Elders, Family Harmony, and Close Bonds (Oqibat)",
        means: "The family is a sacred place, and the words of parents and older people are very important and respected. Keeping strong, caring ties with relatives (oqibat) is a main duty for everyone.",
        practice: "Any big decision or family event is decided by talking with the elders first. People never raise their voices in front of older people, and they always show them the first sign of respect." },
      { title: "Hashar (Helping Each Other) and Unity",
        means: "People supporting and helping each other during both hard times and happy moments.",
        practice: "When someone needs to build a new house, clean a yard, or prepare for a big family event, neighbors and local people (mahalla) come to help freely without asking for any money. When the work is finished, a special osh (pilaf) is cooked for everyone who helped." },
      { title: "Uzbek Osh (Pilaf) and Celebration Culture",
        means: "Osh (pilaf) is a symbol of unity and generosity, along with traditions that celebrate important milestones in life.",
        practice: "In Uzbekistan, every big joyful event, and even difficult times, involves cooking and sharing osh. Weddings, cradle ceremonies (Beshik to‘yi), and circumcision parties (Sunnat to‘yi) bring all the relatives and neighbors together, making their bonds and love for each other even stronger." }
    ],
    fact: [], why: [], question: [],
    connectTitle: "Connection and Harmony (Bog‘liqlik va uyg‘unlik)",
    connect: [
      { text: "Family and community traditions (Hashar, hospitality) shape modern house design: a spacious guest room (mehmonxona) and a summer kitchen or ayvon are kept in modern cottages and apartments." },
      { text: "National patterns on modern materials: glass-and-metal buildings such as the “Humo Arena” in Tashkent still use ganch plaster carving, national patterns, decorative grills and dome elements." },
      { text: "The mahalla idea in modern townships: neighbourliness and close bonds (oqibat), shared recreation zones and choyxona tearooms in “smart cities” and gated communities." },
      { to: "registan", text: "The Registan keeps living traditions: national festivals, music shows, and craft workers selling Uzbek ceramics and textiles." }
    ],
    refs: [
      "Team A member’s written text on Uzbek customs and traditions (Hospitality, Elders and Oqibat, Hashar, Osh and celebrations)."
    ]
  }
};

/* Signpost arms: one arm per site, pointing at its real bearing. Edit the labels. */
window.SIGN_ARMS = [
  { site: "registan",  label: "Festival" },
  { site: "gur",       label: "Hospitality & food" },
  { site: "afrasiyab", label: "Craft" }
];

/* ---- Clues: 3 levels per site. Level 1 is drawn (see art.js), level 2 is a photo slot, level 3 is text. ---- */
window.CLUES = {
  registan: [
    { kind: "art",  key: "registan" },
    { kind: "photo", caption: "[TODO] photo: the street or market near it" },
    { kind: "text", text: "Three facing façades around one open square." }
  ],
  gur: [
    { kind: "art",  key: "gur" },
    { kind: "photo", caption: "[TODO] photo: the gate or street leading to it" },
    { kind: "text", text: "A ribbed turquoise dome over a family tomb." }
  ],
  afrasiyab: [
    { kind: "art",  key: "afrasiyab" },
    { kind: "photo", caption: "[TODO] photo: the museum or the hill" },
    { kind: "text", text: "No grand façade here, only a hill of earth and a museum." }
  ]
};

/* ---- Field Notes ---- */
window.CLOSING_QUESTION = "If the dome is new and the concrete is hidden, what are we really preserving?";

window.PAIR_NOTES = {
  "registan|afrasiyab": "Same centre of power, moved south. UNESCO reads the city in three zones: Afrasiyab (oldest), the Timurid city, the 19th–20th-century western extension.",
  "registan|gur": "Same Timurid-era city. Learning and public life on the Registan; family burial at Gur-e-Amir. Ulugh Beg links the two.",
  "registan|modern": "The Registan is inside the World Heritage zone, so new hotels and halls nearby must follow strict height and style rules. It marks the boundary between old and new Samarkand: modern city planning has to fit this historic layer, and new buildings must respect the heritage site. Since the 1950s the square has also become a visitor product: pedestrian streets, tickets, festivals.",
  "registan|traditions": "Registan serves as the main venue for Uzbek cultural gatherings and welcomes visitors from all over the world, carrying forward this age-old tradition of hospitality. It no longer holds old classes or medieval markets. Today it hosts national festivals, music shows and light performances, and local craft workers sell Uzbek ceramics and textiles here. The old space carries modern local customs: the historic square keeps living traditions and gets new use from today’s local people.",
  "gur|modern": "Planned entrance plaza and visitor centre: a tomb redesigned for visitors.",
  "afrasiyab|modern": "A road cut through Afrasiyab in 1965; UNESCO asked about the same road in 2006 and 2008."
  /* Add more as "a|b": "text" — keys use the order registan, gur, afrasiyab, modern, traditions */
};

/* ---- Where our sources disagree (evidence vs interpretation) ---- */
window.DISPUTES = [
  { topic: "Ulugh Beg madrasa", a: "1417–1420", b: "1418–1422 (Aga Khan Trust)", note: "Same building, different dates: which source do we trust, and why?" },
  { topic: "Reinforced concrete at the Registan", a: "Leiden: late Soviet-era restoration", b: "A Samarkand university rector (UN News): left by 1990s restoration", note: "Plaster, concrete and steel: when were they added? Check original reports." },
  { topic: "Sogdian murals of Afrasiyab", a: "from 648 CE", b: "to about 660 CE", note: "Sources vary; say “mid-7th century” unless one is cited." },
  { topic: "Why the old city ended", a: "Destroyed by the Mongols in March 1220", b: "Life had been moving south since the 11th–12th century", note: "“Destroyed, so it moved” is only half the story." },
  { topic: "Not used as fact", a: "Sher-Dor as barracks after 1868; Soviet-era gatherings and veil burning", b: "Found only on travel sites", note: "No authoritative source found: do not present as fact." }
];

/* ---- CHAPTERS: how the city changes (drives the Groupwork map) ----
   Every value is interpolated while time moves, so the map really morphs.
   alive: 0 = not there yet, ~.4 = ruins/abandoned, 1 = standing. */
window.CHAPTERS = [
  { year: -650, label: '7th–6th c. BCE', name: 'The hill of Afrasiyab',
    blurb: 'A walled settlement on a hill. No stone monuments yet.',
    what: ['Settlement begins on the Afrasiyab mound; layers 8–12 m thick pile up.', 'Four periods of city walls surround it.', 'No Registan, no Gur-e-Amir: those sites do not exist yet.'],
    alive: { afrasiyab: 1, registan: 0, gur: 0, modern: 0 },
    sky: ['#efbf8a', '#f5d9ae', '#f2ead7'], wash: [196, 150, 90, .30], sil: '#a08460', build: 0, road: 0,
    pal: { land: '#d8c196', landcover: '#d2c08e', park: '#c9bd88', res: '#d6bf92', landuse: '#d3bc8f', water: '#a9b9a2', shadow: '#bcc7ab', rfill: '#d9c399', rcase: '#c9ae80', path: '#c4aa7c', top: '#d9c39a', bLo: '#d9c39a', bMid: '#d9c39a', bHi: '#d9c39a', hill: .85 } },
  { year: 1420, label: '15th century', name: 'Timurid capital',
    blurb: 'The centre moves south. Domes and tilework rise.',
    what: ['City life had been shifting south since the 11th–12th c.; 1220 completed it.', 'Gur-e-Amir begins c. 1400 for Muhammad Sultan; Timur is buried there in 1405.', 'Ulugh Beg madrasa on the Registan, 1417–1420 (other source: 1418–1422).'],
    alive: { afrasiyab: .4, registan: 1, gur: 1, modern: 0 },
    sky: ['#8fc9d3', '#cfe6e4', '#f2ead7'], wash: [40, 130, 135, .16], sil: '#6f9a9c', build: .10, road: .45,
    pal: { land: '#ecdcb4', landcover: '#d4dcae', park: '#b2d29c', res: '#e8d5ab', landuse: '#e2d0a6', water: '#8fc2c4', shadow: '#a9d0cf', rfill: '#f3e6c2', rcase: '#cdb582', path: '#c7ae80', top: '#cfe0d8', bLo: '#c6ddd5', bMid: '#9fcac3', bHi: '#6fb0aa', hill: .6 } },
  { year: 1950, label: '20th century', name: 'Soviet era',
    blurb: 'Surroundings are cleared, roads cut, monuments restored.',
    what: ['1950s: surroundings cleared so monuments stand out; Gur-e-Amir dome, gate and minaret repaired.', '1965: a road cuts through Afrasiyab; Sogdian murals found, upper layers bulldozed. [verify]', '1967–87: main Registan restoration; up to 70–80% of tile missing in places.'],
    alive: { afrasiyab: .4, registan: 1, gur: 1, modern: .5 },
    sky: ['#aab6c6', '#d3d8de', '#eee9dc'], wash: [110, 120, 140, .20], sil: '#7d8794', build: .55, road: .9,
    pal: { land: '#d9d6cc', landcover: '#cdd3b8', park: '#b9cfa6', res: '#d4d1c6', landuse: '#cfccc0', water: '#9db7c4', shadow: '#b4c8d0', rfill: '#ffffff', rcase: '#a9a69c', path: '#b9b6ac', top: '#c9c7c0', bLo: '#cfcdc6', bMid: '#a9acb4', bHi: '#7f838d', hill: .5 } },
  { year: 2026, label: '2026', name: 'Today',
    blurb: 'A living city: World Heritage, tourism, new plans.',
    what: ['Listed by UNESCO as “Samarkand – Crossroad of Cultures”.', '2024 mission: almost no on-site explanation of how the Registan evolved.', 'About 7 million visitors last year; over 10 million in nine months this year (UN News).'],
    alive: { afrasiyab: .6, registan: 1, gur: 1, modern: 1 },
    sky: ['#a9cfe6', '#d4e6ee', '#f2ead7'], wash: [255, 255, 255, 0], sil: '#8d9fab', build: 1, road: 1,
    pal: { land: '#efe3c8', landcover: '#d8dcb4', park: '#c7d8a6', res: '#ebdfc2', landuse: '#e4d7b6', water: '#9fc6cc', shadow: '#b7d4d7', rfill: '#fdf7e8', rcase: '#d6c29a', path: '#c9b48e', top: '#d9c8a2', bLo: '#e6d6b0', bMid: '#cfb88c', bHi: '#a98d62', hill: .55 } }
];
