import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { destinations } from "@/lib/destinations"

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-12 sm:px-8 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              Egyptian travel storyteller
            </p>
            <h1 className="mt-5 text-balance font-display text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              Layla Hassan
            </h1>
            <p className="mt-5 text-pretty font-display text-2xl text-muted-foreground sm:text-3xl">
              Stories from Sinai to Santorini.
            </p>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              I&apos;m a content creator and lecturer at the British University
              in Egypt, wandering from desert mountains to Aegean shores and
              writing it all down — one golden hour at a time.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Explore journeys
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                About me
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
              <Image
                src="/images/portrait.png"
                alt="Portrait of Layla Hassan in warm golden light"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured destinations strip */}
      <section className="border-t border-border/60 bg-sand/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                Featured
              </p>
              <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">
                Recent journeys
              </h2>
            </div>
            <Link
              href="/gallery"
              className="hidden items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary sm:inline-flex"
            >
              View all
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.slice(0, 3).map((d) => (
              <Link
                key={d.slug}
                href={`/gallery/${d.slug}`}
                className="group block overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={d.cover || "/placeholder.svg"}
                    alt={`Cover image of ${d.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">
                    {d.region}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-foreground">
                    {d.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {d.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
