"use client"

import { useEffect, useState } from "react"

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const scrollProgress = windowHeight > 0 ? (scrolled / windowHeight) * 100 : 0
      setProgress(scrollProgress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-background">
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
