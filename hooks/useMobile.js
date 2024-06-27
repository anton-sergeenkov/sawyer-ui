"use client"

import { useState, useEffect } from "react"

const BREAKPOINT_MOBILE = 600

const checkIsMobile = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth <= BREAKPOINT_MOBILE
  }

  return false
}

// TODO: не используется
export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(checkIsMobile())

  const handleResize = () => {
    setIsMobile(checkIsMobile())
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return isMobile
}
