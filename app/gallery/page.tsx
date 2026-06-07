import Link from "next/link"
import Image from "next/image"
import { destinations } from "@/lib/destinations"

export default function GalleryIndexPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">
          Travel journals
        </p>
        <h1 className="mt-4 text-balance font-display text-4xl leading-tight text-foreground sm:text-5xl">
          Every journey has a story
        </h1>
        <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
          Five destinations, each told as a photo journal in my own voice. Pick
          a place and read it the way I lived it — slowly, and in golden light.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {destinations.map((d, i) => (
          <Link
            key={d.slug}
            href={`/gallery/${d.slug}`}
            className="group block overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={d.cover || "/placeholder.svg"}
                alt={`Cover image of ${d.name}`}
                fill
                loading={i < 2 ? "eager" : "lazy"}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="absolute bottom-4 left-5 text-xs uppercase tracking-[0.2em] text-warm-white">
                {d.region}
              </p>
            </div>
            <div className="p-6">
              <h2 className="font-display text-2xl text-foreground">
                {d.name}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{d.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
