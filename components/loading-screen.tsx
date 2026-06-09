"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [phase, setPhase] = useState<"loading" | "fadeOut">("loading")

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisited")
    if (hasVisited) {
      setIsVisible(false)
      return
    }

    // Show loading animation
    const fadeOutTimer = setTimeout(() => {
      setPhase("fadeOut")
    }, 2200) // Fade out at 2.2s

    const hideTimer = setTimeout(() => {
      setIsVisible(false)
      localStorage.setItem("hasVisited", "true")
    }, 2500) // Hide completely at 2.5s

    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        phase === "fadeOut" ? "opacity-0" : "opacity-100"
      }`}
    >
      <style>{`
        @keyframes fadeInLetter {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .letter {
          display: inline-block;
          animation: fadeInLetter 0.4s ease-in-out forwards;
        }

        .letter-0 { animation-delay: 0.1s; }
        .letter-1 { animation-delay: 0.2s; }
        .letter-2 { animation-delay: 0.3s; }
        .letter-3 { animation-delay: 0.4s; }
        .letter-4 { animation-delay: 0.5s; }

        .last-name {
          animation: fadeInLetter 0.4s ease-in-out 1.2s forwards;
          opacity: 0;
        }
      `}</style>

      <div className="text-center">
        <h1 className="font-display text-6xl sm:text-7xl text-foreground tracking-tight">
          {"Malak".split("").map((letter, i) => (
            <span key={i} className={`letter letter-${i}`}>
              {letter}
            </span>
          ))}
        </h1>
        <p className="last-name font-display text-5xl sm:text-6xl text-muted-foreground mt-2 tracking-tight">
          Attared
        </p>
      </div>
    </div>
  )
}
