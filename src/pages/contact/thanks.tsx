"use client"

import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import type { ContactFormValues } from "@/schemas/contact-form"

import { Breadcrumb } from "@/components/ui/Breadcrumb"

export default function ContactThanksPage() {
  const router = useRouter()
  const [formData] = useState<ContactFormValues | null>(() => {
    if (typeof window === "undefined") return null
    const stored = sessionStorage.getItem("contactFormData")
    if (!stored) return null
    try {
      return JSON.parse(stored) as ContactFormValues
    } catch (error) {
      console.error(error)
      return null
    }
  })

  useEffect(() => {
    if (!formData) {
      router.replace("/contact")
      return
    }
    sessionStorage.removeItem("contactFormData")
  }, [formData, router])

  if (!formData) {
    return null
  }

  return (
    <>
      <Head>
        <title>お問い合わせありがとうございます | 株式投資スクール</title>
      </Head>

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "お問い合わせ", href: "/contact" },
          { label: "送信完了" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-responsive">
          <div className="mx-auto max-w-2xl rounded-2xl border border-gray-100 bg-gray-50 p-8 text-center shadow-sm">
            <h1 className="text-2xl font-semibold text-gray-900">お問い合わせを受け付けました</h1>
            <p className="mt-4 text-sm text-gray-600">
              {formData.name} 様、ありがとうございます。内容を確認の上、2営業日以内に担当者よりご連絡いたします。お急ぎの場合はお電話（0120-123-456）をご利用ください。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/faq" className="btn-secondary">
                FAQを見る
              </Link>
              <Link href="/" className="btn-primary bg-accent text-white">
                トップページへ戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

