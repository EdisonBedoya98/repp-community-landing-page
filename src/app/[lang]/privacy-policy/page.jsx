import PrivacyPolicy from '@/legal/PrivacyPolicy'
import I18nProvider from '@/i18n/I18nProvider'
import { getResources } from '@/i18n/resources'
import { PAGE_META, pageMetadata } from '@/lib/metadata'

export async function generateMetadata({ params }) {
  const { lang } = await params
  return pageMetadata({ lang, path: '/privacy-policy', ...PAGE_META.privacy[lang] })
}

export default async function Page({ params }) {
  const { lang } = await params
  return (
    <I18nProvider lang={lang} resources={getResources(lang, ['common', 'privacy'])}>
      <PrivacyPolicy />
    </I18nProvider>
  )
}
