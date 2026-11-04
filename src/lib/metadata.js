import { SUPPORTED_LANGUAGES } from '@/i18n/config'

// Metadatos por página e idioma: canonical a su idioma, hreflang a las dos versiones y el
// inglés como x-default (lo mismo que resuelve proxy.js para quien no pide español).
export function pageMetadata({ lang, path = '', title, description }) {
  const languages = Object.fromEntries(SUPPORTED_LANGUAGES.map((l) => [l, `/${l}${path}`]))
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}${path}`,
      languages: { ...languages, 'x-default': `/en${path}` },
    },
    openGraph: {
      title,
      description,
      url: `/${lang}${path}`,
      locale: lang === 'es' ? 'es_CO' : 'en_US',
    },
    twitter: { title, description },
  }
}

// Títulos y descripciones de las páginas que no son el inicio (el inicio usa landing.json).
export const PAGE_META = {
  privacy: {
    es: { title: 'Política de privacidad · Repp', description: 'Cómo Repp recoge, usa y protege tus datos.' },
    en: { title: 'Privacy policy · Repp', description: 'How Repp collects, uses and protects your data.' },
  },
  terms: {
    es: { title: 'Términos y condiciones · Repp', description: 'Las condiciones de uso de la app Repp y de Repp Pro.' },
    en: { title: 'Terms and conditions · Repp', description: 'The terms of use of the Repp app and Repp Pro.' },
  },
  support: {
    es: { title: 'Soporte · Repp', description: 'Ayuda con tu cuenta, tus entrenos y tu suscripción a Repp Pro.' },
    en: { title: 'Support · Repp', description: 'Help with your account, your workouts and your Repp Pro subscription.' },
  },
  affiliate: {
    es: { title: 'Programa de afiliados · Repp', description: 'Gana recomendando Repp con tu propio enlace.' },
    en: { title: 'Affiliate program · Repp', description: 'Earn by recommending Repp with your own link.' },
  },
}
