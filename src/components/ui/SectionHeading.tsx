import type { ReactNode } from "react"

interface SectionHeadingProps {
  title: string
  description?: ReactNode
  align?: "left" | "center"
  eyebrow?: string
}

export function SectionHeading({ title, description, align = "left", eyebrow }: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left"

  return (
    <div className={`space-y-3 ${alignment}`}>
      {eyebrow ? <span className="text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</span> : null}
      <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">{title}</h2>
      {description ? <p className="text-sm text-gray-600 md:text-base">{description}</p> : null}
    </div>
  )
}

