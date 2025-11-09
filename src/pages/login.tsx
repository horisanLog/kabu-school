import Head from "next/head"
import Link from "next/link"

import { Breadcrumb } from "@/components/ui/Breadcrumb"

const MYPAGE_URL = "https://mypage.example.com"

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>受講生マイページ | 株式投資スクール</title>
      </Head>

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "マイページ" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-responsive space-y-8">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
            <h1 className="text-2xl font-semibold text-gray-900">受講生マイページ</h1>
            <p className="mt-4 text-sm text-gray-600">
              受講生の方は以下のボタンからマイページへログインしてください。教材や録画、スケジュール、質問掲示板をご利用いただけます。
            </p>
            <Link
              href={MYPAGE_URL}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow transition hover:opacity-90"
            >
              マイページへログイン
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-base font-semibold text-gray-900">ログイン情報をお忘れの方</h2>
              <p className="mt-2 text-sm text-gray-600">
                メールアドレスが不明な場合やパスワード再設定をご希望の方は、サポートまでご連絡ください。<br />
                support@example.com / 0120-123-456（平日10:00-19:00）
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h2 className="text-base font-semibold text-gray-900">受講生以外の方へ</h2>
              <p className="mt-2 text-sm text-gray-600">
                マイページは受講生限定のサービスです。受講をご検討中の方はまず無料体験セミナーにご参加ください。
              </p>
              <Link href="/seminar" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                無料体験セミナー詳細 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

