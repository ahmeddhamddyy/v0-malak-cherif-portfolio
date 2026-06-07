import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Travel journals from Sinai, Al Minya, Aswan, Luxor, and Greece — immersive photo stories by Layla Hassan.",
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
