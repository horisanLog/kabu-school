interface BenefitItem {
  title: string
  description: string
  icon: string
}

const benefits: BenefitItem[] = [
  {
    title: "初心者に特化した15回の体系的カリキュラム",
    description:
      "投資をゼロから学びたい方に特化。基礎知識から実践的な銘柄選びまで段階的に学べます。",
    icon: "book-open",
  },
  {
    title: "座学だけじゃない実践シミュレーション",
    description:
      "仮想資金を使った投資シミュレーションで、リスクなく疑似体験。判断力と経験値を身につけます。",
    icon: "line-chart",
  },
  {
    title: "オンライン・オフライン両対応で柔軟な学び",
    description:
      "仕事や家事と両立できるように、オンラインと会場受講を選択可能。録画視聴もご用意しています。",
    icon: "users",
  },
]

const iconPaths: Record<string, React.ReactElement> = {
  "book-open": (
    <svg
      className="h-8 w-8 text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path
        d="M12 4.5C9.5 3 6.5 3 4 4.5v13c2.5-1.5 5.5-1.5 8 0 2.5-1.5 5.5-1.5 8 0v-13c-2.5-1.5-5.5-1.5-8 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 4.5v13" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "line-chart": (
    <svg
      className="h-8 w-8 text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M4 20h16" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M6 16l4-5 4 3 4-6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 8h3v3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  users: (
    <svg
      className="h-8 w-8 text-accent"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path
        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="9"
        cy="7"
        r="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 21v-2a4 4 0 0 0-3-3.87"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 3.13a4 4 0 0 1 0 7.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

export function BenefitGrid() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-screen-lg px-4 md:px-6">
        <h2 className="text-center text-3xl font-semibold text-gray-900 md:text-4xl">
          当スクールが選ばれる3つの理由
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl bg-gray-50 p-8 text-center shadow-sm"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow">
                {iconPaths[benefit.icon]}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
