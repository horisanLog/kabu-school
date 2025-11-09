import Head from "next/head"
import type { GetStaticProps } from "next"

import { getFeaturedReviews, getReviews } from "@/lib/data-loader"
import type { Review } from "@/types"

import { ReviewList } from "@/components/home/ReviewList"
import { VoiceExplorer } from "@/components/voice/VoiceExplorer"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { PageHero } from "@/components/ui/PageHero"

interface VoicePageProps {
  reviews: Review[]
  featured: Review[]
}

export default function VoicePage({ reviews, featured }: VoicePageProps) {
  return (
    <>
      <Head>
        <title>受講生の声 | 株式投資スクール</title>
        <meta
          name="description"
          content="受講生の体験談や学びの成果をご紹介します。初心者から始めた方のリアルな声を掲載。"
        />
      </Head>

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "受講生の声" },
        ]}
      />

      <PageHero
        eyebrow="Voice"
        title="受講生の声"
        subtitle="初心者から始めた受講生の成長ストーリーをご紹介します。年代・学習目的ごとの体験談を参考にしてください。"
      />

      <ReviewList reviews={featured} />

      <section className="section bg-white">
        <div className="container-responsive space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">カテゴリから探す</h2>
          <VoiceExplorer reviews={reviews} />
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<VoicePageProps> = async () => {
  const reviews = getReviews()
  const featured = getFeaturedReviews(3)

  return {
    props: {
      reviews,
      featured,
    },
    revalidate: 60 * 60,
  }
}

