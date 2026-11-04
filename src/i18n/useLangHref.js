'use client'

import { useTranslation } from 'react-i18next'

// Antepone el idioma de la página a una ruta interna: langHref('/support') → '/es/support'.
export default function useLangHref() {
  const { i18n } = useTranslation()
  const lang = i18n.language

  return (href) => {
    if (!href) return href
    if (/^(https?:|mailto:|tel:|#)/i.test(href)) return href
    if (!href.startsWith('/')) return href
    const stripped = href.replace(/^\/+/, '')
    return '/' + [lang, stripped].filter(Boolean).join('/')
  }
}
