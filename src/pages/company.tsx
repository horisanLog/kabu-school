import Head from "next/head"

import { Breadcrumb } from "@/components/ui/Breadcrumb"

const companyInfo = [
  { label: "会社名", value: "株式会社インベストラーニング" },
  { label: "所在地", value: "〒100-0005 東京都千代田区丸の内1-1-1" },
  { label: "設立", value: "2018年4月" },
  { label: "資本金", value: "1,000万円" },
  { label: "代表取締役", value: "佐藤 健" },
  { label: "事業内容", value: "投資スクール運営／教育コンテンツ開発／セミナー企画" },
]

const values = [
  {
    title: "信頼第一",
    description: "透明性のある情報提供と誠実なサポートで、受講生の資産形成を長期的に支援します。",
  },
  {
    title: "実践的な学び",
    description: "基礎理論と実践シミュレーションを組み合わせ、投資判断力を身につけるカリキュラムを提供します。",
  },
  {
    title: "コミュニティ",
    description: "卒業後も継続的に学び合えるコミュニティを運営し、仲間と共に成長できる環境を整備しています。",
  },
]

export default function CompanyPage() {
  return (
    <>
      <Head>
        <title>会社概要 | 株式投資スクール</title>
      </Head>

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "会社概要" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-responsive space-y-8">
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-gray-900">会社概要</h1>
            <p className="text-sm text-gray-600">
              株式投資スクールは、投資初心者が「自分で判断できる投資家」になることを支援する教育機関です。信頼できる情報提供と実践的なカリキュラムで、受講生の資産形成をサポートしています。
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm md:grid-cols-2">
            {companyInfo.map((item) => (
              <div key={item.label} className="space-y-1">
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">{item.label}</dt>
                <dd className="text-sm text-gray-800">{item.value}</dd>
              </div>
            ))}
          </dl>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">私たちのミッションと価値観</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl bg-gray-50 p-6 shadow-sm">
                  <h3 className="text-sm font-semibold text-gray-900">{value.title}</h3>
                  <p className="mt-3 text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-900">アクセス</h2>
            <p className="text-sm text-gray-600">JR「東京」駅 丸の内北口から徒歩3分。体験セミナーは丸の内教室（東京都千代田区丸の内1-1-1）で開催しています。</p>
          </section>
        </div>
      </section>
    </>
  )
}

