// Código QR hacia link.repp.community/app (la página que manda cada teléfono a su tienda). El
// SVG se genera en el build (app/[lang]/page.jsx) y llega aquí como texto. Solo en escritorio:
// en el teléfono ya están los botones de las tiendas.
export default function QrCode({ svg, caption }) {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <span
        aria-hidden
        className="block size-[84px] rounded-xl bg-white p-2 [&_svg]:size-full"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <span className="max-w-[7rem] text-xs leading-snug font-semibold text-muted">{caption}</span>
    </div>
  )
}
