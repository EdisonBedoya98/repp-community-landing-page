'use client'

import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES, isLang } from './config'

// Cambia /es/... por /en/... en la misma página. Es un enlace (no un botón): funciona sin
// JavaScript y Google lo sigue para encontrar la otra versión.
export default function LanguageSwitcher({ className = '' }) {
  const { i18n, t } = useTranslation('common')
  const pathname = usePathname() || '/'
  const current = i18n.language
  const other = current === 'es' ? 'en' : 'es'

  const parts = pathname.split('/').filter(Boolean)
  if (parts.length > 0 && isLang(parts[0])) parts[0] = other
  else parts.unshift(other)
  const target = '/' + parts.join('/')

  const label = t('language.switchTo', { language: t(`language.${other}`) })

  return (
    <a
      href={target}
      hrefLang={other}
      aria-label={label}
      title={label}
      className={
        'inline-flex items-center gap-1 rounded-full border border-line px-3 py-1.5 text-xs font-semibold tracking-widest text-muted uppercase transition-colors hover:text-white ' +
        className
      }
    >
      {SUPPORTED_LANGUAGES.map((lng, i) => (
        <span key={lng} className="inline-flex items-center">
          <span className={lng === current ? 'text-signal' : ''}>{lng.toUpperCase()}</span>
          {i < SUPPORTED_LANGUAGES.length - 1 && <span className="mx-1 opacity-40">/</span>}
        </span>
      ))}
    </a>
  )
}
