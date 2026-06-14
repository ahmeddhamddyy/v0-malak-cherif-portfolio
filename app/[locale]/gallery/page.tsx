import Link from "next/link"
import Image from "next/image"
import { useTranslations, useLocale } from "next-intl"
import { getDestinations } from "@/lib/destinations"

export default function GalleryIndexPage() {
  const t = useTranslations("gallery")
  const locale = useLocale()
  const localizedDestinations = getDestinations(locale)
  const isAr = locale === "ar"

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">
          {t("label")}
        </p>
        <h1 className="mt-4 text-balance font-display text-4xl leading-tight text-foreground sm:text-5xl">
          {t("heading")}
        </h1>
        <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
          {t("description", { count: localizedDestinations.length })}
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {localizedDestinations.map((d, i) => (
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
              {d.nameAr && !isAr ? (
                <>
                  <h2 
                    className="font-display text-2xl text-foreground"
                    lang="ar"
                    dir="rtl"
                    style={{ fontFamily: 'var(--font-arabic), serif' }}
                  >
                    {d.nameAr}
                  </h2>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {d.name}
                  </p>
                </>
              ) : (
                <h2 
                  className="font-display text-2xl text-foreground"
                  style={isAr ? { fontFamily: 'var(--font-arabic), serif' } : {}}
                >
                  {d.name}
                </h2>
              )}
              <p className="mt-1 text-sm text-muted-foreground">{d.tagline}</p>
              <p className="mt-3 text-xs text-primary font-mono">
                {t("photos", { count: d.photos.length })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
