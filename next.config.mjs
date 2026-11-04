// Sitio público de la app Repp (www.repp.community). Next.js en Vercel: cada página sale del
// build como HTML ya armado en los dos idiomas (/es y /en), que es lo que Google indexa.
// Antes era una SPA de Vite: Google recibía un <div id="root"> vacío.

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
}

export default nextConfig
