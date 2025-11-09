import Link from "next/link"

import type { HeroContent } from "@/types"

interface HeroProps {
  hero: HeroContent
  ctaLabel: string
}

export function Hero({ hero, ctaLabel }: HeroProps) {
  const [title, highlight] = hero.subtitle.split(" / ")

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-screen-lg px-4 text-center md:px-6">
        <span className="text-sm font-semibold uppercase tracking-widest text-accent">
          初心者特化の投資スクール
        </span>
        <h1 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
          {hero.title}
        </h1>
        <p className="mt-6 text-lg text-gray-600 md:text-xl">
          {title}
          <br className="hidden md:block" />
          {highlight}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/seminar"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:opacity-90"
          >
            📝 {ctaLabel}
          </Link>
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-6 py-3 text-base font-semibold text-gray-800 transition hover:border-accent hover:text-accent"
          >
            開催スケジュールを見る
          </Link>
        </div>
        {hero.note ? (
          <p className="mt-6 text-sm text-gray-500">{hero.note}</p>
        ) : null}
      </div>
    </section>
  )
}
