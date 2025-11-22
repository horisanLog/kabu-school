import Link from "next/link"
import { useState } from "react"

const navItems = [
  { label: "会社概要", href: "/company" },
  { label: "カリキュラム", href: "/curriculum" },
  { label: "FAQ", href: "/faq" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">
          株式会社EMA
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors duration-200 hover:text-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-gray-200 p-2 text-gray-700 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="メニューを開閉"
          aria-expanded={menuOpen}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </nav>

      {menuOpen ? (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <ul className="space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}

