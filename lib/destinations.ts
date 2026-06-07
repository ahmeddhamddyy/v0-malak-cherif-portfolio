export type Photo = {
  src: string
  alt: string
  caption: string
}

export type Destination = {
  slug: string
  name: string
  region: string
  tagline: string
  intro: string
  cover: string
  photos: Photo[]
}

export const destinations: Destination[] = [
  {
    slug: "sinai",
    name: "Sinai",
    region: "South Sinai, Egypt",
    tagline: "Where the desert meets the dawn",
    intro:
      "I came to Sinai chasing silence, and found something louder than any city — the sound of my own breath against a thousand stars. These mountains have a way of stripping you down to the essential, then handing you the sunrise as a reward.",
    cover: "/images/sinai-cover.png",
    photos: [
      {
        src: "/images/sinai-1.png",
        alt: "Bedouin tea poured beside a fire at dawn in the Sinai desert",
        caption:
          "Our Bedouin guide, Salem, poured tea before the sun was even a rumor on the horizon. I have never tasted anything so warm against the desert cold.",
      },
      {
        src: "/images/sinai-2.png",
        alt: "Hikers ascending a winding mountain trail in Sinai at sunrise",
        caption:
          "The last stretch to the summit felt endless, but then the sky cracked open in pink and gold and I understood why pilgrims have climbed this path for centuries.",
      },
      {
        src: "/images/sinai-cover.png",
        alt: "Jagged Sinai peaks glowing amber at sunrise",
        caption:
          "From the top, the peaks rolled out like waves of stone. I sat on a cold rock, wrapped in a borrowed blanket, and didn't say a word for an hour.",
      },
    ],
  },
  {
    slug: "al-minya",
    name: "Al Minya",
    region: "Upper Egypt",
    tagline: "The bride of Upper Egypt",
    intro:
      "Al Minya rarely makes it onto a postcard, and that is exactly why I love it. Here the Nile moves slowly, the tombs are older than memory, and the people greet you like family who simply hasn't visited in a while.",
    cover: "/images/minya-cover.png",
    photos: [
      {
        src: "/images/minya-1.png",
        alt: "Carved stone reliefs and hieroglyphs at the Beni Hasan tombs",
        caption:
          "At Beni Hasan I traced my fingers an inch above four-thousand-year-old paintings — wrestlers, harvests, daily life. History here isn't behind glass; it breathes.",
      },
      {
        src: "/images/minya-2.png",
        alt: "A farmer walking a dirt path through palm groves at sunset near Al Minya",
        caption:
          "A farmer waved me toward his field at golden hour, insisting I take a date straight from the palm. The sweetest thing I ate the entire trip.",
      },
      {
        src: "/images/minya-cover.png",
        alt: "Sailboats and palm trees on the calm Nile at golden hour near Al Minya",
        caption:
          "Evening on the Nile in Minya is a kind of meditation. The water turns to molten amber and the whole town seems to exhale at once.",
      },
    ],
  },
  {
    slug: "aswan",
    name: "Aswan",
    region: "Nubia, Egypt",
    tagline: "Color, current, and Nubian song",
    intro:
      "Aswan is the most colorful chapter of any Egyptian journey. The Nile is at its widest and bluest here, the islands are painted in ochre and turquoise, and Nubian hospitality turns every stranger into a guest of honor.",
    cover: "/images/aswan-cover.png",
    photos: [
      {
        src: "/images/aswan-1.png",
        alt: "Colorful Nubian village houses painted in ochre and blue in Aswan",
        caption:
          "I got delightfully lost in the Nubian village, every wall a different shade of joy. A grandmother pulled me in for hibiscus tea and showed me her henna.",
      },
      {
        src: "/images/aswan-2.png",
        alt: "Philae temple columns glowing amber at golden hour on an island in Aswan",
        caption:
          "We reached Philae by boat just as the light went honey-gold. The temple seemed to float, half on the island and half on its own reflection.",
      },
      {
        src: "/images/aswan-cover.png",
        alt: "Feluccas sailing on the Nile at Aswan during golden hour",
        caption:
          "Nothing measures time in Aswan like a felucca sail filling with wind. We drifted past granite boulders while the boatman sang an old Nubian song.",
      },
    ],
  },
  {
    slug: "luxor",
    name: "Luxor",
    region: "Theban Necropolis, Egypt",
    tagline: "The world's greatest open-air museum",
    intro:
      "Luxor undid me. To stand among columns built to be seen by gods, and to float above tombs of forgotten kings at sunrise — it is impossible to feel small here without also feeling profoundly alive.",
    cover: "/images/luxor-cover.png",
    photos: [
      {
        src: "/images/luxor-1.png",
        alt: "Hot air balloons floating over the West Bank of Luxor at sunrise",
        caption:
          "We lifted off in the dark and rose into the dawn over the West Bank. From up there the temples and fields looked like a map drawn by someone who loved this place.",
      },
      {
        src: "/images/luxor-2.png",
        alt: "Vivid painted hieroglyphs in a tomb in the Valley of the Kings",
        caption:
          "Inside the Valley of the Kings the colors stopped me cold — pigments mixed three thousand years ago still glowing ochre and gold in the lamplight.",
      },
      {
        src: "/images/luxor-cover.png",
        alt: "Massive sandstone columns of Karnak temple at golden hour in Luxor",
        caption:
          "Walking the great hall at Karnak, I kept tilting my head back until my neck ached. Some things are simply built to humble you.",
      },
    ],
  },
  {
    slug: "greece",
    name: "Greece",
    region: "The Aegean",
    tagline: "From the Nile to the Aegean blue",
    intro:
      "After a lifetime of warm desert tones, Greece felt like stepping into a different palette entirely — whitewashed walls, impossible blues, and a sea that doesn't end. Yet the same golden hour I chase along the Nile found me here too.",
    cover: "/images/greece-cover.png",
    photos: [
      {
        src: "/images/greece-1.png",
        alt: "A whitewashed alley with terracotta pots of pink bougainvillea on a Greek island",
        caption:
          "Every alley was a small invitation. I followed the bougainvillea like breadcrumbs and ended up somewhere I never planned to be — my favorite way to travel.",
      },
      {
        src: "/images/greece-2.png",
        alt: "A Greek taverna table by the sea at golden hour with food and wine",
        caption:
          "A long lunch by the water that turned into a long afternoon. The owner kept bringing small plates 'on the house' until the sun touched the sea.",
      },
      {
        src: "/images/greece-cover.png",
        alt: "Whitewashed buildings and blue domes of Santorini above the Aegean at sunset",
        caption:
          "Santorini at sunset is a cliché for a reason. I put my camera down for the last ten minutes and just watched the light leave — a rare thing for me.",
      },
    ],
  },
]

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug)
}

export function getNextDestination(slug: string): Destination {
  const index = destinations.findIndex((d) => d.slug === slug)
  return destinations[(index + 1) % destinations.length]
}
