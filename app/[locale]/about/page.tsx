import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export const metadata: Metadata = {
  title: "About",
  description:
    "Malak Attared is a content creator working at The British University in Egypt, telling immersive travel stories from Qina, South Sinai, Luxor, Aswan, and Greece.",
}

export default function AboutPage() {
  const t = useTranslations("about")

  const values = [
    { title: t("value1Title"), body: t("value1Body") },
    { title: t("value2Title"), body: t("value2Body") },
    { title: t("value3Title"), body: t("value3Body") },
  ]

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
            <Image
              src="/images/portrait.png"
              alt={t("portraitAlt")}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            {t("label")}
          </p>
          <h1 className="mt-4 text-balance font-display text-4xl leading-tight text-foreground sm:text-5xl">
            {t("heading")}
          </h1>

          <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>{t("bio1")}</p>
            <p>{t("bio2")}</p>
            <p>{t("bio3")}</p>
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
              {t("readJournals")}
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {t("getInTouch")}
            </Link>
          </div>
        </div>
      </div>

      {/* Behind the Lens */}
      <div className="mt-20 border-t border-border/60 pt-20 sm:mt-28 sm:pt-28">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">
          {t("behindLabel")}
        </p>
        <h2 className="mt-4 text-balance font-display text-3xl leading-tight text-foreground sm:text-4xl">
          {t("behindHeading")}
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="rounded-xl border border-border/70 bg-card p-8">
            <h3 className="font-display text-xl text-foreground">
              {t("gearTitle")}
            </h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t("gearBody")}
            </p>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-8">
            <h3 className="font-display text-xl text-foreground">
              {t("editingTitle")}
            </h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t("editingBody")}
            </p>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-8">
            <h3 className="font-display text-xl text-foreground">
              {t("inspirationTitle")}
            </h3>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t("inspirationBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
