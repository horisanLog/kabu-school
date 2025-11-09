import type { AppProps } from "next/app"
import { Noto_Sans_JP } from "next/font/google"

import "@/styles/globals.css"
import { SiteLayout } from "@/components/layouts/SiteLayout"

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${notoSansJP.variable} font-sans text-gray-800 antialiased`}
    >
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </div>
  )
}
