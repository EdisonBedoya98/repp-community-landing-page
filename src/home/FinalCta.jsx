'use client'

import { useTranslation } from 'react-i18next'
import StoreButtons from '@/components/StoreButtons'
import QrCode from './QrCode'

export default function FinalCta({ qrSvg }) {
  const { t } = useTranslation('landing')
  return (
    <section id="descargar" className="scroll-mt-20 px-4 pb-24 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-line bg-card px-6 py-16 sm:px-12">
        <h2 className="text-4xl leading-[0.95] font-black tracking-[-0.03em] uppercase italic sm:text-6xl">
          {t('final.title')}
        </h2>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-5">
          <StoreButtons place="final" />
          <QrCode svg={qrSvg} caption={t('hero.qr')} />
        </div>
        <p className="mt-5 text-sm font-medium text-dim">{t('final.note')}</p>
      </div>
    </section>
  )
}
