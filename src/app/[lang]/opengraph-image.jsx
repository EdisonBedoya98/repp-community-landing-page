import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { SUPPORTED_LANGUAGES } from '@/i18n/config'
import { getMessages } from '@/i18n/resources'

// La imagen al compartir repp.community, por idioma, con Inter (la fuente del sitio) bajada
// de Google Fonts en el build y recortada a las letras de la imagen. Si no baja, el build
// falla en vez de publicar otra letra.
export const alt = 'Repp'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Una por idioma, en el build (si no, se arma en cada pedido y baja la fuente cada vez).
export const dynamic = 'force-static'
export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }))
}

async function inter(weight, text) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&text=${encodeURIComponent(text)}`,
  ).then((r) => r.text())
  const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1]
  if (!url) throw new Error(`No se pudo bajar Inter ${weight} para la imagen OG`)
  return fetch(url).then((r) => r.arrayBuffer())
}

export default async function OpengraphImage({ params }) {
  const { lang } = await params
  const { hero } = getMessages(lang, 'landing')
  const top = hero.titleTop.toUpperCase()
  const bottom = hero.titleBottom.toUpperCase()
  const footer = hero.note
  const text = `Repp ${top} ${bottom} ${footer} repp.community`
  const [logo, medium, black] = await Promise.all([
    readFile(join(process.cwd(), 'public/repp-logo.png')),
    inter(600, text),
    inter(900, text),
  ])
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'radial-gradient(circle at 85% 0%, #2c3a12 0%, #0d0d0d 55%)',
          color: '#ffffff',
          fontFamily: 'Inter',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <img src={`data:image/png;base64,${logo.toString('base64')}`} width={72} height={64} alt="" />
          <span style={{ fontSize: 48, fontWeight: 900, letterSpacing: -1 }}>Repp</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: 112, fontWeight: 900, fontStyle: 'normal', lineHeight: 0.95, letterSpacing: -4 }}>
          <span>{top}</span>
          <span style={{ color: '#a3e635' }}>{bottom}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 28, color: '#9ca3af', fontWeight: 600 }}>
          <span>{footer}</span>
          <span style={{ color: '#ffffff' }}>repp.community</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Inter', data: medium, weight: 600, style: 'normal' },
        { name: 'Inter', data: black, weight: 900, style: 'normal' },
      ],
    },
  )
}
