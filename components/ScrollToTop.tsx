"use client"

import { useEffect, useState } from "react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 500) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener("scroll", toggleVisible)
    return () => window.removeEventListener("scroll", toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-8 right-8 z-150
        w-12 h-12 border-2 border-text bg-bg
        flex flex-col items-center justify-center
        group transition-all duration-200
        hover:bg-text hover:text-bg
        active:translate-y-1
        shadow-[4px_4px_0px_0px_rgba(var(--text-rgb),1)]
        hover:shadow-none
      "
      title="Return to Source"
    >
      <span className="text-xl leading-none group-hover:animate-bounce">
        ▲
      </span>
      <span className="text-[8px] font-mono font-black mt-0.5 uppercase tracking-tighter">
        TOP
      </span>
    </button>
  )
}