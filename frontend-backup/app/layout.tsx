import type { Metadata, Viewport } from 'next'
import '../src/styles/global.css'
import { EnquiryProvider } from '../src/components/EnquiryModal/EnquiryContext'
import Navbar from '../src/components/Navbar/Navbar'
import Footer from '../src/components/Footer/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'INNOVEL | IT Training & Placement', template: '%s' },
  description: 'Industry-focused IT training, career development and placement support from INNOVEL.',
  openGraph: { siteName: 'INNOVEL Training | Placement', type: 'website' },
}

export const viewport: Viewport = { themeColor: '#111b57', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..100,400..800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <EnquiryProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </EnquiryProvider>
      </body>
    </html>
  )
}
