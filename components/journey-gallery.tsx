"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { Photo } from "@/lib/destinations"

export function JourneyGallery({ photos }: { photos: Photo[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const isOpen = openIndex !== null

  const close = useCallback(() => setOpenIndex(null), [])
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  )
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? i : (i - 1 + photos.length) % photos.length,
      ),
    [photos.length],
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, close, next, prev])

  return (
    <>
      <div className="space-y-20 sm:space-y-32">
        {photos.map((photo, i) => (
          <figure key={photo.src + i}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="block w-full cursor-zoom-in overflow-hidden rounded-xl shadow-[var(--shadow-soft)]"
              aria-label={`Open photo ${i + 1} in lightbox`}
            >
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                width={1600}
                height={1100}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 768px"
                className="max-h-[88vh] w-full object-cover"
              />
            </button>
            <figcaption className="mx-auto mt-6 flex max-w-2xl gap-5 px-1">
              <span className="font-mono text-sm tabular-nums text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {photo.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      {isOpen && openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full p-2 text-warm-white/80 transition-colors hover:text-warm-white"
            aria-label="Close"
          >
            <X className="size-7" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-warm-white/80 transition-colors hover:text-warm-white sm:left-6"
            aria-label="Previous photo"
          >
            <ChevronLeft className="size-9" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-warm-white/80 transition-colors hover:text-warm-white sm:right-6"
            aria-label="Next photo"
          >
            <ChevronRight className="size-9" />
          </button>

          <div
            className="flex max-h-[85vh] w-full max-w-4xl flex-col items-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full">
              <Image
                src={photos[openIndex].src || "/placeholder.svg"}
                alt={photos[openIndex].alt}
                width={1600}
                height={1100}
                className="mx-auto max-h-[70vh] w-auto rounded-lg object-contain"
              />
            </div>
            <p className="mt-5 max-w-2xl text-pretty text-center text-sm leading-relaxed text-warm-white/85">
              {photos[openIndex].caption}
            </p>
            <p className="mt-2 font-mono text-xs tabular-nums text-warm-white/60">
              {openIndex + 1} / {photos.length}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
