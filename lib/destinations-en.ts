export type Photo = {
  src: string
  alt: string
  caption: string
  shortCaption?: string
  location?: string
  date: string // "Month Year" format
}

export type Destination = {
  slug: string
  name: string
  nameAr?: string
  region: string
  tagline: string
  intro: string
  cover: string
  quote: string // Featured quote for the journey
  photos: Photo[]
}

export const destinations: Destination[] = [
  {
    slug: "sahat-abd-el-basit",
    name: "Sahat Abd El Basit",
    nameAr: "ساحة عبدالباسط شريف",
    region: "Qina, Upper Egypt",
    tagline: "Echoes of ancient prayers in stone",
    intro: "Standing at the heart of Qina, the Sahat Abd El Basit shrine whispers centuries of devotion. The courtyard hums with the rhythm of daily life, where prayers blend with the rustle of palm leaves.",
    cover: "/images/sahat-abd-el-basit/1.jpg",
    quote: "Every stone holds a story of faith.",
    photos: [
      {
        src: "/images/sahat-abd-el-basit/1.jpg",
        alt: "Sunlight filtering through arches at Sahat Abd El Basit",
        caption: "Morning light pours through the ancient arches, casting golden patterns on the marble floor of the shrine.",
        shortCaption: "Golden light through arches",
        location: "Qina, Upper Egypt",
        date: "February 2025"
      },
      {
        src: "/images/sahat-abd-el-basit/2.jpg",
        alt: "Prayer beads resting on a woven mat",
        caption: "A close‑up of handcrafted prayer beads, their glass beads catching the soft glow of lanterns.",
        shortCaption: "Handcrafted prayer beads",
        location: "Qina, Upper Egypt",
        date: "February 2025"
      },
      {
        src: "/images/sahat-abd-el-basit/3.jpg",
        alt: "Elderly man reading Qur'an under a date palm",
        caption: "An elder recites verses beneath the shade of a date palm, the words echoing through the courtyard.",
        shortCaption: "Elder reciting verses",
        location: "Qina, Upper Egypt",
        date: "February 2025"
      },
      {
        src: "/images/sahat-abd-el-basit/4.jpg",
        alt: "Children playing tag among stone columns",
        caption: "Children dart between the columns, their laughter weaving into the ancient walls.",
        shortCaption: "Children among columns",
        location: "Qina, Upper Egypt",
        date: "February 2025"
      }
    ]
  },
  {
    slug: "almarmah",
    name: "AlMarmah",
    nameAr: "المرماح",
    region: "Qina, Upper Egypt",
    tagline: "The woven market of colors and aromas",
    intro: "AlMarmah bursts with life, a tapestry of spices, textiles, and the hum of barter. Each stall tells a tale of generations trading under the Egyptian sun.",
    cover: "/images/almarmah/1.jpg",
    quote: "If you listen, the market sings.",
    photos: [
      {
        src: "/images/almarmah/1.jpg",
        alt: "Top view of the AlMarmah village",
        caption: "From above, the village reveals its winding lanes and sun‑washed rooftops.",
        shortCaption: "Village top view",
        location: "Qina, Upper Egypt",
        date: "February 2025"
      },
      {
        src: "/images/almarmah/2.jpg",
        alt: "Vibrant spice piles in market stalls",
        caption: "Piles of cumin, coriander, and saffron create a rainbow of aromas that drift through the alley.",
        shortCaption: "Rainbow of spices",
        location: "Qina, Upper Egypt",
        date: "February 2025"
      },
      {
        src: "/images/almarmah/3.jpg",
        alt: "Weaver threading a colorful tapestry",
        caption: "A weaver's hands move deftly, stitching bright threads into a traditional Egyptian tapestry.",
        shortCaption: "Weaver at work",
        location: "Qina, Upper Egypt",
        date: "February 2025"
      },
      {
        src: "/images/almarmah/4.jpg",
        alt: "Fresh figs displayed on a wooden crate",
        caption: "Sun‑kissed figs glisten, their sweet scent tempting passers‑by.",
        shortCaption: "Sun‑kissed figs",
        location: "Qina, Upper Egypt",
        date: "February 2025"
      },
      {
        src: "/images/almarmah/5.jpg",
        alt: "Old man polishing copper lanterns",
        caption: "An artisan polishes copper lanterns until they glow like miniature suns.",
        shortCaption: "Polished copper lanterns",
        location: "Qina, Upper Egypt",
        date: "February 2025"
      },
      {
        src: "/images/almarmah/6.jpg",
        alt: "Children chasing a rolling watermelon",
        caption: "A stray watermelon rolls down the alley, prompting a joyous chase.",
        shortCaption: "Watermelon chase",
        location: "Qina, Upper Egypt",
        date: "February 2025"
      },
      {
        src: "/images/almarmah/7.jpg",
        alt: "Evening lanterns lighting the market",
        caption: "As dusk falls, lanterns flicker to life, bathing the market in amber warmth.",
        shortCaption: "Dusk lanterns glow",
        location: "Qina, Upper Egypt",
        date: "February 2025"
      },
      {
        src: "/images/almarmah/8.jpg",
        alt: "Narrow alley bathed in afternoon light",
        caption: "Afternoon light slices through the alley, painting the walls in warm tones.",
        shortCaption: "Afternoon alley light",
        location: "Qina, Upper Egypt",
        date: "February 2025"
      }
    ]
  },
  {
    slug: "laganos",
    name: "Laganos",
    region: "Switzerland",
    tagline: "Alpine serenity meets crystal lakes",
    intro: "Nestled among soaring peaks, Laganos offers tranquil trails and glass‑like waters that mirror the sky. Each sunrise paints the valley in pastel tones.",
    cover: "/images/laganos/1.jpg",
    quote: "The mountains breathe, and I listen.",
    photos: [
      {
        src: "/images/laganos/1.jpg",
        alt: "Morning mist over an alpine lake",
        caption: "Mist drifts lazily over the lake, softening the reflections of the surrounding peaks.",
        shortCaption: "Mist over lake",
        location: "Switzerland",
        date: "March 2026"
      },
      {
        src: "/images/laganos/2.jpg",
        alt: "Hiker crossing a wooden bridge",
        caption: "A solitary hiker pauses on a rustic bridge, inhaling the crisp mountain air.",
        shortCaption: "Hiker on bridge",
        location: "Switzerland",
        date: "March 2026"
      },
      {
        src: "/images/laganos/3.jpg",
        alt: "Wildflowers blanket a meadow",
        caption: "A carpet of wildflowers sways, painting the meadow in bursts of violet and gold.",
        shortCaption: "Blooming meadow",
        location: "Switzerland",
        date: "March 2026"
      },
      {
        src: "/images/laganos/4.jpg",
        alt: "Sunset behind snow‑capped peaks",
        caption: "The sun sinks behind pristine peaks, casting a golden halo across the valley.",
        shortCaption: "Sunset over peaks",
        location: "Switzerland",
        date: "March 2026"
      }
    ]
  },
  {
    slug: "athens",
    name: "Athens",
    region: "Greece",
    tagline: "History breathes in every stone",
    intro: "Athens cradles millennia of myths, from marble columns to bustling cafés. The city pulses with the echo of philosophers and the rhythm of modern life.",
    cover: "/images/athens/1.jpg",
    quote: "Walk where philosophers once walked.",
    photos: [
      {
        src: "/images/athens/1.jpg",
        alt: "Acropolis illuminated at night",
        caption: "The Acropolis glows against the night sky, its silhouettes a reminder of ancient grandeur.",
        shortCaption: "Acropolis at night",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/2.jpg",
        alt: "Street café with coffee cups",
        caption: "Patrons sip strong coffee while the city hums around them, a seamless blend of old and new.",
        shortCaption: "Café culture",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/3.jpg",
        alt: "Sunset over the Parthenon",
        caption: "Golden light washes over the Parthenon, turning stone to fire.",
        shortCaption: "Golden Parthenon",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/4.jpg",
        alt: "Colorful doors in Plaka neighborhood",
        caption: "Vivid doors line the cobblestones of Plaka, each a portal to stories.",
        shortCaption: "Vivid doors",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/5.jpg",
        alt: "Street musician playing bouzouki",
        caption: "A musician strings a bouzouki, filling the air with timeless melody.",
        shortCaption: "Bouzouki melody",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/6.jpg",
        alt: "Olive trees swaying in a gentle breeze",
        caption: "Rows of ancient olive trees whisper stories of centuries.",
        shortCaption: "Ancient olive trees",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/7.jpg",
        alt: "Night market with lanterns",
        caption: "Lanterns flicker as locals bargain over fresh produce and spices.",
        shortCaption: "Night market lights",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/8.jpg",
        alt: "Aegean Sea horizon at sunrise",
        caption: "The sun climbs over the Aegean, painting the water in rose tones.",
        shortCaption: "Sunrise over Aegean",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/9.jpg",
        alt: "Statue of Athena in the National Garden",
        caption: "A marble Athena watches over the green oasis of the National Garden.",
        shortCaption: "Athena in garden",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/10.jpg",
        alt: "Cyclist on a hilltop road",
        caption: "A cyclist rides along a winding road, city below and sea beyond.",
        shortCaption: "Hilltop cyclist",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/11.jpg",
        alt: "Rainy street reflections of ancient columns",
        caption: "Rain slicks the stones, reflecting the timeless architecture.",
        shortCaption: "Rainy reflections",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/12.jpg",
        alt: "Couple enjoying souvlaki at a street stall",
        caption: "Souvlaki sizzles as a couple shares laughter under the evening glow.",
        shortCaption: "Souvlaki evening",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/13.jpg",
        alt: "View of Mount Lycabettus from the city",
        caption: "Mount Lycabettus towers, a sentinel over the mosaic of rooftops.",
        shortCaption: "Lycabettus view",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/14.jpg",
        alt: "Traditional Greek bakery with fresh bread",
        caption: "Rows of golden loaves line the shelves, warm scent filling the air.",
        shortCaption: "Golden loaves",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/15.jpg",
        alt: "Sunlight through the columns of the Temple of Hephaestus",
        caption: "Sunbeams filter through marble, casting a sacred glow.",
        shortCaption: "Temple sunlight",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/16.jpg",
        alt: "Evening cruise on the harbor",
        caption: "A boat dances on the harbor as city lights shimmer on the water.",
        shortCaption: "Harbor cruise",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/17.jpg",
        alt: "Children playing soccer in a park",
        caption: "Laughter erupts as kids chase a worn leather ball across green grass.",
        shortCaption: "Park soccer",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/18.jpg",
        alt: "A frescoed ceiling in a historic building",
        caption: "Intricate frescoes tell tales of myth and history overhead.",
        shortCaption: "Frescoed ceiling",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/19.jpg",
        alt: "Sunset over the city from a rooftop bar",
        caption: "Cocktails clink as the sun sets, painting the skyline in amber.",
        shortCaption: "Rooftop sunset",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/20.jpg",
        alt: "Statue of a philosopher in a garden",
        caption: "A bronze philosopher gazes contemplatively, inviting reflection.",
        shortCaption: "Philosopher statue",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/21.jpg",
        alt: "Market stalls with bright textiles",
        caption: "Vivid fabrics flutter, each pattern a story of local artisanship.",
        shortCaption: "Vivid textiles",
        location: "Greece",
        date: "December 2025"
      },
      {
        src: "/images/athens/22.jpg",
        alt: "Warm evening on a cobbled Athenian street",
        caption: "The cobblestones glow under string lights as the city settles into evening.",
        shortCaption: "Evening cobblestones",
        location: "Greece",
        date: "December 2025"
      }
    ]
  },
  {
    slug: "abu-amer",
    name: "Abu Amer",
    region: "South Sinai, Egypt",
    tagline: "Desert oasis of hidden springs",
    intro: "Abu Amer is a remote oasis where turquoise water pools against a stark desert backdrop. The silence here is broken only by wind and the occasional call of a desert bird.",
    cover: "/images/abu-amer/1.jpg",
    quote: "In the desert, water is a miracle.",
    photos: [
      {
        src: "/images/abu-amer/1.jpg",
        alt: "Crystal clear spring water surrounded by palm trees",
        caption: "A spring bubbles, its surface shimmering like a mirror under the desert sun.",
        shortCaption: "Mirrored spring",
        location: "South Sinai, Egypt",
        date: "January 2025"
      },
      {
        src: "/images/abu-amer/2.jpg",
        alt: "Bedouin camp beside the oasis at dusk",
        caption: "Canvas tents glow amber as the day fades, offering shelter in solitude.",
        shortCaption: "Bedouin dusk camp",
        location: "South Sinai, Egypt",
        date: "January 2025"
      },
      {
        src: "/images/abu-amer/3.jpg",
        alt: "Camel caravan crossing nearby dunes",
        caption: "A lone camel walks, its silhouette stark against rolling dunes.",
        shortCaption: "Silhouette camel",
        location: "South Sinai, Egypt",
        date: "January 2025"
      },
      {
        src: "/images/abu-amer/4.jpg",
        alt: "Starry sky over the oasis",
        caption: "The night sky spills countless stars, reflected in the calm water.",
        shortCaption: "Star‑filled reflection",
        location: "South Sinai, Egypt",
        date: "January 2025"
      },
      {
        src: "/images/abu-amer/5.jpg",
        alt: "Wild figs growing near the water",
        caption: "Fig trees bear fruit, their sweet scent mixing with desert air.",
        shortCaption: "Fig trees bloom",
        location: "South Sinai, Egypt",
        date: "January 2025"
      },
      {
        src: "/images/abu-amer/6.jpg",
        alt: "Sunrise painting the dunes gold",
        caption: "First light brushes the dunes, turning sand to liquid gold.",
        shortCaption: "Golden sunrise dunes",
        location: "South Sinai, Egypt",
        date: "January 2025"
      }
    ]
  },
  {
    slug: "sarabit-al-khadim",
    name: "Sarabit Al-Khadim",
    nameAr: "سرابيط الخادم",
    region: "South Sinai, Egypt",
    tagline: "Whispers of ancient caravans",
    intro: "Sarabit Al‑Khadim rests on routes once traveled by merchants and pilgrims. Its stone walls hold echoes of distant conversations.",
    cover: "/images/sarabit-al-khadim/1.jpg",
    quote: "Every stone remembers a footstep.",
    photos: [
      {
        src: "/images/sarabit-al-khadim/1.jpg",
        alt: "Ancient stone archway at sunrise",
        caption: "The archway catches the sunrise, shadows dancing across its surface.",
        shortCaption: "Sunrise archway",
        location: "South Sinai, Egypt",
        date: "January 2025"
      },
      {
        src: "/images/sarabit-al-khadim/2.jpg",
        alt: "Caravan of camels near the settlement",
        caption: "Camels trail the old path, their silhouettes forming a line against the horizon.",
        shortCaption: "Camel caravan",
        location: "South Sinai, Egypt",
        date: "January 2025"
      },
      {
        src: "/images/sarabit-al-khadim/3.jpg",
        alt: "Market stall with woven baskets",
        caption: "Hand‑made baskets line a stall, each pattern a testament to craft.",
        shortCaption: "Woven baskets",
        location: "South Sinai, Egypt",
        date: "January 2025"
      },
      {
        src: "/images/sarabit-al-khadim/4.jpg",
        alt: "Elder storyteller under a palm tree",
        caption: "An elder gathers children, weaving tales of desert spirits.",
        shortCaption: "Storyteller under palm",
        location: "South Sinai, Egypt",
        date: "January 2025"
      },
      {
        src: "/images/sarabit-al-khadim/5.jpg",
        alt: "Night lanterns illuminating a courtyard",
        caption: "Lanterns flicker, casting warm circles on cool stone.",
        shortCaption: "Lantern‑lit courtyard",
        location: "South Sinai, Egypt",
        date: "January 2025"
      },
      {
        src: "/images/sarabit-al-khadim/6.jpg",
        alt: "Desert roses blooming among rocks",
        caption: "Wild roses peek through cracks, defiantly colored against sand.",
        shortCaption: "Desert roses",
        location: "South Sinai, Egypt",
        date: "January 2025"
      },
      {
        src: "/images/sarabit-al-khadim/7.jpg",
        alt: "Morning prayer at a small shrine",
        caption: "Faithful gather, their voices rising with the dawn.",
        shortCaption: "Morning prayer",
        location: "South Sinai, Egypt",
        date: "January 2025"
      }
    ]
  },
  {
    slug: "zlaga-valley",
    name: "Zlaga Valley Race",
    nameAr: "سباق الزلقة",
    region: "South Sinai, Egypt",
    tagline: "Desert sprint through rugged canyons",
    intro: "The Zlaga Valley Race carves a path through narrow canyons and sun‑baked cliffs, testing endurance and spirit.",
    cover: "/images/zlaga-valley/1.jpg",
    quote: "Run where the earth trembles.",
    photos: [
      {
        src: "/images/zlaga-valley/1.jpg",
        alt: "Dust clouds rising from a runner's footsteps",
        caption: "Footprints leave trails of dust as the race blazes forward.",
        shortCaption: "Dusty footprints",
        location: "South Sinai, Egypt",
        date: "January 2025"
      },
      {
        src: "/images/zlaga-valley/2.jpg",
        alt: "Sun beating down on winding canyon walls",
        caption: "The canyon walls glow, each layer a different shade of amber.",
        shortCaption: "Canyon walls glow",
        location: "South Sinai, Egypt",
        date: "January 2025"
      },
      {
        src: "/images/zlaga-valley/3.jpg",
        alt: "Runner reaching a steep climb",
        caption: "Muscles strain as a runner tackles the abrupt ascent.",
        shortCaption: "Steep ascent",
        location: "South Sinai, Egypt",
        date: "January 2025"
      },
      {
        src: "/images/zlaga-valley/4.jpg",
        alt: "View over the valley from a ridge",
        caption: "From the ridge, the valley unfolds like a golden tapestry.",
        shortCaption: "Valley panorama",
        location: "South Sinai, Egypt",
        date: "January 2025"
      },
      {
        src: "/images/zlaga-valley/5.jpg",
        alt: "Night camp with lanterns after the race",
        caption: "Exhausted runners gather around lanterns, sharing stories under stars.",
        shortCaption: "Lantern night camp",
        location: "South Sinai, Egypt",
        date: "January 2025"
      },
      {
        src: "/images/zlaga-valley/6.jpg",
        alt: "Finish line banner fluttering in the wind",
        caption: "The banner snaps, marking the triumph of the finish.",
        shortCaption: "Finish banner",
        location: "South Sinai, Egypt",
        date: "January 2025"
      }
    ]
  },
  {
    slug: "dandra",
    name: "Dandra",
    nameAr: "دندرة",
    region: "Qina, Upper Egypt",
    tagline: "Rolling hills and whispering wheat",
    intro: "Dandra's landscape is a sea of wheat, rolling gently under a sky that seems endless. The wind carries the scent of earth after rain.",
    cover: "/images/dandra/1.jpg",
    quote: "The fields sing when the wind passes.",
    photos: [
      {
        src: "/images/dandra/1.jpg",
        alt: "Golden wheat fields swaying at sunset",
        caption: "Wheat stalks catch the last light, turning the horizon amber.",
        shortCaption: "Golden wheat at sunset",
        location: "Qina, Upper Egypt",
        date: "February 2025"
      },
      {
        src: "/images/dandra/2.jpg",
        alt: "Old stone windmill against a blue sky",
        caption: "A weathered windmill stands, its sails turning lazily.",
        shortCaption: "Weathered windmill",
        location: "Qina, Upper Egypt",
        date: "February 2025"
      },
      {
        src: "/images/dandra/3.jpg",
        alt: "Children playing hide‑and‑seek among the stalks",
        caption: "Laughter rings as children dart between towering wheat.",
        shortCaption: "Children in wheat",
        location: "Qina, Upper Egypt",
        date: "February 2025"
      },
      {
        src: "/images/dandra/4.jpg",
        alt: "Evening fire pit with families gathering",
        caption: "Families gather around a fire, sharing tea as night falls.",
        shortCaption: "Evening fire pit",
        location: "Qina, Upper Egypt",
        date: "February 2025"
      }
    ]
  },
  {
    slug: "italy-7",
    name: "Italy 7",
    region: "Italy",
    tagline: "Renaissance streets and rolling vineyards",
    intro: "Italy 7 captures the soul of Italy, from cobbled lanes echoing with history to vineyards spilling over gentle hills.",
    cover: "/images/italy-7/1.jpeg",
    quote: "Every stone tells a story.",
    photos: [
      {
        src: "/images/italy-7/1.jpeg",
        alt: "Sunlit vineyard rows in Tuscany",
        caption: "Rows of vines stretch under a golden sun, grapes heavy with promise.",
        shortCaption: "Sunlit Tuscan vines",
        location: "Italy",
        date: "March 2026"
      },
      {
        src: "/images/italy-7/2.jpeg",
        alt: "Old stone bridge over a quiet canal",
        caption: "A stone bridge arches over water, reflections of pastel buildings.",
        shortCaption: "Stone bridge over canal",
        location: "Italy",
        date: "March 2026"
      },
      {
        src: "/images/italy-7/3.jpeg",
        alt: "Market stall with fresh mozzarella and tomatoes",
        caption: "Bright mozzarella shines beside ripe tomatoes, a feast for the eyes.",
        shortCaption: "Mozzarella and tomatoes",
        location: "Italy",
        date: "March 2026"
      },
      {
        src: "/images/italy-7/4.jpeg",
        alt: "Cat lounging on a sun‑warmed stone wall",
        caption: "A cat stretches lazily, soaking in the afternoon sun.",
        shortCaption: "Cat on stone wall",
        location: "Italy",
        date: "March 2026"
      },
      {
        src: "/images/italy-7/5.jpeg",
        alt: "Cobbled street lined with flowering balconies",
        caption: "Balconies burst with bougainvillea, painting the alley in pink.",
        shortCaption: "Bougainvillea balconies",
        location: "Italy",
        date: "March 2026"
      },
      {
        src: "/images/italy-7/6.jpeg",
        alt: "Evening lights on a piazza with fountains",
        caption: "The piazza glows as fountains dance under lanterns.",
        shortCaption: "Piazza fountains at night",
        location: "Italy",
        date: "March 2026"
      },
      {
        src: "/images/italy-7/7.jpeg",
        alt: "Chef plating fresh pasta in a kitchen",
        caption: "A chef twirls strands of pasta, steam rising in the kitchen.",
        shortCaption: "Chef with pasta",
        location: "Italy",
        date: "March 2026"
      },
      {
        src: "/images/italy-7/8.jpeg",
        alt: "Traveler sipping espresso at a sidewalk café",
        caption: "Espresso froths, a traveler watches the bustle of the street.",
        shortCaption: "Espresso at café",
        location: "Italy",
        date: "March 2026"
      },
      {
        src: "/images/italy-7/9.jpeg",
        alt: "Historic cathedral interior with stained glass",
        caption: "Stained glass filters light, painting the stone floor in colors.",
        shortCaption: "Stained glass interior",
        location: "Italy",
        date: "March 2026"
      },
      {
        src: "/images/italy-7/10.jpeg",
        alt: "Vineyard harvest workers picking grapes",
        caption: "Hands reach out, gathering ripe grapes from vine clusters.",
        shortCaption: "Harvesting grapes",
        location: "Italy",
        date: "March 2026"
      },
      {
        src: "/images/italy-7/11.jpeg",
        alt: "Sunset over rolling hills dotted with olive trees",
        caption: "Olive trees silhouette against a fading orange sky.",
        shortCaption: "Olive tree sunset",
        location: "Italy",
        date: "March 2026"
      },
      {
        src: "/images/italy-7/12.jpeg",
        alt: "Artist painting frescoes on a church wall",
        caption: "Colors swirl as an artist restores ancient frescoes.",
        shortCaption: "Restoring frescoes",
        location: "Italy",
        date: "March 2026"
      },
      {
        src: "/images/italy-7/13.jpeg",
        alt: "Couple dancing the tarantella in a village square",
        caption: "Feet shuffle, smiles bright, tradition alive in steps.",
        shortCaption: "Tarantella dance",
        location: "Italy",
        date: "March 2026"
      },
      {
        src: "/images/italy-7/14.jpeg",
        alt: "Old bookshop with stacked leather volumes",
        caption: "Weathered books line shelves, each a portal to another era.",
        shortCaption: "Leather‑bound books",
        location: "Italy",
        date: "March 2026"
      },
      {
        src: "/images/italy-7/15.jpeg",
        alt: "Children flying kites over a meadow",
        caption: "Kites soar, bright against a clear sky, laughter trailing.",
        shortCaption: "Kites in meadow",
        location: "Italy",
        date: "March 2026"
      },
      {
        src: "/images/italy-7/16.jpeg",
        alt: "Sunlit alley with ivy‑covered walls",
        caption: "Ivy climbs, its green tendrils framing stone arches.",
        shortCaption: "Ivy‑covered alley",
        location: "Italy",
        date: "March 2026"
      },
      {
        src: "/images/italy-7/17.jpeg",
        alt: "Evening lanterns lighting a stone courtyard",
        caption: "Lanterns cast a warm glow, shadows dancing as night falls.",
        shortCaption: "Evening lanterns",
        location: "Italy",
        date: "March 2026"
      }
    ]
  },
]

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug)
}

export function getNextDestination(slug: string): Destination {
  const index = destinations.findIndex((d) => d.slug === slug)
  return destinations[(index + 1) % destinations.length]
}
