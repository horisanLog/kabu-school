"use client"

import Link from "next/link"
import { useMemo, useState } from "react"

import type { Event, EventLocation, EventStatus } from "@/types"

const locationLabels: Record<EventLocation, string> = {
  online: "オンライン",
  tokyo: "東京",
  osaka: "大阪",
}

const statusStyles: Record<EventStatus, string> = {
  available: "text-green-500",
  few: "text-amber-500",
  full: "text-red-500",
  closed: "text-gray-400",
}

const statusLabels: Record<EventStatus, string> = {
  available: "◯ 余裕あり",
  few: "△ 残りわずか",
  full: "× 満席",
  closed: "受付終了",
}

interface ScheduleExplorerProps {
  events: Event[]
}

export function ScheduleExplorer({ events }: ScheduleExplorerProps) {
  const months = useMemo(() => {
    const set = new Set<string>()
    events.forEach((event) => {
      const month = event.date.slice(0, 7)
      set.add(month)
    })
    return Array.from(set).sort()
  }, [events])

  const [filters, setFilters] = useState({
    month: months[0] ?? "",
    location: "all" as "all" | EventLocation,
    onlineOnly: false,
  })

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesMonth = filters.month ? event.date.startsWith(filters.month) : true
      const matchesLocation = filters.location === "all" ? true : event.location === filters.location
      const matchesOnline = filters.onlineOnly ? event.location === "online" : true
      return matchesMonth && matchesLocation && matchesOnline
    })
  }, [events, filters])

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-3">
        <div>
          <label className="block text-sm font-semibold text-gray-900">月で絞り込む</label>
          <select
            value={filters.month}
            onChange={(event) => setFilters((prev) => ({ ...prev, month: event.target.value }))}
            className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {new Date(`${month}-01`).toLocaleDateString("ja-JP", { year: "numeric", month: "long" })}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900">地域で絞り込む</label>
          <select
            value={filters.location}
            onChange={(event) =>
              setFilters((prev) => ({ ...prev, location: event.target.value as "all" | EventLocation }))
            }
            className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          >
            <option value="all">すべて</option>
            <option value="online">オンライン</option>
            <option value="tokyo">東京会場</option>
            <option value="osaka">大阪会場</option>
          </select>
        </div>

        <label className="flex items-center gap-3 text-sm font-semibold text-gray-900">
          <input
            type="checkbox"
            checked={filters.onlineOnly}
            onChange={(event) => setFilters((prev) => ({ ...prev, onlineOnly: event.target.checked }))}
            className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
          />
          オンライン開催のみ表示する
        </label>
      </div>

      <div className="space-y-4">
        {filteredEvents.length === 0 ? (
          <p className="text-sm text-gray-500">該当する開催日程が見つかりませんでした。別の条件をお試しください。</p>
        ) : null}

        {filteredEvents.map((event) => {
          const dateLabel = new Date(event.date).toLocaleDateString("ja-JP", {
            month: "long",
            day: "numeric",
            weekday: "short",
          })

          return (
            <article
              key={event.id}
              className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                  <span className="text-lg font-semibold text-gray-900">
                    {dateLabel} {event.startTime}〜{event.endTime}
                  </span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {locationLabels[event.location]}
                  </span>
                  <span className={`text-xs font-semibold ${statusStyles[event.status]}`}>
                    {statusLabels[event.status]}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">担当講師：{event.instructor}</p>
              </div>
              <Link href={event.entryUrl} className="btn-primary bg-accent text-white hover:opacity-90">
                この日程で申し込む
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

