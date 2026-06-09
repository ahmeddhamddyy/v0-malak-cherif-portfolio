import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description:
    "Malak Attared is a content creator working at The British University in Egypt, telling immersive travel stories from Qina, South Sinai, Luxor, Aswan, and Greece.",
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
              alt="Portrait of Malak Attared"
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
            About me
          </h1>

          <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Malak — a content creator working at The British
              University in Egypt. By day I teach; by every free weekend and
              holiday I disappear down a desert road or onto the Nile with a
              camera and a notebook.
            </p>
            <p>
              My storytelling lives where Egypt is at its most beautiful: the
              granite peaks of South Sinai, the date palms of Qina, the ancient
              temples of Luxor, the painted villages of Aswan — and, every now
              and then, the blue-and-white escape of the Greek islands.
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

      {/* Behind the Lens */}
      <div className="mt-20 border-t border-border/60 pt-20 sm:mt-28 sm:pt-28">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">
          Behind the lens
        </p>
        <h2 className="mt-4 text-balance font-display text-3xl leading-tight text-foreground sm:text-4xl">
          How I work
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="rounded-xl border border-border/70 bg-card p-8">
            <h3 className="font-display text-xl text-foreground">
              Camera & Gear
            </h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Placeholder text for camera and gear setup. Malak will fill this in with details about the equipment and tools she uses to capture her travel stories.
            </p>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-8">
            <h3 className="font-display text-xl text-foreground">
              Editing Style
            </h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Placeholder text for editing approach. Malak will describe her editing style, color grading philosophy, and how she maintains visual consistency across journeys.
            </p>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-8">
            <h3 className="font-display text-xl text-foreground">
              What Inspires Her
            </h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Placeholder text for inspiration sources. Malak will share what moves her creatively, the moments that make her reach for the camera, and the stories that matter most.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
