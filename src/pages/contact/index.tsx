import Head from "next/head"
import Link from "next/link"

import { ContactForm } from "@/components/contact/ContactForm"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { PageHero } from "@/components/ui/PageHero"

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>お問い合わせ | 株式投資スクール</title>
        <meta
          name="description"
          content="サービス内容やカリキュラムに関するご質問は、お問い合わせフォームよりお気軽にご連絡ください。"
        />
      </Head>

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "お問い合わせ" },
        ]}
      />

      <PageHero
        eyebrow="Contact"
        title="お問い合わせ"
        subtitle="サービス内容・料金・カリキュラムに関するご質問や資料請求のご希望など、お気軽にご相談ください。"
      >
        <p>
          お急ぎの方はお電話（0120-123-456 / 平日10:00-19:00）でも承っております。無料体験セミナーで直接ご相談いただくことも可能です。
        </p>
      </PageHero>

      <section className="section bg-white">
        <div className="container-responsive">
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-10">
            <ContactForm />
          </div>
          <div className="mt-8 rounded-2xl bg-gray-50 p-6 text-sm text-gray-600">
            <p>
              よくあるご質問は<Link href="/faq" className="text-accent underline">FAQ</Link>にまとめております。あわせてご確認ください。
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

