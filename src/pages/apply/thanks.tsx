"use client"

import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import type { ApplyFormValues } from "@/schemas/apply-form"

interface ApplySessionData extends ApplyFormValues {
  scheduleLabel?: string
}

import { Breadcrumb } from "@/components/ui/Breadcrumb"

export default function ApplyThanksPage() {
  const router = useRouter()
  const [formData] = useState<ApplySessionData | null>(() => {
    if (typeof window === "undefined") return null
    const stored = sessionStorage.getItem("applyConfirmationData")
    if (!stored) {
      return null
    }
    try {
      return JSON.parse(stored) as ApplySessionData
    } catch (error) {
      console.error(error)
      return null
    }
  })

  useEffect(() => {
    if (!formData) {
      router.replace("/apply")
      return
    }
    sessionStorage.removeItem("applyFormData")
    sessionStorage.removeItem("applyConfirmationData")
  }, [formData, router])

  return (
    <>
      <Head>
        <title>お申し込みありがとうございます | 株式投資スクール</title>
      </Head>

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "無料体験セミナー", href: "/seminar" },
          { label: "申込フォーム", href: "/apply" },
          { label: "完了" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-responsive">
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center shadow-sm">
            <h1 className="text-2xl font-semibold text-gray-900">お申し込みありがとうございます</h1>
            <p className="mt-4 text-sm text-gray-600">
              ご登録いただいたメールアドレス宛に確認メールをお送りしました。届かない場合は迷惑メールフォルダをご確認の上、事務局までお問い合わせください。
            </p>
            {formData ? (
              <div className="mt-6 space-y-1 text-sm text-gray-600">
                <p>{formData.name} 様</p>
                <p>ご入力いただいたメールアドレス：{formData.email}</p>
                {formData.scheduleLabel ? <p>お申し込み日時：{formData.scheduleLabel}</p> : null}
              </div>
            ) : null}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/schedule" className="btn-secondary">
                他の日程を見る
              </Link>
              <Link href="/" className="btn-primary bg-accent text-white">
                トップページへ戻る
              </Link>
            </div>
            <p className="mt-6 text-xs text-gray-400">
              ※ 体験セミナーの参加方法は開催前日までにメールでご案内します。
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

