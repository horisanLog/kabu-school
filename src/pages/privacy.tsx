import Head from "next/head"

import { Breadcrumb } from "@/components/ui/Breadcrumb"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>プライバシーポリシー | 株式投資スクール</title>
      </Head>

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "プライバシーポリシー" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-responsive space-y-6">
          <h1 className="text-2xl font-semibold text-gray-900">プライバシーポリシー</h1>
          <p className="text-sm text-gray-600">
            株式投資スクール（以下、「当スクール」といいます）は、受講生ならびにお申し込みいただいた皆さまの個人情報を適切に取り扱うことを社会的責務と認識し、以下の方針に基づいて個人情報の保護に努めます。
          </p>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">1. 個人情報の定義</h2>
            <p>
              本政策において個人情報とは、氏名・住所・電話番号・メールアドレスなど、特定の個人を識別できる情報を指します。
            </p>
          </section>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">2. 利用目的</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>無料体験セミナーおよび各種講座のご案内・運営</li>
              <li>お問い合わせへの回答および情報提供</li>
              <li>サービス向上のためのアンケート・分析</li>
              <li>緊急時のご連絡、安全管理上必要な通知</li>
            </ul>
          </section>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">3. 個人情報の管理</h2>
            <p>
              当スクールは、管理責任者を配置し、適切かつ厳重に個人情報を管理します。漏えい・滅失・毀損を防止するために必要な措置を講じます。
            </p>
          </section>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">4. 第三者提供について</h2>
            <p>
              ご本人の同意がある場合、法令に基づく場合、業務委託先への必要な範囲での提供を除き、第三者に個人情報を提供することはありません。
            </p>
          </section>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">5. 開示・訂正・削除等のご請求</h2>
            <p>
              個人情報の開示・訂正・削除等をご希望される場合は、所定の手続に基づき迅速に対応いたします。
            </p>
          </section>

          <section className="space-y-3 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">6. プライバシーポリシーの改定</h2>
            <p>
              本ポリシーの内容は、法令の制定・改正やサービス内容の変更に応じて予告なく改定する場合があります。
            </p>
          </section>

          <section className="space-y-2 text-sm text-gray-700">
            <h2 className="text-lg font-semibold text-gray-900">お問い合わせ窓口</h2>
            <p>株式投資スクール 事務局</p>
            <p>メール：support@example.com</p>
            <p>電話：0120-123-456（平日10:00-19:00）</p>
          </section>
        </div>
      </section>
    </>
  )
}

