import { Camera, Video } from "lucide-react"
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
            <Camera className="size-5" />
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
            <Video className="size-5" />
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
