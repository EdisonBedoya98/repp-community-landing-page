import { useTranslation } from "react-i18next"
import { useLocation, useNavigate } from "react-router-dom"
import { SUPPORTED_LANGUAGES, normalizeLng } from "./index.js"

export default function LanguageSwitcher({ className = "" }) {
  const { i18n, t } = useTranslation("common")
  const navigate = useNavigate()
  const location = useLocation()
  const current = normalizeLng(i18n.resolvedLanguage || i18n.language)

  const switchTo = (next) => {
    if (next === current) return
    const parts = location.pathname.split("/").filter(Boolean)
    if (parts.length > 0 && SUPPORTED_LANGUAGES.includes(parts[0])) {
      parts[0] = next
    } else {
      parts.unshift(next)
    }
    const target = "/" + parts.join("/") + location.search + location.hash
    navigate(target)
  }

  const other = current === "es" ? "en" : "es"

  return (
    <button
      onClick={() => switchTo(other)}
      type="button"
      aria-label={t("language.switchTo")}
      className={
        "inline-flex items-center gap-1 text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors border border-white/10 rounded-full px-3 py-1.5 " +
        className
      }
    >
      {SUPPORTED_LANGUAGES.map((lng, i) => (
        <span key={lng} className="inline-flex items-center">
          <span className={lng === current ? "text-lime font-bold" : ""}>
            {lng.toUpperCase()}
          </span>
          {i < SUPPORTED_LANGUAGES.length - 1 && (
            <span className="mx-1 opacity-40">/</span>
          )}
        </span>
      ))}
    </button>
  )
}

