// Idiomas del sitio. Las rutas llevan el idioma adelante (/es, /en); una ruta sin idioma la
// redirige proxy.js según el navegador. El inglés es el de respaldo: así resolvía el sitio
// anterior las direcciones sin idioma (p. ej. /privacy-policy, la que está en las tiendas).
export const SUPPORTED_LANGUAGES = ['es', 'en']
export const DEFAULT_LANGUAGE = 'en'

export const isLang = (value) => SUPPORTED_LANGUAGES.includes(value)

export const normalizeLng = (lng) => {
  const code = (lng || DEFAULT_LANGUAGE).toString().toLowerCase().slice(0, 2)
  return isLang(code) ? code : DEFAULT_LANGUAGE
}
