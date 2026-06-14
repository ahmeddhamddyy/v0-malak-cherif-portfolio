import type { Metadata } from "next"
import { useTranslations } from "next-intl"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Malak Attared for collaborations, speaking engagements, or just to say hello.",
}

const socials = [
  {
    label: "contact.instagramTravel",
    href: "https://www.instagram.com/malak_attared",
  },
  {
    label: "contact.instagramLifestyle",
    href: "https://www.instagram.com/malak.attared2",
  },
  {
    label: "contact.tiktok",
    href: "https://www.tiktok.com/@malak_attared",
  },
  {
    label: "contact.youtube",
    href: "https://youtube.com/@malak_attared",
  },
]

export default function ContactPage() {
  const t = useTranslations()

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            {t("contact.label")}
          </p>
          <h1 className="mt-4 text-balance font-display text-4xl leading-tight text-foreground sm:text-5xl">
            {t("contact.heading")}
          </h1>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            {t("contact.description")}
          </p>

          <div className="mt-12">
            <h2 className="font-display text-2xl text-foreground">
              Find me on
            </h2>
            <ul className="mt-6 space-y-4">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {t(s.label)}
                    </span>
                    <span className="text-xs font-mono opacity-60">
                      {new URL(s.href).pathname}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:mt-0 mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
