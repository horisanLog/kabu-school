import Head from "next/head"
import Link from "next/link"
import type { GetStaticProps } from "next"

import { getAvailableEvents } from "@/lib/data-loader"
import type { Event } from "@/types"

import { ScheduleExplorer } from "@/components/schedule/ScheduleExplorer"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { PageHero } from "@/components/ui/PageHero"

interface SchedulePageProps {
  events: Event[]
}

export default function SchedulePage({ events }: SchedulePageProps) {
  return (
    <>
      <Head>
        <title>開催スケジュール | 株式投資スクール</title>
        <meta
          name="description"
          content="無料体験セミナーの開催日程一覧。オンライン／東京／大阪の各会場からご希望の日程をお選びください。"
        />
      </Head>

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "開催スケジュール" },
        ]}
      />

      <PageHero
        eyebrow="Schedule"
        title="無料体験セミナー 開催スケジュール"
        subtitle="オンライン・東京・大阪で定期開催中。ご希望の日程と参加形態をお選びください。"
      >
        <p>
          所要時間は約90分。参加費は無料です。オンライン参加の場合は Zoom を使用します。会場参加の方は開始15分前のご来場をお願いします。
        </p>
      </PageHero>

      <section className="section bg-white">
        <div className="container-responsive space-y-8">
          <ScheduleExplorer events={events} />

          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">お申し込みの流れ</h2>
            <ol className="mt-3 space-y-2 text-sm text-gray-600">
              <li>1. 上記スケジュールからご希望の日程を選び、申込フォームへ進みます。</li>
              <li>2. お申し込み完了後、確認メールにて参加方法をご案内します。</li>
              <li>3. オンライン参加の方はZoomリンク、会場参加の方は住所・持ち物をご確認ください。</li>
            </ol>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-accent">
              <Link href="/apply" className="btn-primary bg-accent text-white">
                今すぐ申し込む
              </Link>
              <Link href="/contact" className="btn-secondary">
                相談して決めたい（問い合わせ）
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<SchedulePageProps> = async () => {
  const events = getAvailableEvents()

  return {
    props: {
      events,
    },
    revalidate: 60 * 60,
  }
}

