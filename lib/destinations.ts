export type Photo = {
  src: string
  alt: string
  caption: string
  date: string // "Month Year" format
}

export type Destination = {
  slug: string
  name: string
  region: string
  tagline: string
  intro: string
  cover: string
  quote: string // Featured quote for the journey
  photos: Photo[]
}

export const destinations: Destination[] = [
  {
    slug: "qina",
    name: "Qina",
    region: "Upper Egypt",
    tagline: "Where the Nile whispers ancient stories",
    intro:
      "Qina is where Egypt shows up without a script. Away from the tourist routes, the Nile moves at its own pace, and the people here invited me not as a visitor but as family. I watched farmers in fields their ancestors worked, tea vendors who remembered my grandmother, and fishermen who sang while they cast nets into water that reflects ten thousand sunsets.",
    cover: "/images/qina-cover.png",
    quote: "Some places don't ask you to leave. They ask you to stay longer.",
    photos: [
      {
        src: "/images/qina-1.png",
        alt: "Farmers working in the fields near Qina at golden hour",
        caption:
          "The fields around Qina are painted in every shade of green and gold. An old farmer stopped his work to shake my hand and insisted I sit with him for tea.",
        date: "March 2024",
      },
      {
        src: "/images/qina-2.png",
        alt: "The Nile at sunset near Qina with traditional boats",
        caption:
          "The Nile at Qina moves slowly, like it has all the time in the world. We drifted between palm groves while the fisherman told stories in a language older than maps.",
        date: "March 2024",
      },
    ],
  },
  {
    slug: "sinai",
    name: "South Sinai",
    region: "South Sinai, Egypt",
    tagline: "Where the desert meets the dawn",
    intro:
      "I came to Sinai chasing silence, and found something louder than any city — the sound of my own breath against a thousand stars. These mountains have a way of stripping you down to the essential, then handing you the sunrise as a reward.",
    cover: "/images/sinai-cover.png",
    quote: "The desert doesn't forgive, but it does reveal.",
    photos: [
      {
        src: "/images/sinai-1.png",
        alt: "Bedouin tea poured beside a fire at dawn in the Sinai desert",
        caption:
          "Our Bedouin guide, Salem, poured tea before the sun was even a rumor on the horizon. I have never tasted anything so warm against the desert cold.",
        date: "February 2024",
      },
      {
        src: "/images/sinai-2.png",
        alt: "Hikers ascending a winding mountain trail in Sinai at sunrise",
        caption:
          "The last stretch to the summit felt endless, but then the sky cracked open in pink and gold and I understood why pilgrims have climbed this path for centuries.",
        date: "February 2024",
      },
    ],
  },
  {
    slug: "luxor",
    name: "Luxor",
    region: "Theban Necropolis, Upper Egypt",
    tagline: "The world's greatest open-air museum",
    intro:
      "Luxor undid me. To stand among columns built to be seen by gods, and to float above tombs of forgotten kings at sunrise — it is impossible to feel small here without also feeling profoundly alive.",
    cover: "/images/luxor-cover.png",
    quote: "Some temples are built in stone. Some are built in the memory of light.",
    photos: [
      {
        src: "/images/luxor-1.png",
        alt: "Hot air balloons floating over the West Bank of Luxor at sunrise",
        caption:
          "We lifted off in the dark and rose into the dawn over the West Bank. From up there the temples and fields looked like a map drawn by someone who loved this place.",
        date: "April 2024",
      },
      {
        src: "/images/luxor-2.png",
        alt: "Vivid painted hieroglyphs in a tomb in the Valley of the Kings",
        caption:
          "Inside the Valley of the Kings the colors stopped me cold — pigments mixed three thousand years ago still glowing ochre and gold in the lamplight.",
        date: "April 2024",
      },
    ],
  },
  {
    slug: "aswan",
    name: "Aswan",
    region: "Nubia, Upper Egypt",
    tagline: "Color, current, and Nubian song",
    intro:
      "Aswan is the most colorful chapter of any Egyptian journey. The Nile is at its widest and bluest here, the islands are painted in ochre and turquoise, and Nubian hospitality turns every stranger into a guest of honor.",
    cover: "/images/aswan-cover.png",
    quote: "The Nile at Aswan doesn't flow — it celebrates.",
    photos: [
      {
        src: "/images/aswan-1.png",
        alt: "Colorful Nubian village houses painted in ochre and blue in Aswan",
        caption:
          "I got delightfully lost in the Nubian village, every wall a different shade of joy. A grandmother pulled me in for hibiscus tea and showed me her henna.",
        date: "May 2024",
      },
      {
        src: "/images/aswan-2.png",
        alt: "Philae temple columns glowing amber at golden hour on an island in Aswan",
        caption:
          "We reached Philae by boat just as the light went honey-gold. The temple seemed to float, half on the island and half on its own reflection.",
        date: "May 2024",
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
    quote: "Every blue you can imagine exists somewhere in the Aegean.",
    photos: [
      {
        src: "/images/greece-1.png",
        alt: "A whitewashed alley with terracotta pots of pink bougainvillea on a Greek island",
        caption:
          "Every alley was a small invitation. I followed the bougainvillea like breadcrumbs and ended up somewhere I never planned to be — my favorite way to travel.",
        date: "June 2024",
      },
      {
        src: "/images/greece-2.png",
        alt: "A Greek taverna table by the sea at golden hour with food and wine",
        caption:
          "A long lunch by the water that turned into a long afternoon. The owner kept bringing small plates 'on the house' until the sun touched the sea.",
        date: "June 2024",
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
