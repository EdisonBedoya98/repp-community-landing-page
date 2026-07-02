import { useTranslation } from "react-i18next"
import reppetImg from "./assets/Reppet.png"
import LanguageSwitcher from "./i18n/LanguageSwitcher.jsx"
import useLangHref from "./i18n/useLangHref.js"

function Sparkle({ className = "" }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  )
}

const APP_STORE_URL = "https://apps.apple.com/co/app/repp/id6764410597"

function AppStoreBadge() {
  const { t } = useTranslation("common")
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-xl border border-white/30 hover:border-white/60 transition-colors"
    >
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="text-left">
        <div className="text-xs leading-none opacity-80">{t("appStore.downloadOn")}</div>
        <div className="text-xl font-semibold leading-tight">{t("appStore.appStore")}</div>
      </div>
    </a>
  )
}

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=community.repp.app&pcampaignid=web_share"

function PlayStoreBadge() {
  const { t } = useTranslation("common")
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-xl border border-white/30 hover:border-white/60 transition-colors"
    >
      <svg className="w-8 h-8" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M3.609 1.814L13.377 12l-9.768 10.186c-.392-.233-.609-.699-.609-1.306V3.12c0-.607.217-1.073.609-1.306z" />
        <path fill="#34A853" d="M17.441 8.472L14.177 12l3.264 3.528 3.702-2.135c.572-.33.857-.758.857-1.393s-.285-1.063-.857-1.393l-3.702-2.135z" />
        <path fill="#FBBC05" d="M3.609 1.814L14.177 12l3.264-3.528L6.277.362c-.488-.281-.997-.362-1.445-.362-.494 0-.922.173-1.223.514V1.814z" />
        <path fill="#EA4335" d="M3.609 22.186L14.177 12l3.264 3.528-11.164 6.11c-.488.281-.997.362-1.445.362-.494 0-.922-.173-1.223-.514v-1.3z" />
      </svg>
      <div className="text-left">
        <div className="text-xs leading-none opacity-80">{t("playStore.downloadOn")}</div>
        <div className="text-xl font-semibold leading-tight">{t("playStore.playStore")}</div>
      </div>
    </a>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-surface rounded-2xl p-6 border border-white/5 hover:border-lime/20 transition-colors group">
      <div className="w-12 h-12 bg-lime/10 rounded-xl flex items-center justify-center text-lime mb-4 group-hover:bg-lime/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function App() {
  const { t } = useTranslation(["landing", "common"])
  const langHref = useLangHref()

  return (
    <div className="min-h-screen font-sans overflow-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={reppetImg} alt="Repp" className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-extrabold uppercase tracking-wider">Repp</span>
          </div>
          <div className="hidden sm:flex items-center gap-8">
            <a href="#features" className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors">{t("common:nav.features")}</a>
            <a href="#cta" className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors">{t("common:nav.download")}</a>
            <LanguageSwitcher />
          </div>
          <div className="flex sm:hidden">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Curved lines */}
          <svg className="absolute top-20 right-0 w-[600px] h-[600px] opacity-20" viewBox="0 0 600 600" fill="none">
            <path d="M600 0C600 331.37 331.37 600 0 600" stroke="#B8FF00" strokeWidth="1.5" />
            <path d="M500 0C500 276.14 276.14 500 0 500" stroke="#B8FF00" strokeWidth="1" />
          </svg>
          <svg className="absolute bottom-10 left-0 w-[400px] h-[400px] opacity-15" viewBox="0 0 400 400" fill="none">
            <path d="M0 400C0 179.09 179.09 0 400 0" stroke="#B8FF00" strokeWidth="1.5" />
          </svg>
          {/* Sparkles */}
          <Sparkle className="absolute top-32 left-[15%] w-5 h-5 text-white opacity-60" />
          <Sparkle className="absolute top-48 right-[20%] w-4 h-4 text-lime opacity-80" />
          <Sparkle className="absolute bottom-[30%] right-[10%] w-3 h-3 text-white opacity-40" />
          <Sparkle className="absolute top-[60%] left-[8%] w-4 h-4 text-lime opacity-50" />
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-4xl">
            {/* Main headline */}
            <h1 className="text-7xl sm:text-[8rem] lg:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter mb-8">
              <span className="text-lime block">{t("hero.headline1")}</span>
              <span className="text-white block">{t("hero.headline2")}</span>
              <span className="text-white block relative">
                {t("hero.headline3")}
                <span className="absolute -right-8 top-0">
                  <Sparkle className="w-6 h-6 text-lime" />
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-lg">
              {t("hero.description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row items-center gap-4 flex-wrap justify-center sm:justify-start">
              <AppStoreBadge />
              <PlayStoreBadge />
            </div>
          </div>

          {/* Wavy line decoration */}
          <div className="absolute bottom-10 left-6 opacity-30 hidden lg:block">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
              <path d="M0 20C10 20 10 5 20 5C30 5 30 35 40 35C50 35 50 5 60 5C70 5 70 35 80 35C90 35 90 5 100 5C110 5 110 20 120 20" stroke="#B8FF00" strokeWidth="2" />
              <path d="M0 25C10 25 10 10 20 10C30 10 30 40 40 40C50 40 50 10 60 10C70 10 70 40 80 40C90 40 90 10 100 10C110 10 110 25 120 25" stroke="#B8FF00" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* Divider line */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Features */}
      <section id="features" className="py-24 px-6 relative">
        <div className="absolute top-20 right-10 pointer-events-none">
          <Sparkle className="w-5 h-5 text-lime opacity-40" />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-4">
              {t("features.titleStart")}{" "}
              <span className="text-lime">{t("features.titleMiddle")}</span>
              <br />
              {t("features.titleEnd")}
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              {t("features.subtitle")}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
              }
              title={t("features.items.aiPlans.title")}
              description={t("features.items.aiPlans.description")}
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              title={t("features.items.library.title")}
              description={t("features.items.library.description")}
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title={t("features.items.tracking.title")}
              description={t("features.items.tracking.description")}
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title={t("features.items.progress.title")}
              description={t("features.items.progress.description")}
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              }
              title={t("features.items.rankings.title")}
              description={t("features.items.rankings.description")}
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title={t("features.items.community.title")}
              description={t("features.items.community.description")}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Sparkle className="w-6 h-6 text-lime mx-auto mb-6" />
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-6">
            {t("cta.titleStart")} <span className="text-lime">{t("cta.titleEnd")}</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppStoreBadge />
            <PlayStoreBadge />
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <footer className="py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:items-center">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <img src={reppetImg} alt="Repp" className="w-8 h-8 rounded-lg" />
            <span className="font-extrabold uppercase tracking-wider">Repp</span>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm">
            <a
              href={langHref("/privacy-policy")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t("common:footer.privacy")}
            </a>
            <a
              href={langHref("/support")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t("common:footer.support")}
            </a>
            <a
              href={langHref("/terms-and-conditions")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {t("common:footer.terms")}
            </a>
          </div>
          <p className="text-sm text-gray-500 text-center sm:text-right">
            &copy; {new Date().getFullYear()} Repp. {t("common:footer.rights")}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

// Trigger deploy
