import Link from "next/link"

const footerSections = [
  {
    title: "企業情報",
    links: [{ label: "会社概要", href: "/company" }],
  },
  {
    title: "スクールについて",
    links: [{ label: "カリキュラム", href: "/curriculum" }],
  },
  {
    title: "サポート",
    links: [{ label: "FAQ", href: "/faq" }],
  },
]

const socialLinks = [{ label: "LINE", href: "https://line.me" }]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-lg px-4 py-12 md:px-6 md:py-16">
        {/* ロゴ・会社名 */}
        <div className="text-center">
          <Link href="/" className="inline-block text-xl font-bold text-white">
            株式会社EMA
          </Link>
          <p className="mt-2 text-sm text-gray-400">
            Investment Information Service
          </p>
        </div>

        {/* ナビゲーションリンク */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
          {footerSections.map((section) =>
            section.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))
          )}
        </div>

        {/* LINE特典誘導 */}
        <div className="mt-8">
          <div className="rounded-2xl bg-gradient-to-r from-gray-800 to-gray-700 p-6 text-center">
            <p className="text-sm font-semibold text-gray-300">
              LINE登録で限定特典プレゼント
            </p>
            <p className="mt-1 text-xs text-gray-400">
              投資の基礎が学べるPDF資料を無料配布中
            </p>
            <div className="mt-4 flex items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#06C755] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-105 hover:bg-[#05b34c]"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                  特典を受け取る
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © 2025 株式会社EMA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
