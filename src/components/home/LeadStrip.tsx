import Link from "next/link"

export function LeadStrip() {
  return (
    <section className="bg-accent py-12 text-white">
      <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:px-6 md:text-left">
        <div>
          <h3 className="text-2xl font-semibold">
            まずは無料体験セミナーで雰囲気を体感
          </h3>
          <p className="mt-2 text-sm text-white/80">
            実際の授業の一部を体験しながら、投資の第一歩を踏み出しましょう。
          </p>
        </div>
        <Link
          href="/seminar"
          className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-accent shadow transition hover:bg-gray-100"
        >
          セミナー詳細を見る
        </Link>
      </div>
    </section>
  )
}
