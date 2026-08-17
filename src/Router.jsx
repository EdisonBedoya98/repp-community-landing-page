import { useEffect } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom"
import { useTranslation } from "react-i18next"
import App from "./App.jsx"
import PrivacyPolicy from "./legal/PrivacyPolicy.jsx"
import TermsAndConditions from "./legal/TermsAndConditions.jsx"
import Support from "./legal/Support.jsx"
import AffiliateProgram from "./affiliate/AffiliateProgram.jsx"
import {
  SUPPORTED_LANGUAGES,
  detectInitialLanguage,
  normalizeLng,
  langFromPath,
} from "./i18n/index.js"

function LangSync() {
  const location = useLocation()
  const lang = langFromPath(location.pathname)
  const { i18n } = useTranslation()

  useEffect(() => {
    if (!lang) return
    if (i18n.resolvedLanguage !== lang && i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }
  }, [lang, i18n])

  return null
}

function LangPrefixGuard({ children }) {
  const location = useLocation()
  const segments = location.pathname.split("/").filter(Boolean)
  const first = segments[0]

  if (!SUPPORTED_LANGUAGES.includes(first)) {
    const lang = normalizeLng(detectInitialLanguage())
    const target =
      "/" +
      [lang, ...segments].join("/") +
      location.search +
      location.hash
    return <Navigate to={target} replace />
  }

  return (
    <>
      <LangSync />
      {children}
    </>
  )
}

export default function Router() {
  return (
    <BrowserRouter>
      <LangPrefixGuard>
        <Routes>
          <Route path="/:lang" element={<App />} />
          <Route path="/:lang/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/:lang/support" element={<Support />} />
          <Route path="/:lang/affiliate" element={<AffiliateProgram />} />
          <Route path="/:lang/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="*" element={<NotFoundRedirect />} />
        </Routes>
      </LangPrefixGuard>
    </BrowserRouter>
  )
}

function NotFoundRedirect() {
  const location = useLocation()
  const segments = location.pathname.split("/").filter(Boolean)
  const lang = SUPPORTED_LANGUAGES.includes(segments[0])
    ? segments[0]
    : normalizeLng(detectInitialLanguage())
  return <Navigate to={"/" + lang} replace />
}
