import Head from "next/head"
import Link from "next/link"

const pages: { group: string; links: { href: string; label: string }[] }[] = [
  {
    group: "主要ページ",
    links: [
      { href: "/", label: "トップページ" },
      { href: "/curriculum", label: "カリキュラム" },
      { href: "/seminar", label: "無料体験セミナー" },
      { href: "/schedule", label: "開催スケジュール" },
      { href: "/apply", label: "申込フォーム" },
      { href: "/voice", label: "受講生の声" },
      { href: "/faq", label: "よくあるご質問" },
      { href: "/contact", label: "お問い合わせ" },
    ],
  },
  {
    group: "法的情報・企業情報",
    links: [
      { href: "/company", label: "会社概要" },
      { href: "/privacy", label: "プライバシーポリシー" },
      { href: "/terms", label: "利用規約" },
      { href: "/tokushoho", label: "特定商取引法に基づく表記" },
      { href: "/disclaimer", label: "投資リスク免責事項" },
      { href: "/login", label: "受講生ログイン" },
    ],
  },
  {
    group: "その他",
    links: [
      { href: "/contact/thanks", label: "お問い合わせ完了" },
      { href: "/apply/confirm", label: "申込確認" },
      { href: "/apply/thanks", label: "申込完了" },
      { href: "/voice", label: "受講生の声一覧" },
    ],
  },
]

export default function HtmlSitemapPage() {
  return (
    <>
      <Head>
        <title>サイトマップ | 株式会社EMA</title>
      </Head>

      <section className="section bg-white">
        <div className="container-responsive space-y-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">サイトマップ</h1>
            <p className="mt-2 text-sm text-gray-600">株式会社EMAの各ページへのリンク一覧です。</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {pages.map((section) => (
              <div key={section.group} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
                <h2 className="text-sm font-semibold text-gray-900">{section.group}</h2>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-accent hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

