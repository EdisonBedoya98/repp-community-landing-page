import { Inter } from 'next/font/google'
import Analytics from '@/components/Analytics'
import { SUPPORTED_LANGUAGES } from '@/i18n/config'
import { APP_STORE_ID, SITE_URL } from '@/lib/links'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
  display: 'swap',
})

// Solo /es y /en: cualquier otro primer segmento lo redirige proxy.js antes de llegar aquí.
export const dynamicParams = false
export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }))
}

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Repp',
  icons: { icon: '/icon.png', apple: '/apple-icon.png' },
  openGraph: { type: 'website', siteName: 'Repp' },
  twitter: { card: 'summary_large_image' },
  // Banner de Safari en iPhone que abre o instala la app.
  other: { 'apple-itunes-app': `app-id=${APP_STORE_ID}` },
}

export const viewport = {
  themeColor: '#0d0d0d',
  colorScheme: 'dark',
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params
  return (
    <html lang={lang} className={inter.variable}>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
