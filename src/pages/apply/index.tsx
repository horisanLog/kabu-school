import Head from "next/head"
import type { GetStaticProps } from "next"

import { getAvailableEvents } from "@/lib/data-loader"
import type { Event } from "@/types"

import { ApplyForm } from "@/components/apply/ApplyForm"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { PageHero } from "@/components/ui/PageHero"

interface ApplyPageProps {
  events: Event[]
}

export default function ApplyPage({ events }: ApplyPageProps) {
  return (
    <>
      <Head>
        <title>無料体験セミナー申込フォーム | 株式投資スクール</title>
        <meta
          name="description"
          content="無料体験セミナーへの参加申込フォーム。ご希望の日程と参加形態を選び、ご連絡先を入力してください。"
        />
      </Head>

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "無料体験セミナー", href: "/seminar" },
          { label: "申込フォーム" },
        ]}
      />

      <PageHero
        eyebrow="Apply"
        title="無料体験セミナー申込フォーム"
        subtitle="以下のフォームに必要事項をご入力ください。送信後に確認画面が表示されます。"
      >
        <p>
          お申し込みいただいた方には、事務局より確認メールをお送りします。メールが届かない場合は迷惑メールフォルダをご確認ください。
        </p>
      </PageHero>

      <section className="section bg-white">
        <div className="container-responsive">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-10">
            <ApplyForm events={events} />
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<ApplyPageProps> = async () => {
  const events = getAvailableEvents()

  return {
    props: {
      events,
    },
    revalidate: 60 * 60,
  }
}

