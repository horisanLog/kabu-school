import Head from "next/head"

import { Breadcrumb } from "@/components/ui/Breadcrumb"

export default function TokushohoPage() {
  return (
    <>
      <Head>
        <title>特定商取引法に基づく表記 | 株式投資スクール</title>
      </Head>

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "特定商取引法に基づく表記" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-responsive space-y-6">
          <h1 className="text-2xl font-semibold text-gray-900">特定商取引法に基づく表記</h1>
          <dl className="space-y-4 rounded-2xl border border-gray-100 bg-gray-50 p-6 text-sm text-gray-700">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">販売事業者</dt>
              <dd className="mt-1">株式会社インベストラーニング</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">運営責任者</dt>
              <dd className="mt-1">代表取締役 佐藤 健</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">所在地</dt>
              <dd className="mt-1">〒100-0005 東京都千代田区丸の内1-1-1</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">電話番号</dt>
              <dd className="mt-1">0120-123-456（平日10:00-19:00）</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">メールアドレス</dt>
              <dd className="mt-1">support@example.com</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">販売価格</dt>
              <dd className="mt-1">受講料298,000円（税込）／教材費18,000円（税込） ※詳細はウェブサイトに記載</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">お支払い方法</dt>
              <dd className="mt-1">クレジットカード、銀行振込、教育ローン（分割）</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">商品の引渡時期</dt>
              <dd className="mt-1">開講日の前日までに受講方法をご案内します。</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">返品・キャンセル</dt>
              <dd className="mt-1">
                開講7日前まで：全額返金 / 開講6日前〜当日：受講料の50% / 開講後：返金不可。詳しくは利用規約をご確認ください。
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">個人情報の取り扱い</dt>
              <dd className="mt-1">
                当スクールのプライバシーポリシーに基づき適切に管理します。
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  )
}

