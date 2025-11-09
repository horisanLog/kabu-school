"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

import type { FAQ } from "@/types"

interface FAQPreviewProps {
  faqs: FAQ[]
}

export function FAQPreview({ faqs }: FAQPreviewProps) {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null)

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-screen-lg px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">
              よくあるご質問
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              受講前にいただくお問い合わせの中から、特によくある質問をまとめました。
            </p>
          </div>
          <Link href="/faq" className="text-sm font-semibold text-accent transition hover:opacity-80">
            すべての質問を見る →
          </Link>
        </div>

        <div className="mt-8 space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => handleToggle(faq.id)}
                >
                  <span className="text-sm font-semibold text-gray-900">
                    Q. {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-accent transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {isOpen ? (
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    A. {faq.answer}
                  </p>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
