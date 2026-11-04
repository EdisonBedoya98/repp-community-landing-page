// Solo se importa desde el servidor (layouts y páginas): cada página le pasa al cliente los
// textos de SU idioma y SUS namespaces, no las políticas legales completas en los dos idiomas.
import esAffiliate from './locales/es/affiliate.json'
import esCommon from './locales/es/common.json'
import esLanding from './locales/es/landing.json'
import esPrivacy from './locales/es/privacy.json'
import esSupport from './locales/es/support.json'
import esTerms from './locales/es/terms.json'
import enAffiliate from './locales/en/affiliate.json'
import enCommon from './locales/en/common.json'
import enLanding from './locales/en/landing.json'
import enPrivacy from './locales/en/privacy.json'
import enSupport from './locales/en/support.json'
import enTerms from './locales/en/terms.json'

const ALL = {
  es: {
    common: esCommon,
    landing: esLanding,
    privacy: esPrivacy,
    terms: esTerms,
    support: esSupport,
    affiliate: esAffiliate,
  },
  en: {
    common: enCommon,
    landing: enLanding,
    privacy: enPrivacy,
    terms: enTerms,
    support: enSupport,
    affiliate: enAffiliate,
  },
}

export function getResources(lang, namespaces) {
  return { [lang]: Object.fromEntries(namespaces.map((ns) => [ns, ALL[lang][ns]])) }
}

export function getMessages(lang, ns) {
  return ALL[lang][ns]
}
