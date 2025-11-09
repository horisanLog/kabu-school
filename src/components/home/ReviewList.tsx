import Link from "next/link"

import type { Review } from "@/types"

interface ReviewListProps {
  reviews: Review[]
}

function renderStars(count: number) {
  return Array.from({ length: 5 }).map((_, index) => (
    <svg
      key={index}
      className={`h-5 w-5 ${
        index < Math.round(count) ? "text-yellow-400" : "text-gray-200"
      }`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ))
}

export function ReviewList({ reviews }: ReviewListProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-screen-lg px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            受講生の声
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            学び始めた受講生のリアルな体験談をご紹介します。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="rounded-2xl bg-gray-50 p-6 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div
                  className="h-12 w-12 rounded-full bg-accent/10"
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {review.age ? `${review.age}歳・` : ""}
                    {review.occupation}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1" aria-hidden>
                {renderStars(review.rating)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                {review.commentShort}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/voice"
            className="text-sm font-semibold text-accent transition hover:opacity-80"
          >
            💬 もっと受講生の声を見る
          </Link>
        </div>
      </div>
    </section>
  )
}
