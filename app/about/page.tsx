import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description:
    "Layla Hassan is an Egyptian content creator and lecturer at the British University in Egypt, telling immersive travel stories from Sinai, Al Minya, Aswan, Luxor, and Greece.",
}

const values = [
  {
    title: "Slow travel",
    body: "I'd rather know one alley deeply than a whole city in passing. The best stories live in the lingering.",
  },
  {
    title: "Honest storytelling",
    body: "No filters on the truth. I write travel the way it actually feels — golden, messy, and human.",
  },
  {
    title: "Local first",
    body: "Every journey is shaped by the people who let me in: guides, grandmothers, farmers, and friends.",
  },
]

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
            <Image
              src="/images/portrait.png"
              alt="Portrait of Layla Hassan"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            About me
          </p>
          <h1 className="mt-4 text-balance font-display text-4xl leading-tight text-foreground sm:text-5xl">
            A storyteller with sand in her shoes
          </h1>

          <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Layla — an Egyptian content creator and a lecturer at the
              British University in Egypt. By day I teach; by every free weekend
              and holiday I disappear down a desert road or onto a felucca with
              a camera and a notebook.
            </p>
            <p>
              My storytelling lives where Egypt is at its most beautiful and
              most overlooked: the granite stillness of Sinai, the ancient tombs
              of Al Minya, the painted villages of Aswan, the towering temples
              of Luxor — and, every now and then, the blue-and-white escape of
              the Greek islands.
            </p>
            <p>
              I believe travel writing should feel like a letter from a friend,
              not a brochure. So I write in first person, I keep the awkward
              moments in, and I always credit the people who made the journey
              worth telling.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-border/70 bg-card p-5"
              >
                <h2 className="font-display text-lg text-foreground">
                  {v.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Read my journals
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
