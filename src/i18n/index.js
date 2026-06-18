import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import esCommon from "./locales/es/common.json"
import esLanding from "./locales/es/landing.json"
import esPrivacy from "./locales/es/privacy.json"
import esTerms from "./locales/es/terms.json"
import esSupport from "./locales/es/support.json"

import enCommon from "./locales/en/common.json"
import enLanding from "./locales/en/landing.json"
import enPrivacy from "./locales/en/privacy.json"
import enTerms from "./locales/en/terms.json"
import enSupport from "./locales/en/support.json"

export const SUPPORTED_LANGUAGES = ["es", "en"]
export const DEFAULT_LANGUAGE = "es"

const resources = {
  es: {
    common: esCommon,
    landing: esLanding,
    privacy: esPrivacy,
    terms: esTerms,
    support: esSupport,
  },
  en: {
    common: enCommon,
    landing: enLanding,
    privacy: enPrivacy,
    terms: enTerms,
    support: enSupport,
  },
}

export const normalizeLng = (lng) => {
  const code = (lng || DEFAULT_LANGUAGE).toString().toLowerCase().slice(0, 2)
  return SUPPORTED_LANGUAGES.includes(code) ? code : DEFAULT_LANGUAGE
}

export const langFromPath = (pathname) => {
  const first = (pathname || "/").split("/").filter(Boolean)[0]
  return SUPPORTED_LANGUAGES.includes(first) ? first : null
}

export const detectInitialLanguage = () => {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE
  const fromPath = langFromPath(window.location.pathname)
  if (fromPath) return fromPath
  try {
    const stored = window.localStorage.getItem("repp-lang")
    if (stored) return normalizeLng(stored)
  } catch {
    /* ignore */
  }
  const nav = window.navigator?.language || DEFAULT_LANGUAGE
  return normalizeLng(nav)
}

i18n.use(initReactI18next).init({
  resources,
  lng: detectInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: SUPPORTED_LANGUAGES,
  nonExplicitSupportedLngs: true,
  ns: ["common", "landing", "privacy", "terms", "support"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

const syncHtmlLang = (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = normalizeLng(lng)
  }
}

const persistLang = (lng) => {
  try {
    window.localStorage.setItem("repp-lang", normalizeLng(lng))
  } catch {
    /* ignore */
  }
}

syncHtmlLang(i18n.resolvedLanguage || i18n.language || DEFAULT_LANGUAGE)
persistLang(i18n.resolvedLanguage || i18n.language || DEFAULT_LANGUAGE)
i18n.on("languageChanged", (lng) => {
  syncHtmlLang(lng)
  persistLang(lng)
})

export default i18n
