import { SUPPORTED_LANGUAGES } from '@/i18n/config'
import { SITE_URL } from '@/lib/links'

const PATHS = [
  { path: '', priority: 1, changeFrequency: 'monthly' },
  { path: '/affiliate', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/support', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms-and-conditions', priority: 0.3, changeFrequency: 'yearly' },
]

// Cada página en los dos idiomas, con sus alternativas (hreflang) declaradas también aquí.
export default function sitemap() {
  const lastModified = new Date()
  return PATHS.flatMap(({ path, priority, changeFrequency }) =>
    SUPPORTED_LANGUAGES.map((lang) => ({
      url: `${SITE_URL}/${lang}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(SUPPORTED_LANGUAGES.map((l) => [l, `${SITE_URL}/${l}${path}`])),
      },
    })),
  )
}
