import { useTranslations } from "next-intl"

export function SiteFooter() {
  const t = useTranslations("footer")
  return (
    <footer className="border-t border-border/60 bg-sand/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg text-foreground">Malak Attared</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("tagline")}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/malak_attared"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-primary transition-colors hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@malak_attared"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-primary transition-colors hover:opacity-80"
          >
            TikTok
          </a>
          <a
            href="https://youtube.com/@malak_attared"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="text-primary transition-colors hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="border-t border-border/60">
        <p className="mx-auto max-w-6xl px-5 py-4 text-center text-xs text-muted-foreground sm:px-8">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  )
}
