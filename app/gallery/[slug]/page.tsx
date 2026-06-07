import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, ArrowRight } from "lucide-react"
import {
  destinations,
  getDestination,
  getNextDestination,
} from "@/lib/destinations"
import { JourneyGallery } from "@/components/journey-gallery"

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const destination = getDestination(slug)
  if (!destination) return { title: "Journey not found" }

  return {
    title: `${destination.name} — ${destination.tagline}`,
    description: destination.intro,
    openGraph: {
      title: `${destination.name} — Layla Hassan`,
      description: destination.intro,
      images: [{ url: destination.cover }],
    },
  }
}

export default async function JourneyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const destination = getDestination(slug)
  if (!destination) notFound()

  const next = getNextDestination(slug)

  return (
    <article>
      {/* Hero */}
      <header className="relative flex min-h-[480px] items-end" style={{ height: "80vh" }}>
        <Image
          src={destination.cover || "/placeholder.svg"}
          alt={`${destination.name} cover`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/30" />

        <div className="relative mx-auto w-full max-w-4xl px-5 pb-12 sm:px-8 sm:pb-16">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-sm text-warm-white/80 transition-colors hover:text-warm-white"
          >
            <ArrowLeft className="size-4" />
            All journeys
          </Link>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-warm-white/80">
            {destination.region}
          </p>
          <h1 className="mt-3 text-balance font-display text-5xl leading-[1.05] text-warm-white sm:text-6xl lg:text-7xl">
            {destination.name}
          </h1>
          <p className="mt-4 font-display text-xl text-warm-white/90 sm:text-2xl">
            {destination.tagline}
          </p>
        </div>
      </header>

      {/* Intro */}
      <section className="mx-auto max-w-2xl px-5 py-16 text-center sm:px-8 sm:py-20">
        <p className="text-pretty font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
          {destination.intro}
        </p>
      </section>

      {/* Story scroll */}
      <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-8 sm:pb-28">
        <JourneyGallery photos={destination.photos} />
      </section>

      {/* Next destination teaser */}
      <Link
        href={`/gallery/${next.slug}`}
        className="group relative block h-[60vh] min-h-[360px] overflow-hidden"
      >
        <Image
          src={next.cover || "/placeholder.svg"}
          alt={`Next journey: ${next.name}`}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/45 transition-colors group-hover:bg-black/35" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-warm-white/80">
            Next journey
          </p>
          <h2 className="mt-3 font-display text-4xl text-warm-white sm:text-6xl">
            {next.name}
          </h2>
          <span className="mt-5 inline-flex items-center gap-2 text-sm text-warm-white/90">
            Continue reading
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  )
}
