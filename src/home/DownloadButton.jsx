'use client'

import { ArrowRight } from 'lucide-react'
import { primaryButton, sizeMd } from '@/components/ui'
import { DOWNLOAD_URL } from '@/lib/links'

// Botón de descarga a mitad de página. En el teléfono va directo a link.repp.community/app (que
// abre su tienda); en escritorio baja a #descargar, donde están las tiendas y el código QR.
export default function DownloadButton({ label, place }) {
  // Cada enlace va en su propio contenedor: `hidden` junto a `inline-flex` en el mismo elemento
  // no tiene orden garantizado y se veían los dos en el teléfono.
  return (
    <>
      <span className="lg:hidden">
        <a href={DOWNLOAD_URL} data-cta={`${place}:download`} className={`${primaryButton} ${sizeMd}`}>
          {label} <ArrowRight aria-hidden className="size-4" />
        </a>
      </span>
      <span className="hidden lg:block">
        <a href="#descargar" data-cta={`${place}:download`} className={`${primaryButton} ${sizeMd}`}>
          {label} <ArrowRight aria-hidden className="size-4" />
        </a>
      </span>
    </>
  )
}
