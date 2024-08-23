"use client"

import { useState, useEffect } from "react"

const BREAKPOINT_MOBILE = 600

const checkIsMobile = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth <= BREAKPOINT_MOBILE
  }

  return false
}

// TODO: not used
export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(checkIsMobile())

  const onResize = () => {
    setIsMobile(checkIsMobile())
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return isMobile
}
