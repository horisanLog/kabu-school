import Head from "next/head"
import Image from "next/image"

import { Breadcrumb } from "@/components/ui/Breadcrumb"

const companyInfo = [
  { label: "会社名", value: "株式会社EMA" },
  { label: "所在地", value: "〒100-0005 東京都千代田区丸の内1-1-1" },
  { label: "設立", value: "2018年4月" },
  { label: "資本金", value: "1,000万円" },
  { label: "代表取締役", value: "石倉 光" },
  {
    label: "事業内容",
    value: "投資スクール運営／教育コンテンツ開発／セミナー企画",
  },
]

const values = [
  {
    title: "信頼第一",
    description:
      "透明性のある情報提供と誠実なサポートで、受講生の資産形成を長期的に支援します。",
  },
  {
    title: "実践的な学び",
    description:
      "基礎理論と実践シミュレーションを組み合わせ、投資判断力を身につけるカリキュラムを提供します。",
  },
  {
    title: "コミュニティ",
    description:
      "卒業後も継続的に学び合えるコミュニティを運営し、仲間と共に成長できる環境を整備しています。",
  },
]

export default function CompanyPage() {
  return (
    <>
      <Head>
        <title>会社概要 | 株式会社EMA</title>
      </Head>

      <Breadcrumb
        items={[{ label: "ホーム", href: "/" }, { label: "会社概要" }]}
      />

      {/* 会社イメージ画像 */}
      <section className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 md:h-96">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/company-hero.jpg"
            alt="Investment Information Service EMA"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-responsive space-y-8">
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-gray-900">会社概要</h1>
            <p className="text-sm text-gray-600">
              株式会社EMAは、投資初心者が「自分で判断できる投資家」になることを支援する教育機関です。信頼できる情報提供と実践的なカリキュラムで、受講生の資産形成をサポートしています。
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm md:grid-cols-2">
            {companyInfo.map((item) => (
              <div key={item.label} className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {item.label}
                </dt>
                <dd className="text-sm text-gray-800">{item.value}</dd>
              </div>
            ))}
          </dl>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              私たちのミッションと価値観
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl bg-gray-50 p-6 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
