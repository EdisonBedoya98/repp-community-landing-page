import { useTranslation } from "react-i18next"
import { useLocation } from "react-router-dom"
import { langFromPath, normalizeLng } from "./index.js"

export default function useLangHref() {
  const { i18n } = useTranslation()
  const location = useLocation()
  const lang =
    langFromPath(location.pathname) ||
    normalizeLng(i18n.resolvedLanguage || i18n.language)

  return (href) => {
    if (!href) return href
    if (/^(https?:|mailto:|tel:|#)/i.test(href)) return href
    if (!href.startsWith("/")) return href
    const stripped = href.replace(/^\/+/, "")
    return "/" + [lang, stripped].filter(Boolean).join("/")
  }
}
