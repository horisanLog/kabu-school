import Head from "next/head"

import { Breadcrumb } from "@/components/ui/Breadcrumb"

export default function DisclaimerPage() {
  return (
    <>
      <Head>
        <title>投資リスクに関する免責事項 | 株式投資スクール</title>
      </Head>

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "投資リスク免責事項" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-responsive space-y-6">
          <h1 className="text-2xl font-semibold text-gray-900">投資リスクに関する免責事項</h1>
          <p className="text-sm text-gray-600">
            当スクールで提供するカリキュラム、教材、セミナー内容は、投資の知識習得を目的としたものであり、特定の金融商品の購入を推奨するものではありません。投資判断はご自身の責任において行ってください。
          </p>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">1. 投資リスクについて</h2>
            <p>
              株式をはじめとする金融商品は価格変動リスク、信用リスク、流動性リスクなど様々な要因により元本割れが生じる可能性があります。当スクールは投資による損失について一切の責任を負いません。
            </p>
          </section>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">2. 情報の正確性について</h2>
            <p>
              当スクールが提供する情報は信頼できると判断したデータに基づいておりますが、その正確性・完全性を保証するものではありません。
            </p>
          </section>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">3. 将来予測について</h2>
            <p>
              セミナーや教材内で言及する将来の見通し・予測は、作成時点における判断であり、その実現を保証するものではありません。
            </p>
          </section>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">4. 個別銘柄の取り扱い</h2>
            <p>
              授業内で取り上げた銘柄は解説のための事例であり、投資の推奨を目的とするものではありません。実際の投資判断は、ご自身で調査・検討の上行ってください。
            </p>
          </section>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">5. 金融商品取引法に基づく表記</h2>
            <p>
              当スクールは投資助言・代理業の登録事業者ではありません。具体的な金融商品の売買助言は行っておりません。
            </p>
          </section>

          <p className="text-xs text-gray-500">最終更新日：2025年10月31日</p>
        </div>
      </section>
    </>
  )
}

