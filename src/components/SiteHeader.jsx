'use client'

import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '@/i18n/LanguageSwitcher'
import useLangHref from '@/i18n/useLangHref'
import Logo from './Logo'
import { primaryButton, sizeSm } from './ui'

const NAV = [
  { href: '#funciones', key: 'nav.features' },
  { href: '#rangos', key: 'nav.ranks' },
  { href: '#preguntas', key: 'nav.faq' },
]

// Cabecera de todas las páginas. Fuera del inicio, las anclas llevan al inicio del idioma.
export default function SiteHeader({ home = false }) {
  const { t } = useTranslation('common')
  const langHref = useLangHref()
  const anchor = (hash) => (home ? hash : langHref('/') + hash)

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href={langHref('/')} aria-label="Repp">
          <Logo />
        </a>
        <nav aria-label={t('nav.sections')} className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={anchor(item.href)}
              className="text-sm font-medium text-muted transition-colors hover:text-white"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href={anchor('#descargar')}
            data-cta="header:download"
            className={`${primaryButton} ${sizeSm}`}
          >
            {t('nav.download')}
          </a>
        </div>
      </div>
    </header>
  )
}
