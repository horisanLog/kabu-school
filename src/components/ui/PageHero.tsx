import type { ReactNode } from "react"

interface PageHeroProps {
  title: string
  subtitle?: ReactNode
  eyebrow?: string
  children?: ReactNode
  align?: "left" | "center"
}

export function PageHero({ title, subtitle, eyebrow, children, align = "left" }: PageHeroProps) {
  const alignment = align === "center" ? "text-center" : "text-left"
  const container = align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl"

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className={`container-responsive ${container} ${alignment}`}>
        {eyebrow ? <span className="text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</span> : null}
        <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">{title}</h1>
        {subtitle ? <p className="mt-4 text-base text-gray-600 md:text-lg">{subtitle}</p> : null}
        {children ? <div className="mt-6 space-y-4 text-sm text-gray-600">{children}</div> : null}
      </div>
    </section>
  )
}

