import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Oswald } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Hinojosa Remodeling & Construction | Houston, TX',
  description:
    'Hinojosa Remodeling & Construction handles new construction, commercial build-outs, additions, and full remodels for homes and businesses across the greater Houston, Texas area. Licensed, insured, and built on craftsmanship.',
  generator: 'v0.app',
  keywords: [
    'new construction Houston',
    'commercial build-out Houston',
    'general contractor Houston TX',
    'construction Houston TX',
    'home additions Houston',
    'kitchen and bath remodel',
    'home renovation Houston',
  ],
  openGraph: {
    title: 'Hinojosa Remodeling & Construction | Houston, TX',
    description:
      'New construction, commercial build-outs, additions, and full remodels for homes and businesses across the greater Houston, Texas area.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${oswald.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col bg-background">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
