"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"

import { contactFormSchema, inquiryTypes, type ContactFormValues } from "@/schemas/contact-form"

export function ContactForm() {
  const router = useRouter()

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "general",
      message: "",
      agreePrivacy: false,
    },
  })

  const onSubmit = (values: ContactFormValues) => {
    sessionStorage.setItem("contactFormData", JSON.stringify(values))
    router.push("/contact/thanks")
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
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-gray-900">電話番号（任意）</label>
          <input
            type="tel"
            {...form.register("phone")}
            className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            placeholder="例：090-1234-5678"
          />
          {form.formState.errors.phone ? (
            <p className="mt-1 text-xs text-red-500">{form.formState.errors.phone.message}</p>
          ) : null}
          <p className="mt-1 text-xs text-gray-500">※ 連絡が必要な場合にのみ使用します。</p>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-900">
            お問い合わせ種別 <span className="text-red-500">*</span>
          </label>
          <select
            {...form.register("inquiryType")}
            className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          >
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type === "general"
                  ? "サービス全般について"
                  : type === "curriculum"
                    ? "カリキュラム内容について"
                    : type === "payment"
                      ? "料金・支払いについて"
                      : "その他"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-900">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={6}
          {...form.register("message")}
          className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          placeholder="ご質問・ご要望などをご自由にお書きください"
        />
        {form.formState.errors.message ? (
          <p className="mt-1 text-xs text-red-500">{form.formState.errors.message.message}</p>
        ) : null}
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
        <p className="text-xs text-gray-500">内容を確認の上、2営業日以内に担当者よりご連絡いたします。</p>
        <button type="submit" className="btn-primary bg-accent text-white">
          送信する
        </button>
      </div>
    </form>
  )
}

