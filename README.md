# repp.community

Sitio público de la app **Repp** (https://www.repp.community). Next.js 16 (App Router) +
Tailwind v4 + react-i18next, en Vercel.

```bash
npm install
npm run dev     # http://localhost:5174
npm run build   # build de producción (cada página sale como HTML en /es y /en)
npm start       # sirve el build
npm run lint
```

## Despliegue

Vercel con integración de Git: **`main` → producción** (www.repp.community) y cada rama → una
vista previa con su propio enlace. `vercel.json` fija `"framework": "nextjs"`.

## Rutas que no pueden cambiar

| Ruta | Quién la usa |
|---|---|
| `/privacy-policy`, `/terms-and-conditions` (sin idioma) | App Store Connect, Play Console, Meta y la app (`legalLinks.ts`) |
| `/{es,en}/privacy-policy`, `/{es,en}/terms-and-conditions` | La app y reppcoach.com |
| `/` | Fallback de escritorio de los enlaces de referido (`link.repp.community`) |

Toda ruta sin idioma la redirige `src/proxy.js` (307) a `/es/...` si el navegador pide español
y a `/en/...` en cualquier otro caso. Una ruta con idioma que no existe da 404.

## Textos

- `src/i18n/locales/{es,en}/*.json`: un archivo por página. **Los legales (`privacy`, `terms`,
  `support`) y `affiliate` se cambian solo a propósito**: son el texto vigente de las políticas.
- Cada página le pasa al cliente solo los textos de su idioma (`src/i18n/resources.js` →
  `I18nProvider`), y el HTML sale del build con el texto adentro.
- Nada de cifras ni funciones que la app no tenga hoy en producción. El Coach no es «IA».

## Medición

PostHog en el mismo proyecto que la app, sin cookies (`src/components/Analytics.jsx`):
`$pageview` y `landing_cta_clicked` (`place`, `target`) con `site = 'repp.community'`. Se
activa con `NEXT_PUBLIC_POSTHOG_KEY` en las variables de entorno de Vercel.
