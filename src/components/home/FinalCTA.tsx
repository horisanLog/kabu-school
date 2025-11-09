import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="bg-accent py-16 text-white md:py-24">
      <div className="mx-auto max-w-screen-lg px-4 text-center md:px-6">
        <h2 className="text-3xl font-semibold md:text-4xl">今から資産形成の第一歩を踏み出しましょう</h2>
        <p className="mt-4 text-sm text-white/80">
          無料体験セミナーでスクールの雰囲気を体感し、ご自身に合う学び方を確認していただけます。
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-accent shadow transition hover:bg-gray-100"
          >
            今すぐ無料体験に申し込む
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            資料請求・お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  )
}

