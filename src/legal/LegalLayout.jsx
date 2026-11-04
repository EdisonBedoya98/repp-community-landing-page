'use client'

import { useTranslation } from 'react-i18next'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'

// Marco de las páginas legales y de soporte. El texto viene tal cual de los JSON de cada
// política (no se reescribe en la migración a Next): solo cambian la cabecera y el pie.
export default function LegalLayout({ title, lastUpdated, children }) {
  const { t } = useTranslation('common')
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 px-4 pt-16 pb-24 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12">
            <h1 className="text-4xl font-black tracking-[-0.03em] uppercase italic sm:text-6xl">
              {title}
            </h1>
            {lastUpdated && (
              <p className="mt-4 text-sm tracking-widest text-dim uppercase">
                {t('legal.lastUpdated')} {lastUpdated}
              </p>
            )}
          </div>
          <article className="legal-prose">{children}</article>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
