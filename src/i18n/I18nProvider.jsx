'use client'

import { createInstance } from 'i18next'
import { useState } from 'react'
import { I18nextProvider, initReactI18next } from 'react-i18next'

// Una instancia de i18next por página y por idioma, iniciada de forma SÍNCRONA: así el HTML
// que sale del build ya trae el texto (los componentes siguen usando useTranslation como en
// la versión de Vite). Una instancia global compartida mezclaría idiomas al generar /es y /en
// en paralelo.
export default function I18nProvider({ lang, resources, children }) {
  const [i18n] = useState(() => {
    const instance = createInstance()
    instance.use(initReactI18next).init({
      resources,
      lng: lang,
      fallbackLng: lang,
      ns: Object.keys(resources[lang]),
      defaultNS: 'common',
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
      initAsync: false,
    })
    return instance
  })
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
