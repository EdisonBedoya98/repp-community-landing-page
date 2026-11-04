import { eyebrow } from '@/components/ui'

// Texto a un lado y visual al otro, alternando. Cada fila puede llevar su botón: quien ya se
// convenció en esta sección no tiene que bajar hasta el final.
export default function FeatureRow({ id, label, title, text, visual, visualLabel, reverse, cta }) {
  return (
    <div id={id} className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? 'lg:order-2' : undefined}>
        <p className={eyebrow}>{label}</p>
        <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.02em] sm:text-4xl">{title}</h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">{text}</p>
        {cta ? <div className="mt-8">{cta}</div> : null}
      </div>
      <div role="img" aria-label={visualLabel} className={reverse ? 'lg:order-1' : undefined}>
        <div aria-hidden>{visual}</div>
      </div>
    </div>
  )
}
