"use client"

import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { Link, usePathname, useRouter } from "@/i18n/routing"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", labelKey: "home" },
  { href: "/about", labelKey: "about" },
  { href: "/gallery", labelKey: "travel" },
  { href: "/contact", labelKey: "contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const locale = useLocale()
  const t = useTranslations("nav")
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "ar" : "en"
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-foreground sm:text-2xl"
          dir={locale === "ar" ? "rtl" : undefined}
          lang={locale === "ar" ? "ar" : undefined}
        >
          {locale === "ar" ? "ملك عطارد" : "Malak Attared"}
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href as any}
                className={cn(
                  "text-sm tracking-wide transition-colors hover:text-primary",
                  isActive(link.href)
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </nav>

          <button
            onClick={toggleLocale}
            className="hidden items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary md:flex"
            aria-label="Toggle language"
          >
            <Globe className="size-3.5" />
            {locale === "en" ? "العربية" : "English"}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-1.5 text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href as any}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block py-3 text-base tracking-wide transition-colors hover:text-primary",
                    isActive(link.href)
                      ? "text-primary"
                      : "text-foreground",
                  )}
                >
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
            <li className="mt-2 border-t border-border/60 pt-2">
              <button
                onClick={() => {
                  toggleLocale()
                  setOpen(false)
                }}
                className="flex w-full items-center gap-2 py-3 text-base tracking-wide text-foreground transition-colors hover:text-primary"
              >
                <Globe className="size-4" />
                {locale === "en" ? "Switch to Arabic (العربية)" : "Switch to English"}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
