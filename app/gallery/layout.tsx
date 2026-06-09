import type { Metadata } from "next"
import { ScrollProgressBar } from "@/components/scroll-progress-bar"

export const metadata: Metadata = {
  title: "Travel",
  description:
    "Travel journals from Qina, South Sinai, Luxor, Aswan, and Greece — immersive photo stories by Malak Attared.",
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ScrollProgressBar />
      {children}
    </>
  )
}
