import QRCode from 'qrcode'
import HomePage from '@/home/HomePage'
import I18nProvider from '@/i18n/I18nProvider'
import { getMessages, getResources } from '@/i18n/resources'
import { APP_STORE_URL, DOWNLOAD_URL, PLAY_STORE_URL, SITE_URL, SUPPORT_EMAIL } from '@/lib/links'
import { pageMetadata } from '@/lib/metadata'

export async function generateMetadata({ params }) {
  const { lang } = await params
  const { meta } = getMessages(lang, 'landing')
  return pageMetadata({ lang, title: meta.title, description: meta.description })
}

export default async function Page({ params }) {
  const { lang } = await params
  const landing = getMessages(lang, 'landing')

  // El QR se arma en el build: nada de librerías de QR en el navegador.
  const qrSvg = await QRCode.toString(DOWNLOAD_URL, {
    type: 'svg',
    margin: 0,
    errorCorrectionLevel: 'M',
    color: { dark: '#0d0d0dff', light: '#ffffffff' },
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#org`,
        name: 'Repp',
        url: SITE_URL,
        logo: `${SITE_URL}/repp-logo.png`,
        email: SUPPORT_EMAIL,
        sameAs: [APP_STORE_URL, PLAY_STORE_URL, 'https://reppcoach.com/'],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#web`,
        url: SITE_URL,
        name: 'Repp',
        inLanguage: lang,
        publisher: { '@id': `${SITE_URL}/#org` },
      },
      {
        '@type': 'MobileApplication',
        name: 'Repp',
        operatingSystem: 'iOS, Android',
        applicationCategory: 'HealthApplication',
        description: landing.meta.description,
        installUrl: [APP_STORE_URL, PLAY_STORE_URL],
        inLanguage: ['es', 'en'],
        isAccessibleForFree: true,
        publisher: { '@id': `${SITE_URL}/#org` },
      },
      {
        '@type': 'FAQPage',
        inLanguage: lang,
        mainEntity: landing.faq.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  }

  return (
    <I18nProvider lang={lang} resources={getResources(lang, ['common', 'landing'])}>
      <HomePage lang={lang} qrSvg={qrSvg} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
    </I18nProvider>
  )
}
