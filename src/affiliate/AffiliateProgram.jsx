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

/**
 * Desglose de una venta del plan anual traída por un afiliado.
 *
 * Ya no hay descuento: la atribución va por link y el referido paga precio de
 * lista, así que lo que paga y el precio son la misma fila.
 *
 * Los porcentajes de la última columna no coinciden con las tasas nominales de
 * cada etiqueta, porque tanto el IVA (19%) como la comisión de la tienda (30%)
 * se calculan sobre el precio SIN impuesto:
 *   base   = 149.900 / 1,19 = 125.966
 *   IVA    = 149.900 − 125.966 = 23.934  → 16,0% del total
 *   tienda = 125.966 × 0,30 = 37.790     → 25,2% del total
 * Así es como las reporta la tienda y como las recibe el servidor, que calcula
 * el neto como bruto × (1 − IVA − comisión). La comisión del afiliado (70%) se
 * calcula sobre ese neto, nunca sobre el bruto.
 */
const BREAKDOWN = [
  // pctInt: tasas exactas, sin decimal. Las demás son derivadas y llevan uno.
  // Hay que marcarlo a mano: -16.0 es un entero para JS y no se puede deducir
  // del valor.
  { key: "listPrice", amount: 149900, pct: 100, pctInt: true, tone: "anchor" },
  { key: "vat", amount: -23934, pct: -16.0, tone: "muted" },
  { key: "storeFee", amount: -37790, pct: -25.2, tone: "muted" },
  { key: "netToRepp", amount: 88176, pct: 58.8, tone: "highlight" },
  { key: "yourCut", amount: 61724, pct: 41.2, tone: "total" },
]

/** Sin descuento, el primer año y las renovaciones valen lo mismo. */
const GROWTH = [
  { people: 10, perYear: 617235 },
  { people: 25, perYear: 1543088 },
  { people: 50, perYear: 3086176 },
  { people: 100, perYear: 6172353 },
]

const PATHS = ["hasApp", "noApp", "desktop"]

/**
 * Los importes son siempre pesos colombianos, pero el separador de miles y el
 * decimal cambian con el idioma de la página: en español "149.900" y "16,0%",
 * en inglés "149,900" y "16.0%". Sin esto la tabla contradecía al texto de los
 * locales, que sí viene escrito con la convención de cada idioma.
 */
function useNumberFormats() {
  const { i18n } = useTranslation()
  const locale = (i18n.resolvedLanguage || i18n.language) === "es" ? "es-CO" : "en-US"
  const money = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 })
  const decimal = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })
  return {
    money: (n) => money.format(n),
    percent: (n, asInt) => `${(asInt ? money : decimal).format(n)}%`,
  }
}

const TONE_CLASS = {
  muted: "text-gray-500",
  anchor: "text-white font-semibold",
  highlight: "text-white font-semibold",
  total: "text-lime font-black",
}

function EarningCard({ plan, amount, cadence, note }) {
  return (
    <div className="bg-surface rounded-2xl p-6 border border-white/5 flex flex-col gap-1">
      <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{plan}</span>
      <p className="text-4xl sm:text-5xl font-black tracking-tighter text-lime tabular-nums">
        <span className="text-xl align-super mr-1 text-lime-dark">COP</span>
        {amount}
      </p>
      <span className="text-gray-400">{cadence}</span>
      <span className="text-sm text-gray-500 border-t border-white/5 pt-3 mt-2">{note}</span>
    </div>
  )
}

/**
 * El link es el producto entero del programa, así que se muestra tal cual se
 * ve. whitespace-nowrap + overflow-x-auto: en 375px preferimos que se pueda
 * arrastrar antes que partirlo en dos líneas, que lo haría ilegible como URL.
 */
function LinkPlate({ host, code }) {
  return (
    <div className="bg-surface rounded-2xl border border-white/5 p-5 sm:p-6 font-mono text-base sm:text-3xl tracking-tight overflow-x-auto whitespace-nowrap">
      <span className="text-gray-500">{host}</span>
      <span className="text-lime font-bold">{code}</span>
    </div>
  )
}

function PathCard({ tag, title, body }) {
  return (
    <div className="bg-surface rounded-2xl p-6 border border-white/5 flex flex-col gap-2">
      <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{tag}</span>
      <h3 className="text-lg font-bold tracking-tight">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
    </div>
  )
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold pb-3 border-b border-white/10 mb-6">
      {children}
    </h2>
  )
}

export default function AffiliateProgram() {
  const { t } = useTranslation(["affiliate", "common"])
  const langHref = useLangHref()
  const fmt = useNumberFormats()

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
              {t("common:nav.backHome")}
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lime/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Encabezado */}
          <div className="mb-14">
            <Sparkle className="w-6 h-6 text-lime mb-4" />
            <span className="text-xs uppercase tracking-[0.2em] text-lime font-semibold">
              {t("eyebrow")}
            </span>
            {/* Fluido y con break-words: "RECOMENDANDO" es una sola palabra de
                12 caracteres y a un text-5xl fijo se sale de un viewport de
                375px. El tope de 4.5rem iguala al text-7xl del resto del sitio. */}
            <h1 className="text-[clamp(2.25rem,9vw,4.5rem)] font-black uppercase tracking-tighter leading-[0.95] break-words mt-3 mb-4">
              {t("titleStart")} <span className="text-lime">{t("titleEnd")}</span>
            </h1>
            <p className="text-gray-400 max-w-xl text-lg">{t("subtitle")}</p>
          </div>

          {/* La regla, antes de cualquier número */}
          <div className="rounded-2xl border border-lime/20 bg-lime/5 p-6 sm:p-8 mb-14">
            <p className="text-lg sm:text-xl text-white leading-relaxed">
              {t("rule.beforeSplit")}{" "}
              <span className="text-lime font-bold">{t("rule.split")}</span>{" "}
              {t("rule.afterSplit")}
            </p>
            <p className="text-sm text-gray-400 mt-4">{t("rule.note")}</p>
          </div>

          {/* Tu link */}
          <SectionHeading>{t("link.title")}</SectionHeading>
          <div className="mb-4">
            <LinkPlate host={t("link.host")} code={t("link.code")} />
          </div>
          <p className="text-gray-400 leading-relaxed mb-3">{t("link.body")}</p>
          <p className="text-sm text-gray-500 mb-14">{t("link.note")}</p>

          {/* Qué pasa cuando alguien lo toca */}
          <SectionHeading>{t("paths.title")}</SectionHeading>
          <div className="grid sm:grid-cols-3 gap-4 mb-14">
            {PATHS.map((path) => (
              <PathCard
                key={path}
                tag={t(`paths.${path}.tag`)}
                title={t(`paths.${path}.title`)}
                body={t(`paths.${path}.body`)}
              />
            ))}
          </div>

          {/* Cuánto se gana por persona */}
          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            <EarningCard
              plan={t("annual.plan")}
              amount={fmt.money(61724)}
              cadence={t("annual.cadence")}
              note={t("annual.note")}
            />
            <EarningCard
              plan={t("monthly.plan")}
              amount={fmt.money(20547)}
              cadence={t("monthly.cadence")}
              note={t("monthly.note")}
            />
          </div>

          {/* De dónde sale ese número */}
          <SectionHeading>{t("breakdown.title")}</SectionHeading>
          <div className="bg-surface rounded-2xl border border-white/5 overflow-x-auto mb-4">
            <table className="w-full text-left min-w-[380px]">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="px-5 sm:px-6 py-3 text-xs uppercase tracking-widest text-gray-500 font-semibold">
                    {t("breakdown.colConcept")}
                  </th>
                  <th className="px-3 py-3 text-xs uppercase tracking-widest text-gray-500 font-semibold text-right whitespace-nowrap">
                    {t("breakdown.colAmount")}
                  </th>
                  <th className="px-5 sm:px-6 py-3 text-xs uppercase tracking-widest text-gray-500 font-semibold text-right whitespace-nowrap">
                    {t("breakdown.colShare")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {BREAKDOWN.map((row) => (
                  <tr
                    key={row.key}
                    className={`border-b border-white/5 last:border-b-0 ${
                      row.tone === "highlight" ? "bg-lime/5" : ""
                    }`}
                  >
                    <td
                      className={`px-5 sm:px-6 py-3.5 ${
                        row.tone === "muted" ? "text-gray-400" : "text-white"
                      }`}
                    >
                      {t(`breakdown.rows.${row.key}`)}
                    </td>
                    <td
                      className={`px-3 py-3.5 text-right tabular-nums whitespace-nowrap ${
                        TONE_CLASS[row.tone] ?? "text-white font-semibold"
                      }`}
                    >
                      {fmt.money(row.amount)}
                    </td>
                    <td
                      className={`px-5 sm:px-6 py-3.5 text-right tabular-nums whitespace-nowrap ${
                        TONE_CLASS[row.tone] ?? "text-gray-400"
                      }`}
                    >
                      {fmt.percent(row.pct, row.pctInt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-14">{t("breakdown.footnote")}</p>

          {/* Cómo crece */}
          <SectionHeading>{t("growth.title")}</SectionHeading>
          {/* Sin min-w: con dos columnas la tabla entra en 375px, y forzar el
              scroll lateral solo escondería la mitad del número. */}
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 pr-4 text-xs uppercase tracking-widest text-gray-500 font-semibold">
                    {t("growth.colPeople")}
                  </th>
                  <th className="py-3 pl-4 text-xs uppercase tracking-widest text-gray-500 font-semibold text-right">
                    {t("growth.colPerYear")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {GROWTH.map((row) => (
                  <tr key={row.people} className="border-b border-white/5 last:border-b-0">
                    <td className="py-3.5 pr-4 font-semibold tabular-nums">{row.people}</td>
                    <td className="py-3.5 pl-4 text-right text-lime font-semibold tabular-nums whitespace-nowrap">
                      {fmt.money(row.perYear)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-14">{t("growth.footnote")}</p>

          {/* Cómo funciona */}
          <SectionHeading>{t("how.title")}</SectionHeading>
          <ol className="flex flex-col gap-4 mb-14">
            {["step1", "step2", "step3"].map((step, i) => (
              <li key={step} className="grid grid-cols-[1.75rem_1fr] gap-4 items-start">
                <span className="w-7 h-7 rounded-lg bg-lime/10 text-lime text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <p className="text-gray-400 leading-relaxed">{t(`how.${step}`)}</p>
              </li>
            ))}
          </ol>

          {/* Tu panel */}
          <SectionHeading>{t("panel.title")}</SectionHeading>
          <div className="rounded-2xl border border-white/5 bg-surface p-6 sm:p-8 mb-14 flex flex-col gap-4">
            <p className="text-gray-400 leading-relaxed">{t("panel.body")}</p>
            <p className="text-gray-400 leading-relaxed border-t border-white/5 pt-4">
              {t("panel.channels")}
            </p>
          </div>

          {/* Letra chica */}
          <SectionHeading>{t("fine.title")}</SectionHeading>
          <div className="flex flex-col gap-3 text-sm text-gray-500 leading-relaxed">
            {["firstTouch", "lifetime", "renewal", "existing", "refund", "cancel", "payout"].map(
              (item) => (
                <p key={item}>{t(`fine.${item}`)}</p>
              ),
            )}
          </div>
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
              {t("common:footer.affiliatesShort")}
            </a>
            <a href={langHref("/privacy-policy")} className="text-gray-500 hover:text-white transition-colors">
              {t("common:footer.privacyShort")}
            </a>
            <a href={langHref("/support")} className="text-gray-500 hover:text-white transition-colors">
              {t("common:footer.supportShort")}
            </a>
            <a href={langHref("/terms-and-conditions")} className="text-gray-500 hover:text-white transition-colors">
              {t("common:footer.termsShort")}
            </a>
          </div>
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Repp.</p>
        </div>
      </footer>
    </div>
  )
}
