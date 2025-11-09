import Link from "next/link"

const footerSections = [
  {
    title: "スクールについて",
    links: [
      { label: "カリキュラム詳細", href: "/curriculum" },
      { label: "教材紹介", href: "/textbook" },
      { label: "受講生の声", href: "/voice" },
      { label: "成功事例", href: "/case-study" },
      { label: "メディア掲載", href: "/media" },
    ],
  },
  {
    title: "参加する",
    links: [
      { label: "開催スケジュール", href: "/schedule" },
      { label: "無料体験セミナー", href: "/seminar" },
      { label: "申込フォーム", href: "/apply" },
    ],
  },
  {
    title: "サポート",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "お問い合わせ", href: "/contact" },
      { label: "ブログ", href: "/blog" },
      { label: "ログイン", href: "/login" },
    ],
  },
  {
    title: "企業情報",
    links: [
      { label: "会社概要", href: "/company" },
      { label: "プライバシーポリシー", href: "/privacy" },
      { label: "利用規約", href: "/terms" },
      { label: "特定商取引法", href: "/tokushoho" },
      { label: "免責事項", href: "/disclaimer" },
    ],
  },
]

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "X (Twitter)", href: "https://twitter.com" },
  { label: "LINE", href: "https://line.me" },
  { label: "YouTube", href: "https://www.youtube.com" },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold tracking-wide text-gray-300">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            {socialLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500">© 2025 株式投資スクール. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

