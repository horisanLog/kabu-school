import Head from "next/head"
import Link from "next/link"
import type { GetStaticProps } from "next"

import { getFAQs } from "@/lib/data-loader"
import type { FAQ } from "@/types"

import { Breadcrumb } from "@/components/ui/Breadcrumb"

interface FAQPageProps {
  faqs: FAQ[]
}

export default function FAQPage({ faqs }: FAQPageProps) {
  const grouped = faqs.reduce<Record<string, FAQ[]>>((acc, faq) => {
    const key = faq.categoryLabel
    acc[key] = [...(acc[key] ?? []), faq]
    return acc
  }, {})

  return (
    <>
      <Head>
        <title>よくあるご質問 | 株式投資スクール</title>
        <meta
          name="description"
          content="受講前によくいただくご質問と回答をカテゴリ別にまとめました。料金・受講形式・サポート体制などをご確認ください。"
        />
      </Head>

      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "よくあるご質問" },
        ]}
      />

      <section className="section bg-white">
        <div className="container-responsive space-y-10">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">よくあるご質問</h1>
            <p className="mt-2 text-sm text-gray-600">
              受講前に多く寄せられるご質問をカテゴリ別に掲載しています。解決しない場合はお問い合わせフォームよりご連絡ください。
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(grouped).map(([label, items]) => (
              <div key={label} className="space-y-4">
                <h2 className="text-lg font-semibold text-gray-900">{label}</h2>
                <div className="space-y-4">
                  {items
                    .sort((a, b) => a.order - b.order)
                    .map((faq) => (
                      <details key={faq.id} className="rounded-2xl border border-gray-100 bg-gray-50 p-4 shadow-sm">
                        <summary className="cursor-pointer text-sm font-semibold text-gray-900">
                          Q. {faq.question}
                        </summary>
                        <p className="mt-3 text-sm leading-relaxed text-gray-600">A. {faq.answer}</p>
                      </details>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">解決しない場合は</h2>
            <p className="mt-2 text-sm text-gray-600">
              個別のご相談はお問い合わせフォームまたは無料体験セミナーにて承っております。お気軽にご連絡ください。
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-accent">
              <Link href="/contact" className="btn-primary bg-accent text-white">
                お問い合わせフォームへ
              </Link>
              <Link href="/seminar" className="btn-secondary">
                セミナーで質問する
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<FAQPageProps> = async () => {
  const faqs = getFAQs().sort((a, b) => a.order - b.order)

  return {
    props: {
      faqs,
    },
    revalidate: 60 * 60,
  }
}

