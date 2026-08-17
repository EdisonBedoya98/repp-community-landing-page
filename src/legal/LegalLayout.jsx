import { useTranslation } from "react-i18next"
import BrandIcon from "../BrandIcon.jsx"
import LanguageSwitcher from "../i18n/LanguageSwitcher.jsx"
import useLangHref from "../i18n/useLangHref.js"

function Sparkle({ className = "" }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  )
}

export default function LegalLayout({ title, lastUpdated, children }) {
  const { t } = useTranslation("common")
  const langHref = useLangHref()
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href={langHref("/")} className="flex items-center gap-2">
            <BrandIcon />
            <span className="text-xl font-extrabold uppercase tracking-wider">Repp</span>
          </a>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href={langHref("/")}
              className="hidden sm:inline text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
            >
              {t("nav.backHome")}
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lime/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="mb-12">
            <Sparkle className="w-6 h-6 text-lime mb-4" />
            <h1 className="text-5xl sm:text-6xl font-black uppercase tracking-tighter mb-4">
              {title}
            </h1>
            {lastUpdated && (
              <p className="text-sm text-gray-500 uppercase tracking-widest">
                {t("legal.lastUpdated")} {lastUpdated}
              </p>
            )}
          </div>

          <article className="legal-prose">{children}</article>
        </div>
      </main>

      <div className="max-w-4xl mx-auto px-6 w-full">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <footer className="py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BrandIcon />
            <span className="font-extrabold uppercase tracking-wider">Repp</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href={langHref("/affiliate")} className="text-gray-500 hover:text-white transition-colors">
              {t("footer.affiliatesShort")}
            </a>
            <a href={langHref("/privacy-policy")} className="text-gray-500 hover:text-white transition-colors">
              {t("footer.privacyShort")}
            </a>
            <a href={langHref("/support")} className="text-gray-500 hover:text-white transition-colors">
              {t("footer.supportShort")}
            </a>
            <a href={langHref("/terms-and-conditions")} className="text-gray-500 hover:text-white transition-colors">
              {t("footer.termsShort")}
            </a>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Repp.
          </p>
        </div>
      </footer>
    </div>
  )
}
