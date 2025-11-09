import Head from "next/head"
import Link from "next/link"
import type { GetStaticPaths, GetStaticProps } from "next"

import { getReviewById, getReviews, getReviewsByCategory } from "@/lib/data-loader"
import type { Review } from "@/types"

import { Breadcrumb } from "@/components/ui/Breadcrumb"

interface VoiceDetailPageProps {
  review: Review
  related: Review[]
}

export default function VoiceDetailPage({ review, related }: VoiceDetailPageProps) {
  return (
    <>
      <Head>
        <title>{review.name} 様の声 | 株式投資スクール</title>
        <meta name="description" content={review.commentShort} />
      </Head>

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "受講生の声", href: "/voice" },
          { label: review.name },
        ]}
      />

      <section className="section bg-white">
        <div className="container-responsive space-y-6">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="h-20 w-20 rounded-full bg-accent/10" aria-hidden />
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">{review.name}</h1>
                <p className="mt-1 text-sm text-gray-600">
                  {review.age ? `${review.age}歳・` : ""}
                  {review.occupation}
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-6 text-sm text-gray-700">
              <section>
                <h2 className="text-base font-semibold text-gray-900">受講のきっかけ</h2>
                <p className="mt-2 whitespace-pre-line leading-relaxed">{review.beforeStatus}</p>
              </section>
              <section>
                <h2 className="text-base font-semibold text-gray-900">受講して得られたこと</h2>
                <p className="mt-2 whitespace-pre-line leading-relaxed">{review.commentLong}</p>
              </section>
              <section>
                <h2 className="text-base font-semibold text-gray-900">受講後の変化</h2>
                <p className="mt-2 whitespace-pre-line leading-relaxed">{review.afterStatus}</p>
              </section>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-gray-900">同じカテゴリの受講生</h2>
            <Link href="/voice" className="text-sm font-semibold text-accent">
              受講生の声一覧へ戻る →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((item) => (
              <article key={item.id} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                <p className="mt-1 text-xs text-gray-500">
                  {item.age ? `${item.age}歳・` : ""}
                  {item.occupation}
                </p>
                <p className="mt-3 text-sm text-gray-600">{item.commentShort}</p>
                <Link href={`/voice/${item.id}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  詳しく見る →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const reviews = getReviews()
  return {
    paths: reviews.map((review) => ({ params: { id: review.id } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<VoiceDetailPageProps> = async ({ params }) => {
  const id = params?.id as string
  const review = getReviewById(id)

  if (!review) {
    return { notFound: true }
  }

  const primaryCategory = review.categories[0]
  const related = getReviewsByCategory(primaryCategory).filter((item) => item.id !== id).slice(0, 3)

  return {
    props: {
      review,
      related,
    },
    revalidate: 60 * 60,
  }
}

