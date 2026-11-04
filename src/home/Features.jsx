'use client'

import { useTranslation } from 'react-i18next'
import { RANK_TIERS, RankGem } from '@/components/RankGem'
import { eyebrow } from '@/components/ui'
import DownloadButton from './DownloadButton'
import FeatureRow from './FeatureRow'
import HabitMockup from './HabitMockup'
import PhoneScreenshot from './PhoneScreenshot'

function Phone({ src }) {
  return <PhoneScreenshot src={src} alt="" className="mx-auto w-[56%] max-w-[260px]" />
}

export default function Features({ lang }) {
  const { t } = useTranslation('landing')
  const f = (key) => t(`features.${key}`)
  return (
    <section id="funciones" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6">
      <p className={eyebrow}>{f('eyebrow')}</p>
      <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-[-0.03em] sm:text-5xl">
        {f('title')}
      </h2>
      <div className="mt-16 space-y-24">
        <FeatureRow
          label={f('log.label')}
          title={f('log.title')}
          text={f('log.text')}
          visual={<Phone src={`/screens/${lang}/player.jpg`} />}
          visualLabel={f('log.visual')}
          cta={<DownloadButton label={f('download')} place="registro" />}
        />
        <FeatureRow
          id="rangos"
          label={f('ranks.label')}
          title={f('ranks.title')}
          text={f('ranks.text')}
          visual={<Phone src={`/screens/${lang}/rangos.jpg`} />}
          visualLabel={f('ranks.visual')}
          reverse
          cta={
            <ul className="flex flex-wrap gap-1" aria-label={f('ranks.tiers')}>
              {RANK_TIERS.map((tier) => (
                <li key={tier.id} title={tier.name}>
                  <RankGem tier={tier} size={30} />
                  <span className="sr-only">{tier.name}</span>
                </li>
              ))}
            </ul>
          }
        />
        <FeatureRow
          label={f('coach.label')}
          title={f('coach.title')}
          text={f('coach.text')}
          visual={<Phone src={`/screens/${lang}/coach.jpg`} />}
          visualLabel={f('coach.visual')}
          cta={<DownloadButton label={f('download')} place="coach" />}
        />
        <FeatureRow
          label={f('habit.label')}
          title={f('habit.title')}
          text={f('habit.text')}
          visual={<HabitMockup />}
          visualLabel={f('habit.visual')}
          reverse
        />
      </div>
    </section>
  )
}
