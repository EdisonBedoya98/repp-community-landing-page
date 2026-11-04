import { NextResponse } from 'next/server'

// Toda ruta sin idioma (/, /privacy-policy, /terms-and-conditions, /support, /affiliate…) va a
// /es/... si el navegador pide español y a /en/... en cualquier otro caso. /privacy-policy es
// la dirección que está en App Store Connect, Play Console y Meta; el sitio anterior hacía
// esta misma redirección, pero en el navegador (un robot sin JavaScript no la veía).
// Temporal (307): depende del navegador, no es una mudanza.
const LANGS = ['es', 'en']

function preferredLang(acceptLanguage) {
  const first = (acceptLanguage || '').split(',')[0].trim().toLowerCase()
  return first.startsWith('es') ? 'es' : 'en'
}

export function proxy(request) {
  const { pathname } = request.nextUrl
  const firstSegment = pathname.split('/').filter(Boolean)[0]
  if (LANGS.includes(firstSegment)) return NextResponse.next()

  const url = request.nextUrl.clone()
  const lang = preferredLang(request.headers.get('accept-language'))
  url.pathname = `/${lang}${pathname === '/' ? '' : pathname}`
  const response = NextResponse.redirect(url, 307)
  response.headers.set('Vary', 'Accept-Language')
  return response
}

export const config = {
  // Ni los archivos del build, ni los que tienen extensión (robots.txt, sitemap.xml, íconos,
  // imágenes de public/).
  matcher: ['/((?!_next/|.*\\..*).*)'],
}
