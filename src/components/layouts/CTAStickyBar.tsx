"use client"

import { Phone } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function CTAStickyBar({ threshold = 200 }: { threshold?: number }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > threshold)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  if (!visible) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-accent text-white shadow-2xl md:hidden">
      <div className="mx-auto flex max-w-screen-md items-center justify-between px-4 py-3">
        <a href="tel:0120-123-456" className="flex items-center gap-2 text-sm font-semibold">
          <Phone className="h-5 w-5" />
          電話で相談
        </a>
        <Link
          href="/seminar"
          className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-accent shadow hover:bg-gray-100"
        >
          📝 無料体験申込
        </Link>
      </div>
    </div>
  )
}

