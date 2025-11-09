import Head from "next/head"
import Link from "next/link"
import type { GetStaticProps } from "next"

import { getFeaturedFAQs, getLessonsByPhase, getTextbooks } from "@/lib/data-loader"
import type { FAQ, Lesson, LessonPhase, Textbook } from "@/types"

import { FAQPreview } from "@/components/home/FAQPreview"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { PageHero } from "@/components/ui/PageHero"
import { SectionHeading } from "@/components/ui/SectionHeading"

interface CurriculumPageProps {
  phases: Record<LessonPhase, Lesson[]>
  textbooks: Textbook[]
  faqs: FAQ[]
}

const outcomes = [
  {
    category: "知識",
    items: [
      "投資と資産形成のフレームワークを理解している",
      "財務諸表の基本指標から企業を評価できる",
      "経済ニュースを投資判断に結び付けられる",
    ],
  },
  {
    category: "スキル",
    items: [
      "自身のリスク許容度に合わせたポートフォリオを設計できる",
      "成長株・配当株など目的に応じた銘柄選定ができる",
      "仮説→投資→振り返りのプロセスを回せる",
    ],
  },
  {
    category: "マインド",
    items: [
      "感情に左右されずに投資判断を下す意識が身についている",
      "長期視点での資産形成を継続する計画が描けている",
    ],
  },
]

const supportItems = [
  {
    title: "受講期間",
    description: "約4ヵ月（週1回 × 90分） + オンライン補講",
  },
  {
    title: "受講形式",
    description: "オンライン（Zoom） / 東京会場 / 大阪会場",
  },
  {
    title: "サポート",
    description: "チャット質問無制限 / 個別面談（月1回） / 卒業後コミュニティ",
  },
  {
    title: "教材",
    description: "公式テキスト / 演習ワーク / 録画アーカイブ / 模擬投資環境",
  },
]

const tuitionItems = [
  {
    label: "受講料",
    value: "298,000円（税込）",
    note: "分割払い（最大12回）に対応",
  },
  {
    label: "入学金",
    value: "0円",
    note: "キャンペーン中につき免除",
  },
  {
    label: "教材費",
    value: "18,000円（税込）",
    note: "テキスト・演習資料・録画視聴費用を含む",
  },
]

const phaseLabel: Record<LessonPhase, string> = {
  basic: "基礎編",
  practical: "実践編",
  advanced: "応用編",
}

export default function CurriculumPage({ phases, textbooks, faqs }: CurriculumPageProps) {
  const mainTextbook = textbooks[0]

  return (
    <>
      <Head>
        <title>カリキュラム詳細 | 株式投資スクール</title>
        <meta
          name="description"
          content="全15回の体系的なカリキュラムで初心者から実践まで段階的に学べます。受講後は自分で投資判断を下せる力を習得。"
        />
      </Head>

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "カリキュラム" },
        ]}
      />

      <PageHero
        title="15回で投資判断力を身につける体系的カリキュラム"
        subtitle="初心者が投資を理解し、実践できるようになるまでのプロセスを3つのフェーズで構成。オンライン・オフラインを組み合わせて着実にステップアップします。"
        eyebrow="Curriculum"
        align="center"
      >
        <p>
          1回90分 × 15回。基礎知識から実践シミュレーション、ポートフォリオ構築やメンタルコントロールまで幅広くカバーし、受講後は自分で投資判断ができる状態を目指します。
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-gray-600">
          <span className="rounded-full bg-white px-4 py-2">録画視聴サポート付き</span>
          <span className="rounded-full bg-white px-4 py-2">個別面談（月1回）</span>
          <span className="rounded-full bg-white px-4 py-2">卒業後コミュニティ参加</span>
        </div>
      </PageHero>

      <section className="section bg-white">
        <div className="container-responsive space-y-6">
          <SectionHeading
            title="3つのフェーズで段階的にステップアップ"
            description="受講生の約70%が投資未経験からスタート。基礎を徹底しながら、実践を通じて判断力を養います。"
          />
          <div className="space-y-8">
            {(Object.keys(phases) as LessonPhase[]).map((phase) => (
              <div key={phase} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 md:text-xl">
                  {phaseLabel[phase]}（第{phases[phase][0]?.no ?? ""}〜第{phases[phase][phases[phase].length - 1]?.no ?? ""}回）
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {phase === "basic"
                    ? "投資の前提知識と市場の仕組みを理解し、リスクと向き合う土台を作ります。"
                    : phase === "practical"
                      ? "実際の銘柄選定や投資シミュレーションを通じて判断力を磨きます。"
                      : "メンタルコントロールや投資計画の策定など、長期的に継続する力を身につけます。"}
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  {phases[phase].map((lesson) => (
                    <li key={lesson.no} className="rounded-xl bg-white p-4 shadow-sm">
                      <p className="text-xs font-semibold text-accent">第{lesson.no}回</p>
                      <p className="mt-1 text-sm font-semibold text-gray-900">{lesson.title}</p>
                      <p className="mt-2 text-xs text-gray-600">{lesson.summary}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-responsive space-y-8">
          <SectionHeading
            title="受講後に得られる3つの成果"
            description="知識・スキル・マインドの3軸で成長をサポート。受講後は自分で投資判断ができることをゴールに設計しています。"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <div key={outcome.category} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{outcome.category}</h3>
                <ul className="mt-4 space-y-3 text-sm text-gray-600">
                  {outcome.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-responsive space-y-10">
          <SectionHeading
            title="柔軟な受講スタイルと手厚いサポート"
            description="忙しい社会人でも学びやすいように、オンライン・オフライン両対応でサポート体制を整備しています。"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {supportItems.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {mainTextbook ? (
        <section className="section bg-gray-50">
          <div className="container-responsive space-y-10">
            <SectionHeading title="教材サンプル" description="受講生全員に配布するオリジナルテキストと演習資料の一部をご紹介します。" />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">{mainTextbook.title}</h3>
                <p className="text-sm text-gray-600">{mainTextbook.description}</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  {mainTextbook.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-gray-900">目次（抜粋）</h4>
                <ol className="space-y-2 text-sm text-gray-600">
                  {mainTextbook.tableOfContents.map((item) => (
                    <li key={item}>・{item}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section bg-white">
        <div className="container-responsive space-y-6">
          <SectionHeading
            title="受講料とお支払い方法"
            description="無料体験後に受講を決めていただいた方にのみ、正式なお申込み手続きのご案内を差し上げます。"
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {tuitionItems.map((item) => (
              <div key={item.label} className="rounded-2xl bg-gray-50 p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900">{item.label}</h3>
                <p className="mt-3 text-lg font-semibold text-accent">{item.value}</p>
                {item.note ? <p className="mt-2 text-xs text-gray-500">{item.note}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQPreview faqs={faqs} />

      <section className="bg-accent py-16 text-white md:py-24">
        <div className="container-responsive text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">無料体験でカリキュラムを詳しくご説明します</h2>
          <p className="mt-4 text-sm text-white/80">
            授業の進め方・教材サンプル・学習サポートについて講師が詳しくご案内。質疑応答の時間もご用意しています。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/seminar" className="btn-primary bg-white text-accent hover:bg-gray-100">
              無料体験セミナーの詳細を見る
            </Link>
            <Link href="/apply" className="btn-secondary border-white text-white hover:bg-white/10">
              直接申し込む
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<CurriculumPageProps> = async () => {
  const phases: Record<LessonPhase, Lesson[]> = {
    basic: getLessonsByPhase("basic"),
    practical: getLessonsByPhase("practical"),
    advanced: getLessonsByPhase("advanced"),
  }
  const textbooks = getTextbooks()
  const faqs = getFeaturedFAQs(5)

  return {
    props: {
      phases,
      textbooks,
      faqs,
    },
    revalidate: 60 * 60,
  }
}

