"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

import type { Review, ReviewCategory } from "@/types"

const categoryLabels: Record<ReviewCategory | "all", string> = {
  all: "すべて",
  beginner: "初心者",
  intermediate: "中級者",
  female: "女性",
  businessman: "会社員",
  "self-employed": "自営業",
}

interface VoiceExplorerProps {
  reviews: Review[]
}

export function VoiceExplorer({ reviews }: VoiceExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<ReviewCategory | "all">("all")

  const categories = useMemo(() => {
    const set = new Set<ReviewCategory>()
    reviews.forEach((review) => review.categories.forEach((category) => set.add(category)))
    return Array.from(set)
  }, [reviews])

  const filtered = useMemo(() => {
    if (activeCategory === "all") return reviews
    return reviews.filter((review) => review.categories.includes(activeCategory))
  }, [activeCategory, reviews])

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {["all", ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category as ReviewCategory | "all")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeCategory === category
                ? "bg-accent text-white shadow"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {categoryLabels[category as ReviewCategory | "all"]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {filtered.map((review) => (
          <article key={review.id} className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-accent/10" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                <p className="text-xs text-gray-500">
                  {review.age ? `${review.age}歳・` : ""}
                  {review.occupation}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">{review.commentShort}</p>
            <Link
              href={`/voice/${review.id}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:opacity-80"
            >
              詳しく見る →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}

