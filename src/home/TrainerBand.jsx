'use client'

import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { eyebrow } from '@/components/ui'
import { COACH_URL } from '@/lib/links'

// El producto para entrenadores (reppcoach.com) vive aparte; desde aquí solo se le señala.
export default function TrainerBand() {
  const { t } = useTranslation('landing')
  return (
    <section className="border-y border-line bg-panel">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className={eyebrow}>{t('trainer.eyebrow')}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.02em]">{t('trainer.title')}</h2>
          <p className="mt-2 max-w-xl text-base text-muted">{t('trainer.text')}</p>
        </div>
        <a
          href={COACH_URL}
          data-cta="trainer:coach"
          className="inline-flex shrink-0 items-center gap-2 rounded-[10px] border border-line bg-card px-5 py-3 text-[15px] font-semibold transition-colors hover:border-dim"
        >
          {t('trainer.button')} <ArrowRight aria-hidden className="size-4 text-signal" />
        </a>
      </div>
    </section>
  )
}
