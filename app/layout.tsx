import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { LoadingScreen } from '@/components/loading-screen'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Malak Attared — Travel Storyteller',
    template: '%s — Malak Attared',
  },
  description:
    'Immersive travel stories from Qina to Greece by Malak Attared, content creator working at The British University in Egypt.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <LoadingScreen />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
