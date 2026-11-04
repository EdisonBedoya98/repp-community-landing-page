'use client'

import { useTranslation } from 'react-i18next'
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/links'

// Botones de App Store y Google Play con los logos de cada tienda. `place` va a data-cta para
// medir desde qué parte de la página se descarga (docs: landing_cta_clicked).
const badge =
  'inline-flex items-center gap-3 rounded-xl border border-white/25 bg-black px-5 py-3 text-white transition-colors hover:border-white/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal'

export function AppStoreButton({ place }) {
  const { t } = useTranslation('common')
  return (
    <a href={APP_STORE_URL} data-cta={`${place}:app_store`} className={badge}>
      <svg aria-hidden className="size-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <span className="text-left">
        <span className="block text-[11px] leading-none opacity-80">
          {t('appStore.downloadOn')}
        </span>
        <span className="block text-lg leading-tight font-semibold">{t('appStore.appStore')}</span>
      </span>
    </a>
  )
}

export function PlayStoreButton({ place }) {
  const { t } = useTranslation('common')
  return (
    <a href={PLAY_STORE_URL} data-cta={`${place}:play_store`} className={badge}>
      <svg aria-hidden className="size-7" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M3.609 1.814L13.377 12l-9.768 10.186c-.392-.233-.609-.699-.609-1.306V3.12c0-.607.217-1.073.609-1.306z" />
        <path fill="#34A853" d="M17.441 8.472L14.177 12l3.264 3.528 3.702-2.135c.572-.33.857-.758.857-1.393s-.285-1.063-.857-1.393l-3.702-2.135z" />
        <path fill="#FBBC05" d="M3.609 1.814L14.177 12l3.264-3.528L6.277.362c-.488-.281-.997-.362-1.445-.362-.494 0-.922.173-1.223.514V1.814z" />
        <path fill="#EA4335" d="M3.609 22.186L14.177 12l3.264 3.528-11.164 6.11c-.488.281-.997.362-1.445.362-.494 0-.922-.173-1.223-.514v-1.3z" />
      </svg>
      <span className="text-left">
        <span className="block text-[11px] leading-none opacity-80">
          {t('playStore.downloadOn')}
        </span>
        <span className="block text-lg leading-tight font-semibold">{t('playStore.playStore')}</span>
      </span>
    </a>
  )
}

export default function StoreButtons({ place, className = '' }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <AppStoreButton place={place} />
      <PlayStoreButton place={place} />
    </div>
  )
}
