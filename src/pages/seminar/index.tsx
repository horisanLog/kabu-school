import Head from "next/head"
import Link from "next/link"
import type { GetStaticProps } from "next"

import {
  getAvailableEvents,
  getFeaturedFAQs,
  getFeaturedReviews,
  getInstructors,
} from "@/lib/data-loader"
import type { Event, FAQ, Instructor, Review } from "@/types"

import { FAQPreview } from "@/components/home/FAQPreview"
import { ReviewList } from "@/components/home/ReviewList"
import { ScheduleTeaser } from "@/components/home/ScheduleTeaser"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { PageHero } from "@/components/ui/PageHero"
import { SectionHeading } from "@/components/ui/SectionHeading"

interface SeminarPageProps {
  events: Event[]
  reviews: Review[]
  faqs: FAQ[]
  instructors: Instructor[]
}

const recommendedList = [
  "投資に興味はあるが何から始めれば良いかわからない",
  "NISA・iDeCoは開設したが活用しきれていない",
  "働きながら無理なく学べるスクールを探している",
  "強引な勧誘ではなく、信頼できる情報を得たい",
]

const seminarFlow = [
  {
    time: "00:00 - 00:15",
    title: "自己紹介とスクールの特徴",
    description:
      "講師・運営の紹介と、スクールが大切にしている価値観をご説明します。",
  },
  {
    time: "00:15 - 00:35",
    title: "投資が必要な理由と最新トレンド",
    description:
      "資産形成の必要性、NISA制度の最新情報、投資で押さえるべきポイントを整理します。",
  },
  {
    time: "00:35 - 01:00",
    title: "カリキュラム体験ワーク",
    description:
      "実際の授業の一部を体験し、リスク管理や銘柄選定の考え方を学びます。",
  },
  {
    time: "01:00 - 01:20",
    title: "受講生の成果紹介と質疑",
    description: "卒業生の体験談のご紹介と、皆さまからのご質問にお答えします。",
  },
  {
    time: "01:20 - 01:30",
    title: "個別相談のご案内",
    description: "希望者のみ、後日オンラインでの個別相談をご案内します。",
  },
]

const participationBenefits = [
  {
    title: "限定テキストを無料プレゼント",
    description: "投資の基礎が1冊で分かる限定冊子をお渡しします。",
  },
  {
    title: "個別相談30分",
    description:
      "セミナー後、ご希望の方にオンライン個別相談（30分）を無料で実施。",
  },
  {
    title: "受講料割引クーポン",
    description: "当日中にお申し込みの方は受講料が1万円OFFになります。",
  },
]

export default function SeminarPage({
  events,
  reviews,
  faqs,
  instructors,
}: SeminarPageProps) {
  return (
    <>
      <Head>
        <title>無料体験セミナー | 株式投資スクール</title>
        <meta
          name="description"
          content="投資初心者向けの無料体験セミナー。カリキュラム体験・教材紹介・質疑応答を通じてスクールの雰囲気を体感できます。"
        />
      </Head>

      <Breadcrumb
        items={[{ label: "ホーム", href: "/" }, { label: "無料体験セミナー" }]}
      />

      <PageHero
        eyebrow="Seminar"
        title="まずは90分の無料体験セミナーで雰囲気を体験"
        subtitle="初心者の方でも安心して参加できるように、投資の基本解説・カリキュラム体験・質疑応答まで丁寧にサポートします。オンライン／会場のどちらでも参加OK。"
        align="center"
      >
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-gray-600">
          <span className="rounded-full bg-white px-4 py-2">参加費無料</span>
          <span className="rounded-full bg-white px-4 py-2">
            オンライン・会場選択可
          </span>
          <span className="rounded-full bg-white px-4 py-2">
            しつこい勧誘は一切なし
          </span>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/apply" className="btn-primary bg-accent text-white">
            今すぐ申し込む
          </Link>
          <Link href="/schedule" className="btn-secondary">
            開催スケジュールを見る
          </Link>
        </div>
      </PageHero>

      <section className="section bg-white">
        <div className="container-responsive grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <SectionHeading title="こんな方におすすめです" />
            <ul className="space-y-3 text-sm text-gray-600">
              {recommendedList.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-gray-50 p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-900">
              当日の持ち物
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>・メモと筆記用具</li>
              <li>・PCまたはタブレット（オンライン参加の場合）</li>
              <li>・Zoomアプリ（最新バージョン）</li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">
              ※ 会場参加の方は開始15分前にお越しください。
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-responsive space-y-8">
          <SectionHeading
            title="90分の流れ"
            description="投資の基礎、カリキュラム体験、質疑応答まで盛りだくさんの90分。初心者の方でも安心してご参加いただけます。"
          />
          <div className="space-y-4">
            {seminarFlow.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {item.time}
                </div>
                <h3 className="mt-2 text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-responsive space-y-8">
          <SectionHeading
            title="参加特典"
            description="当日ご参加いただいた方には、投資のスタートに役立つ限定特典をご用意しています。"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {participationBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl bg-gray-50 p-6 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewList reviews={reviews} />

      <section className="section bg-gray-50">
        <div className="container-responsive space-y-6">
          <SectionHeading
            title="担当講師"
            description="経験豊富な講師陣が、投資の基礎から実践まで丁寧にご案内します。"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {instructors.slice(0, 3).map((instructor) => (
              <div
                key={instructor.id}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <div
                  className="h-16 w-16 rounded-full bg-accent/10"
                  aria-hidden
                />
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  {instructor.name}
                </h3>
                <p className="text-xs font-semibold text-accent">
                  {instructor.title}
                </p>
                <p className="mt-3 text-sm text-gray-600">{instructor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScheduleTeaser events={events} />

      <FAQPreview faqs={faqs} />

      <section className="bg-accent py-16 text-white md:py-24">
        <div className="container-responsive text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">
            体験セミナーで投資の第一歩を踏み出しましょう
          </h2>
          <p className="mt-4 text-sm text-white/80">
            ご不安な点はセミナー内で全て解消いただけます。お気軽にご参加ください。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/apply"
              className="btn-primary bg-white text-accent hover:bg-gray-100"
            >
              体験セミナーに申し込む
            </Link>
            <Link
              href="/contact"
              className="btn-secondary border-white text-white hover:bg-white/10"
            >
              個別相談を予約する
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<SeminarPageProps> = async () => {
  const events = getAvailableEvents(4)
  const reviews = getFeaturedReviews(3)
  const faqs = getFeaturedFAQs(5)
  const instructors = getInstructors()

  return {
    props: {
      events,
      reviews,
      faqs,
      instructors,
    },
    revalidate: 60 * 60,
  }
}
