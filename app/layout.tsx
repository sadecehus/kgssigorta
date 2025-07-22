import type React from "react"
import type { Metadata } from "next"
import { Nunito_Sans } from "next/font/google"
import "./globals.css"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "KGS SİGORTA – Araç, Sağlık, Konut Sigortaları | İzmit Kocaeli",
  description:
    "KGS Sigorta - İzmit Kocaeli'nin güvenilir sigorta aracısı. Hepiyi, Orient ve Sompo Sigorta ile çalışarak size en uygun teklifi sunuyoruz. Araç, sağlık ve konut sigortaları için hemen teklif alın.",
  keywords:
    "KGS Sigorta, İzmit sigorta, Kocaeli sigorta, kasko, trafik, sağlık sigortası, konut sigortası, DASK, sigorta aracısı, Hepiyi, Orient, Sompo",
  openGraph: {
    title: "KGS SİGORTA – İzmit Kocaeli'nin Güvenilir Sigorta Aracısı",
    description: "Araç, sağlık ve konut sigortalarında uzman ekibimizle size en uygun çözümleri sunuyoruz.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "KGS SİGORTA",
    description: "İzmit Kocaeli'nin güvenilir sigorta aracısı",
  },
    generator: 'Hüseyin Kocatürk',
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
      shortcut: "/favicon-32x32.png",
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  )
}
