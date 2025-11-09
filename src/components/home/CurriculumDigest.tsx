import Link from "next/link"

import type { Lesson } from "@/types"

interface CurriculumDigestProps {
  lessons: Lesson[]
}

const phaseLabels: Record<Lesson["phase"], string> = {
  basic: "基礎編",
  practical: "実践編",
  advanced: "応用編",
}

export function CurriculumDigest({ lessons }: CurriculumDigestProps) {
  const grouped = lessons.reduce<Record<Lesson["phase"], Lesson[]>>(
    (acc, lesson) => {
      acc[lesson.phase] = [...(acc[lesson.phase] ?? []), lesson]
      return acc
    },
    { basic: [], practical: [], advanced: [] }
  )

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-screen-lg px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
            15回で投資家としての基礎を完成
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            初級・実践・応用の3フェーズで徐々にステップアップします。
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {(Object.keys(grouped) as Lesson["phase"][]).map((phase) => (
            <div key={phase} className="relative border-l-4 border-accent pl-6">
              <h3 className="text-lg font-semibold text-gray-900 md:text-xl">
                {phaseLabels[phase]}（第{grouped[phase][0]?.no ?? 0}〜第
                {grouped[phase][grouped[phase].length - 1]?.no ?? 0}回）
              </h3>
              <ul className="mt-4 space-y-3">
                {grouped[phase].slice(0, 5).map((lesson) => (
                  <li
                    key={lesson.no}
                    className="rounded-xl bg-white p-4 shadow-sm"
                  >
                    <p className="text-xs font-semibold text-accent">
                      第{lesson.no}回
                    </p>
                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      {lesson.title}
                    </p>
                    <p className="mt-1 text-xs text-gray-600">
                      {lesson.summary}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/curriculum"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:opacity-80"
          >
            📚 カリキュラムの詳細を見る
          </Link>
        </div>
      </div>
    </section>
  )
}
