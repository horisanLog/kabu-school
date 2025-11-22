import type { HeroContent } from "@/types"

interface HeroProps {
  hero: HeroContent
}

export function Hero({ hero }: HeroProps) {
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
      </div>
    </section>
  )
}
