"use client"

import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import type { ApplyFormValues } from "@/schemas/apply-form"

interface ApplySessionData extends ApplyFormValues {
  scheduleLabel?: string
}

import { Breadcrumb } from "@/components/ui/Breadcrumb"

export default function ApplyConfirmPage() {
  const router = useRouter()
  const [formData] = useState<ApplySessionData | null>(() => {
    if (typeof window === "undefined") return null
    const stored = sessionStorage.getItem("applyFormData")
    if (!stored) {
      return null
    }
    try {
      return JSON.parse(stored) as ApplySessionData
    } catch (error) {
      console.error("Invalid form data", error)
      return null
    }
  })

  useEffect(() => {
    if (!formData) {
      router.replace("/apply")
    }
  }, [formData, router])

  const handleBack = () => {
    router.push("/apply")
  }

  const handleSubmit = () => {
    if (!formData) return
    sessionStorage.setItem("applyConfirmationData", JSON.stringify(formData))
    router.push("/apply/thanks")
  }

  if (!formData) {
    return null
  }

  const participationLabel =
    formData.participationType === "online"
      ? "オンライン参加（Zoom）"
      : formData.participationType === "tokyo"
        ? "東京会場で参加"
        : "大阪会場で参加"

  return (
    <>
      <Head>
        <title>申込内容の確認 | 株式投資スクール</title>
      </Head>

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "無料体験セミナー", href: "/seminar" },
          { label: "申込フォーム", href: "/apply" },
          { label: "確認" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-responsive">
          <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="text-2xl font-semibold text-gray-900">入力内容の確認</h1>
            <p className="text-sm text-gray-600">以下の内容でお間違いがないか確認の上、「送信する」ボタンを押してください。</p>

            <dl className="space-y-4 rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">お名前</dt>
                <dd className="mt-2 text-sm text-gray-800">{formData.name}</dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">フリガナ</dt>
                <dd className="mt-2 text-sm text-gray-800">{formData.furigana}</dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">メールアドレス</dt>
                <dd className="mt-2 text-sm text-gray-800">{formData.email}</dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">電話番号</dt>
                <dd className="mt-2 text-sm text-gray-800">{formData.phone}</dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">希望日時</dt>
                <dd className="mt-2 text-sm text-gray-800">
                  {formData.scheduleLabel ?? formData.scheduleId}
                </dd>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">参加形態</dt>
                <dd className="mt-2 text-sm text-gray-800">{participationLabel}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">ご質問・ご要望</dt>
                <dd className="mt-2 text-sm text-gray-800">{formData.question ? formData.question : "（未入力）"}</dd>
              </div>
            </dl>

            <div className="flex flex-col gap-3 md:flex-row md:justify-end">
              <button
                type="button"
                onClick={handleBack}
                className="btn-secondary border-gray-300 text-gray-800"
              >
                修正する
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="btn-primary bg-accent text-white"
              >
                送信する
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

