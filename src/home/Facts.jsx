'use client'

import { Dumbbell, Languages, Smartphone, WifiOff } from 'lucide-react'
import { useTranslation } from 'react-i18next'

// Solo hechos del producto: el catálogo de prod tiene 1.331 ejercicios (1.326 con GIF, 4-nov-2026).
export default function Facts() {
  const { t } = useTranslation('landing')
  const facts = [
    { icon: Dumbbell, label: t('facts.exercises') },
    { icon: WifiOff, label: t('facts.offline') },
    { icon: Smartphone, label: t('facts.platforms') },
    { icon: Languages, label: t('facts.spanish') },
  ]
  return (
    <section aria-label={t('facts.label')} className="border-y border-line bg-panel">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-5 px-4 py-7 sm:px-6 lg:grid-cols-4">
        {facts.map(({ icon: Icon, label }) => (
          <li key={label} className="flex items-center gap-3 text-sm font-semibold text-white">
            <Icon aria-hidden className="size-5 shrink-0 text-signal" strokeWidth={2.2} />
            {label}
          </li>
        ))}
      </ul>
    </section>
  )
}
