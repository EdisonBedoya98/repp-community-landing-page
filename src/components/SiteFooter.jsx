'use client'

import { useTranslation } from 'react-i18next'
import useLangHref from '@/i18n/useLangHref'
import { APP_STORE_URL, COACH_URL, PLAY_STORE_URL, SUPPORT_EMAIL } from '@/lib/links'
import Logo from './Logo'

export default function SiteFooter() {
  const { t } = useTranslation('common')
  const langHref = useLangHref()

  const columns = [
    {
      title: t('footer.app'),
      links: [
        { href: APP_STORE_URL, label: 'App Store', cta: 'footer:app_store' },
        { href: PLAY_STORE_URL, label: 'Google Play', cta: 'footer:play_store' },
        { href: COACH_URL, label: t('footer.coach'), cta: 'footer:coach' },
        { href: langHref('/affiliate'), label: t('footer.affiliates') },
      ],
    },
    {
      title: t('footer.legal'),
      links: [
        { href: langHref('/privacy-policy'), label: t('footer.privacy') },
        { href: langHref('/terms-and-conditions'), label: t('footer.terms') },
        { href: langHref('/support'), label: t('footer.support') },
        { href: `mailto:${SUPPORT_EMAIL}`, label: SUPPORT_EMAIL },
      ],
    },
  ]

  return (
    <footer className="border-t border-line bg-panel">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{t('footer.tagline')}</p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-xs font-semibold tracking-[0.14em] text-dim uppercase">
              {column.title}
            </p>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-cta={link.cta}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="border-t border-line px-4 py-6 text-center text-xs text-dim">
        © {new Date().getFullYear()} Repp. {t('footer.rights')}
      </p>
    </footer>
  )
}
