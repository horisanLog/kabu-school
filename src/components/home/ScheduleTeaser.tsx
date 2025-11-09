import Link from "next/link"

import type { Event } from "@/types"

interface ScheduleTeaserProps {
  events: Event[]
}

const statusLabel: Record<
  Event["status"],
  { text: string; className: string }
> = {
  available: { text: "◯ 余裕あり", className: "text-green-500" },
  few: { text: "△ 残りわずか", className: "text-amber-500" },
  full: { text: "× 満席", className: "text-red-500" },
  closed: { text: "受付終了", className: "text-gray-400" },
}

const locationLabel: Record<Event["location"], string> = {
  online: "オンライン",
  tokyo: "東京",
  osaka: "大阪",
}

export function ScheduleTeaser({ events }: ScheduleTeaserProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-screen-lg px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
              直近の開催スケジュール
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              ご希望の日程・地域を選んで無料体験に参加いただけます。
            </p>
          </div>
          <Link
            href="/schedule"
            className="inline-flex items-center gap-2 rounded-xl border border-accent px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white"
          >
            📅 全スケジュールを見る
          </Link>
        </div>

        <div className="mt-8 space-y-4">
          {events.map((event) => (
            <article
              key={event.id}
              className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                  <span className="text-lg font-semibold text-gray-900">
                    {new Date(event.date).toLocaleDateString("ja-JP", {
                      month: "long",
                      day: "numeric",
                      weekday: "short",
                    })}
                    {event.startTime && ` ${event.startTime}〜${event.endTime}`}
                  </span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {locationLabel[event.location]}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      statusLabel[event.status].className
                    }`}
                  >
                    {statusLabel[event.status].text}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  担当講師：{event.instructor}
                </p>
              </div>
              <Link
                href={event.entryUrl}
                className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                この日程で申し込む
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
