import Head from "next/head"

import { Breadcrumb } from "@/components/ui/Breadcrumb"

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>利用規約 | 株式投資スクール</title>
      </Head>

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "利用規約" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-responsive space-y-6">
          <h1 className="text-2xl font-semibold text-gray-900">利用規約</h1>
          <p className="text-sm text-gray-600">
            本規約は、株式投資スクール（以下、「当スクール」といいます）が提供するサービスをご利用いただく際の条件を定めたものです。受講申込をもって、本規約に同意したものとみなします。
          </p>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">第1条（適用）</h2>
            <p>
              1. 本規約は、当スクールが提供するすべてのサービスに適用されます。
              <br />2. 当スクールは必要に応じて本規約を改定することがあります。改定後の利用規約はウェブサイト等で告知した時点から効力を生じます。
            </p>
          </section>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">第2条（受講契約の成立）</h2>
            <p>
              1. 受講申込フォームの送信および受講料の入金確認をもって、受講契約が成立します。
              <br />2. 申込時に虚偽の申告があった場合、当スクールは契約を解除できるものとします。
            </p>
          </section>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">第3条（受講料・支払方法）</h2>
            <p>
              受講料・教材費などは当スクールが別途定め、ウェブサイトに表示します。支払方法は銀行振込、クレジットカード決済、分割払い（教育ローン）に対応します。
            </p>
          </section>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">第4条（キャンセル・返金）</h2>
            <p>
              1. 開講7日前までのキャンセルは全額返金いたします。
              <br />2. 開講6日前から開講日までのキャンセルは受講料の50%、開講後のキャンセルは返金致しかねます。
            </p>
          </section>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">第5条（禁止事項）</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>教材・コンテンツの複製、第三者への譲渡・販売</li>
              <li>講師・他の受講生への迷惑行為、誹謗中傷</li>
              <li>スクールの運営を妨害する行為</li>
            </ul>
          </section>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">第6条（免責）</h2>
            <p>
              当スクールは、受講生の投資行動により発生した損失について一切の責任を負いません。投資判断はご自身の責任において行ってください。
            </p>
          </section>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">第7条（準拠法）</h2>
            <p>本規約は日本法に準拠します。紛争が生じた場合は、東京地方裁判所を専属的合意管轄裁判所とします。</p>
          </section>

          <p className="text-xs text-gray-500">最終更新日：2025年10月31日</p>
        </div>
      </section>
    </>
  )
}

