import type { ReactNode } from "react"

import { Footer } from "@/components/layouts/Footer"
import { Header } from "@/components/layouts/Header"

interface SiteLayoutProps {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1" role="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}

