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
    'Hinojosa Remodeling & Construction delivers quality residential and commercial remodeling and construction across the greater Houston, Texas area. Licensed, insured, and built on craftsmanship.',
  generator: 'v0.app',
  keywords: [
    'remodeling Houston',
    'construction Houston TX',
    'kitchen remodel',
    'bathroom remodel',
    'commercial construction',
    'home renovation Houston',
  ],
  openGraph: {
    title: 'Hinojosa Remodeling & Construction | Houston, TX',
    description:
      'Quality residential and commercial remodeling and construction across the greater Houston, Texas area.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${oswald.variable} bg-background`}
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
