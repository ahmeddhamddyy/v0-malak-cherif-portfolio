import { Camera, Video, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-sand/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:flex-row sm:px-8">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg text-foreground">Malak Attared</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Stories from Qina to Greece.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Camera className="size-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Video className="size-5" />
          </a>
          <a
            href="mailto:hello@malakattared.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-border/60">
        <p className="mx-auto max-w-6xl px-5 py-4 text-center text-xs text-muted-foreground sm:px-8">
          &copy; {new Date().getFullYear()} Malak Attared. Made with warm light.
        </p>
      </div>
    </footer>
  )
}
