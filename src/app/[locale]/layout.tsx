import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { notFound } from "next/navigation"
import { hasLocale, NextIntlClientProvider } from "next-intl"

import { routing } from "../../i18n/routing"

import "./globals.css"
import "../../controls/styles.scss"

const font = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Forma App",
  description: "Forma app",
}

async function RootLayout({ children, params }: Readonly<{
  children: React.ReactNode, params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) notFound()

  return (
    <html lang={locale}>
      <body className={`${font.className}`}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout