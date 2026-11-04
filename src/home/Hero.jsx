'use client'

import { useTranslation } from 'react-i18next'
import StoreButtons from '@/components/StoreButtons'
import PhoneScreenshot from './PhoneScreenshot'
import QrCode from './QrCode'

// Titular de cartel de gimnasio a la izquierda (como reppcoach.com) y dos capturas reales: los
// rangos adelante y el registro de un entreno detrás.
export default function Hero({ lang, qrSvg }) {
  const { t } = useTranslation('landing')
  return (
    <section id="inicio" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:pt-20 lg:pb-28">
        <div>
          {/* La frase que se busca va dentro del H1 (la línea chica); el lema es lo grande. */}
          <h1>
            <span className="flex items-center gap-3 text-xs font-bold tracking-[0.18em] text-signal uppercase">
              <span aria-hidden className="h-0.5 w-8 bg-signal" />
              {t('hero.eyebrow')}
            </span>
            <span className="mt-6 block text-[2.9rem] leading-[0.9] font-black tracking-[-0.03em] uppercase italic sm:text-7xl lg:text-[5rem]">
              <span className="sr-only">: </span>
              <span className="block">{t('hero.titleTop')}</span>
              <span className="block text-signal">{t('hero.titleBottom')}</span>
            </span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {t('hero.subtitle')}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-5">
            <StoreButtons place="hero" />
            <QrCode svg={qrSvg} caption={t('hero.qr')} />
          </div>
          <p className="mt-5 text-sm font-medium text-dim">{t('hero.note')}</p>
        </div>

        <div role="img" aria-label={t('hero.visual')} className="relative mx-auto w-full max-w-[520px]">
          <div aria-hidden className="relative h-[460px] sm:h-[600px]">
            <PhoneScreenshot
              src={`/screens/${lang}/player.jpg`}
              alt=""
              className="absolute top-16 left-0 w-[46%]"
              sizes="(min-width: 1024px) 240px, 40vw"
            />
            <PhoneScreenshot
              src={`/screens/${lang}/rangos.jpg`}
              alt=""
              priority
              className="absolute top-0 right-[6%] w-[52%]"
              sizes="(min-width: 1024px) 270px, 46vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
