import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" className="bg-gray-50 py-4">
      <ol className="container-responsive flex flex-wrap items-center gap-2 text-xs text-gray-500">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="transition hover:text-accent">
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-gray-700">{item.label}</span>
            )}
            {index < items.length - 1 ? <span aria-hidden>›</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}

