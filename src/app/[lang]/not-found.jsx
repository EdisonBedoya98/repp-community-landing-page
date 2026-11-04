'use client'

import { useParams } from 'next/navigation'
import Logo from '@/components/Logo'
import { primaryButton, sizeMd } from '@/components/ui'

const COPY = {
  es: { title: 'Esta página no existe.', back: 'Volver al inicio' },
  en: { title: 'This page does not exist.', back: 'Back to home' },
}

export default function NotFound() {
  const params = useParams()
  const lang = params?.lang === 'es' ? 'es' : 'en'
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-4 text-center">
      <Logo />
      <h1 className="text-3xl font-black tracking-[-0.03em] uppercase italic sm:text-5xl">
        {COPY[lang].title}
      </h1>
      <a href={`/${lang}`} className={`${primaryButton} ${sizeMd}`}>
        {COPY[lang].back}
      </a>
    </main>
  )
}
