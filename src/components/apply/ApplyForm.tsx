"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { useForm } from "react-hook-form"

import type { Event } from "@/types"
import { applyFormSchema, participationTypes, type ApplyFormValues } from "@/schemas/apply-form"

interface ApplySessionData extends ApplyFormValues {
  scheduleLabel?: string
}

interface ApplyFormProps {
  events: Event[]
  defaultScheduleId?: string
}

export function ApplyForm({ events, defaultScheduleId }: ApplyFormProps) {
  const router = useRouter()

  const sortedEvents = useMemo(
    () => [...events].sort((a, b) => a.date.localeCompare(b.date)),
    [events],
  )

  const form = useForm<ApplyFormValues>({
    resolver: zodResolver(applyFormSchema),
    defaultValues: {
      name: "",
      furigana: "",
      email: "",
      phone: "",
      scheduleId: defaultScheduleId ?? sortedEvents[0]?.id ?? "",
      participationType: sortedEvents[0]?.location ?? "online",
      question: "",
      agreePrivacy: false,
    },
  })

  const formatEventLabel = (event: Event | undefined) => {
    if (!event) return ""
    const dateLabel = new Date(event.date).toLocaleDateString("ja-JP", {
      month: "long",
      day: "numeric",
      weekday: "short",
    })
    const locationLabel = event.location === "online" ? "オンライン" : event.location === "tokyo" ? "東京会場" : "大阪会場"
    return `${dateLabel} ${event.startTime}〜${event.endTime}（${locationLabel}）`
  }

  const onSubmit = (values: ApplyFormValues) => {
    const selectedEvent = sortedEvents.find((event) => event.id === values.scheduleId)
    const payload: ApplySessionData = {
      ...values,
      scheduleLabel: formatEventLabel(selectedEvent),
    }
    sessionStorage.setItem("applyFormData", JSON.stringify(payload))
    router.push("/apply/confirm")
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="space-y-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-gray-900">
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...form.register("name")}
            className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="例：山田 太郎"
          />
          {form.formState.errors.name ? (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900">
            フリガナ <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...form.register("furigana")}
            className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="例：ヤマダ タロウ"
          />
          {form.formState.errors.furigana ? (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.furigana.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-gray-900">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            {...form.register("email")}
            className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="例：example@email.com"
          />
          {form.formState.errors.email ? (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.email.message}</p>
          ) : null}
          <p className="mt-1 text-xs text-gray-500">※ 確認メールをお送りします</p>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900">
            電話番号 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            {...form.register("phone")}
            className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="例：090-1234-5678"
          />
          {form.formState.errors.phone ? (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.phone.message}</p>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-gray-900">
            希望日時（第1希望） <span className="text-red-500">*</span>
          </label>
          <select
            {...form.register("scheduleId")}
            className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          >
            <option value="">選択してください</option>
            {sortedEvents.map((event) => (
              <option key={event.id} value={event.id}>
                {formatEventLabel(event)}
              </option>
            ))}
          </select>
          {form.formState.errors.scheduleId ? (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.scheduleId.message}</p>
          ) : null}
        </div>
        <div>
          <span className="block text-sm font-semibold text-gray-900">
            参加形態 <span className="text-red-500">*</span>
          </span>
          <div className="mt-3 space-y-2">
            {participationTypes.map((type) => (
              <label key={type} className="flex items-center gap-3 text-sm text-gray-700">
                <input
                  type="radio"
                  value={type}
                  {...form.register("participationType")}
                  className="h-4 w-4 text-accent focus:ring-accent"
                />
                <span>
                  {type === "online" ? "オンライン参加（Zoom）" : type === "tokyo" ? "東京会場で参加" : "大阪会場で参加"}
                </span>
              </label>
            ))}
          </div>
          {form.formState.errors.participationType ? (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.participationType.message}</p>
          ) : null}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900">ご質問・ご要望（任意）</label>
        <textarea
          rows={4}
          {...form.register("question")}
          className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="事前に聞いておきたいことがあればご記入ください"
        />
        <p className="mt-1 text-xs text-gray-500">500文字以内</p>
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-gray-700">
          <input
            type="checkbox"
            {...form.register("agreePrivacy")}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent"
          />
          <span>
            <Link href="/privacy" className="text-accent underline">
              プライバシーポリシー
            </Link>
            に同意する（必須）
          </span>
        </label>
        {form.formState.errors.agreePrivacy ? (
          <p className="mt-1 text-xs text-red-500">{form.formState.errors.agreePrivacy.message}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-gray-500">
          送信ボタンをクリックすると確認画面へ進みます。まだお申し込みは完了しません。
        </p>
        <button
          type="submit"
          className="btn-primary inline-flex items-center justify-center bg-accent px-6 py-3 text-sm font-semibold text-white"
        >
          確認画面へ進む
        </button>
      </div>
    </form>
  )
}

