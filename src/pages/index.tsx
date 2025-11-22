import Head from "next/head"
import type { GetStaticProps } from "next"

import { getFeaturedFAQs, getLessons, getSettings } from "@/lib/data-loader"
import type { FAQ, Lesson, Settings } from "@/types"

import { BenefitGrid } from "@/components/home/BenefitGrid"
import { CurriculumDigest } from "@/components/home/CurriculumDigest"
import { FAQPreview } from "@/components/home/FAQPreview"
import { Hero } from "@/components/home/Hero"
import { Stats } from "@/components/home/Stats"
import { LineFloatingButton } from "@/components/ui/LineFloatingButton"

interface HomePageProps {
  settings: Settings
  lessons: Lesson[]
  faqs: FAQ[]
}

export default function HomePage({ settings, lessons, faqs }: HomePageProps) {
  return (
    <>
      <Head>
        <title>株式会社EMA | 投資を、学ぶ力に変える</title>
        <meta
          name="description"
          content="初心者から始める株式会社EMA。実践的な15回カリキュラムで、自分で判断できる投資家へ。無料体験セミナー受付中。"
        />
        <meta
          property="og:title"
          content="株式会社EMA | 投資を、学ぶ力に変える"
        />
        <meta
          property="og:description"
          content="初心者から始める株式会社EMA。実践的な15回カリキュラムで、自分で判断できる投資家へ。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com" />
        <meta
          property="og:image"
          content="https://example.com/images/og-image.jpg"
        />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Hero hero={settings.hero} />
      <Stats stats={settings.stats} />
      <BenefitGrid />
      <CurriculumDigest lessons={lessons} />
      <FAQPreview faqs={faqs} />
      <LineFloatingButton />
    </>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const settings = getSettings()
  const lessons = getLessons()
  const faqs = getFeaturedFAQs(5)

  return {
    props: {
      settings,
      lessons,
      faqs,
    },
    revalidate: 60 * 60,
  }
}
