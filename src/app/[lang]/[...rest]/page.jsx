import { notFound } from 'next/navigation'

// /es/lo-que-sea que no existe: 404 de verdad (la SPA anterior respondía 200 a todo y mandaba
// al inicio), con la página de not-found.jsx del idioma.
export default function CatchAll() {
  notFound()
}
