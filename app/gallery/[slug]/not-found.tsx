import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function JourneyNotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-5 py-28 text-center sm:px-8">
      <p className="text-xs uppercase tracking-[0.25em] text-primary">
        Lost the trail
      </p>
      <h1 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">
        This journey doesn&apos;t exist
      </h1>
      <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
        The destination you&apos;re looking for isn&apos;t in my journals yet.
        Let&apos;s get you back to somewhere beautiful.
      </p>
      <Link
        href="/gallery"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        <ArrowLeft className="size-4" />
        Back to all journeys
      </Link>
    </section>
  )
}
