"use client"

import { useState, useEffect } from "react"
import "./ScrollToTop.css"

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setShowScrollTop(scrollPosition > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    showScrollTop && (
      <button onClick={scrollToTop} className="scroll-to-top">
        ↑
      </button>
    )
  )
}

export default ScrollToTop
