import type { Metadata } from "next"
import { Camera, Music2, Video, Mail } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Layla Hassan for collaborations, storytelling, speaking, or just to say hello.",
}

const socials = [
  { icon: Camera, label: "Instagram", handle: "@layla.travels", href: "https://instagram.com" },
  { icon: Music2, label: "TikTok", handle: "@laylahassan", href: "https://tiktok.com" },
  { icon: Video, label: "YouTube", handle: "Layla Hassan", href: "https://youtube.com" },
  { icon: Mail, label: "Email", handle: "hello@laylahassan.com", href: "mailto:hello@laylahassan.com" },
]

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">
          Say hello
        </p>
        <h1 className="mt-4 text-balance font-display text-4xl leading-tight text-foreground sm:text-5xl">
          Let&apos;s tell a story together
        </h1>
        <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
          Whether it&apos;s a collaboration, a speaking invitation, a tourism
          campaign, or simply a kind word about a journal that moved you — my
          inbox is always open.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />

        <div className="flex flex-col gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-xl border border-border/70 bg-card p-4 transition-colors hover:border-primary/50"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-sand/60 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-medium text-foreground">
                  {s.label}
                </span>
                <span className="block text-sm text-muted-foreground">
                  {s.handle}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
