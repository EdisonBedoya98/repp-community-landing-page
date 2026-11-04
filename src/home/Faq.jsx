'use client'

import { Plus } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { eyebrow } from '@/components/ui'

// <details> nativo: abre y cierra sin JavaScript. Cada respuesta tiene que ser cierta hoy en
// prod; las mismas preguntas van al JSON-LD de la página.
export default function Faq() {
  const { t } = useTranslation('landing')
  const items = t('faq.items', { returnObjects: true })
  return (
    <section id="preguntas" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-24 sm:px-6">
      <p className={eyebrow}>{t('faq.eyebrow')}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl">
        {t('faq.title')}
      </h2>
      <div className="mt-10 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold [&::-webkit-details-marker]:hidden">
              {item.q}
              <Plus
                aria-hidden
                className="size-5 shrink-0 text-signal transition-transform group-open:rotate-45"
              />
            </summary>
            <p className="mt-3 pr-9 text-[15px] leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
