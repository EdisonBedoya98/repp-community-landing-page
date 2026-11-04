'use client'

import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import Faq from './Faq'
import Facts from './Facts'
import Features from './Features'
import FinalCta from './FinalCta'
import Hero from './Hero'
import TrainerBand from './TrainerBand'

export default function HomePage({ lang, qrSvg }) {
  return (
    <>
      <SiteHeader home />
      <main>
        <Hero lang={lang} qrSvg={qrSvg} />
        <Facts />
        <Features lang={lang} />
        <TrainerBand />
        <Faq />
        <FinalCta qrSvg={qrSvg} />
      </main>
      <SiteFooter />
    </>
  )
}
