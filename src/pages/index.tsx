import Head from "next/head"
import type { GetStaticProps } from "next"

import {
  getAvailableEvents,
  getFeaturedFAQs,
  getFeaturedReviews,
  getInstructors,
  getLessons,
  getSettings,
} from "@/lib/data-loader"
import type { Event, FAQ, Instructor, Lesson, Review, Settings } from "@/types"

import { BenefitGrid } from "@/components/home/BenefitGrid"
import { CurriculumDigest } from "@/components/home/CurriculumDigest"
import { FAQPreview } from "@/components/home/FAQPreview"
import { FinalCTA } from "@/components/home/FinalCTA"
import { Hero } from "@/components/home/Hero"
import { InstructorCards } from "@/components/home/InstructorCards"
import { LeadStrip } from "@/components/home/LeadStrip"
import { ReviewList } from "@/components/home/ReviewList"
import { ScheduleTeaser } from "@/components/home/ScheduleTeaser"
import { Stats } from "@/components/home/Stats"

interface HomePageProps {
  settings: Settings
  events: Event[]
  reviews: Review[]
  instructors: Instructor[]
  lessons: Lesson[]
  faqs: FAQ[]
}

export default function HomePage({
  settings,
  events,
  reviews,
  instructors,
  lessons,
  faqs,
}: HomePageProps) {
  return (
    <>
      <Head>
        <title>株式投資スクール | 投資を、学ぶ力に変える</title>
        <meta
          name="description"
          content="初心者から始める株式投資スクール。実践的な15回カリキュラムで、自分で判断できる投資家へ。無料体験セミナー受付中。"
        />
        <meta
          property="og:title"
          content="株式投資スクール | 投資を、学ぶ力に変える"
        />
        <meta
          property="og:description"
          content="初心者から始める株式投資スクール。実践的な15回カリキュラムで、自分で判断できる投資家へ。"
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

      <Hero hero={settings.hero} ctaLabel={settings.cta.primary} />
      <Stats stats={settings.stats} />
      <BenefitGrid />
      <CurriculumDigest lessons={lessons} />
      <LeadStrip />
      <ReviewList reviews={reviews} />
      <InstructorCards instructors={instructors} />
      <ScheduleTeaser events={events} />
      <FAQPreview faqs={faqs} />
      <FinalCTA />
    </>
  )
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const settings = getSettings()
  const events = getAvailableEvents(3)
  const reviews = getFeaturedReviews(3)
  const instructors = getInstructors().slice(0, 3)
  const lessons = getLessons()
  const faqs = getFeaturedFAQs(5)

  return {
    props: {
      settings,
      events,
      reviews,
      instructors,
      lessons,
      faqs,
    },
    revalidate: 60 * 60,
  }
}
