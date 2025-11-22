import Head from "next/head"
import Link from "next/link"

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>ページが見つかりません | 株式会社EMA</title>
      </Head>
      <section className="section bg-white">
        <div className="container-responsive text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">404 Not Found</p>
          <h1 className="mt-4 text-3xl font-semibold text-gray-900">お探しのページが見つかりませんでした</h1>
          <p className="mt-3 text-sm text-gray-600">
            URL が変更されたか、ページが削除された可能性があります。以下のリンクから目的の情報をお探しください。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary bg-accent text-white">
              トップページへ戻る
            </Link>
            <Link href="/sitemap" className="btn-secondary">
              サイトマップを見る
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

