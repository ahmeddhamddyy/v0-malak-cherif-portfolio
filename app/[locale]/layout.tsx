import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Noto_Naskh_Arabic } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LoadingScreen } from '@/components/loading-screen'
import '../globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})
const notoArabic = Noto_Naskh_Arabic({
  variable: '--font-arabic',
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Malak Attared — Travel Storyteller',
    template: '%s — Malak Attared',
  },
  description:
    'Immersive travel stories from Qina to Greece by Malak Attared, content creator working at The British University in Egypt.',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
  },
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = await getMessages()
  const isRtl = locale === 'ar'

  return (
    <html
      lang={locale}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`${inter.variable} ${playfair.variable} ${notoArabic.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <LoadingScreen />
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </NextIntlClientProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
