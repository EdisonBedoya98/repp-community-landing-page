import AffiliateProgram from '@/affiliate/AffiliateProgram'
import I18nProvider from '@/i18n/I18nProvider'
import { getResources } from '@/i18n/resources'
import { PAGE_META, pageMetadata } from '@/lib/metadata'

export async function generateMetadata({ params }) {
  const { lang } = await params
  return pageMetadata({ lang, path: '/affiliate', ...PAGE_META.affiliate[lang] })
}

export default async function Page({ params }) {
  const { lang } = await params
  return (
    <I18nProvider lang={lang} resources={getResources(lang, ['common', 'affiliate'])}>
      <AffiliateProgram />
    </I18nProvider>
  )
}
