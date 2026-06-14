"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { useTranslations } from "next-intl"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const t = useTranslations("contactForm")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border/70 bg-card p-10 text-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Check className="size-6" />
        </div>
        <h2 className="mt-4 font-display text-2xl text-foreground">
          {t("thankYou")}
        </h2>
        <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
          {t("thankYouMessage")}
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border/70 bg-card p-6 sm:p-8"
    >
      <div className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground"
          >
            {t("nameLabel")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder={t("namePlaceholder")}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground"
          >
            {t("emailLabel")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder={t("emailPlaceholder")}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-foreground"
          >
            {t("messageLabel")}
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="mt-2 w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder={t("messagePlaceholder")}
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        {t("submit")}
      </button>
    </form>
  )
}
