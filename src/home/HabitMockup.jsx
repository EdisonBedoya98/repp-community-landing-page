'use client'

import { Crown, Flame } from 'lucide-react'
import { useTranslation } from 'react-i18next'

// Ilustración (no captura: la app no tiene una del widget ni de Retos) con los colores reales:
// la llama #FF4500 de la racha y, en Retos, el celeste #38BDF8 del rival y la corona #FFC107
// (fitness-app/apps/mobile/src/screens/challenges/tokens.ts).
const TRAINED = [true, false, true, true, false, true, false]

export default function HabitMockup() {
  const { t } = useTranslation('landing')
  const days = t('features.habit.days', { returnObjects: true })
  return (
    <div className="mx-auto grid max-w-md gap-4 sm:grid-cols-[0.9fr_1.1fr] sm:items-center lg:max-w-none">
      <div className="rounded-[1.75rem] border border-line bg-card p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
        <p className="flex items-center gap-1.5 text-xs font-bold tracking-[0.12em] text-muted uppercase">
          <Flame className="size-4 fill-[#ff4500] text-[#ff4500] drop-shadow-[0_0_6px_rgba(255,69,0,0.6)]" />
          {t('features.habit.streak')}
        </p>
        <p className="mt-2 flex items-baseline gap-2">
          <span className="text-6xl font-black tracking-[-0.04em] italic">6</span>
          <span className="text-sm font-semibold text-muted">{t('features.habit.weeks')}</span>
        </p>
        <div className="mt-4 grid grid-cols-7 gap-1.5">
          {days.map((day, index) => (
            <span key={index} className="flex flex-col items-center gap-1.5">
              <span className="text-[10px] font-semibold text-dim">{day}</span>
              <span
                className={`size-5 rounded-full ${TRAINED[index] ? 'bg-signal' : 'border border-line bg-field'}`}
              />
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-canvas p-5">
        <p className="text-xs font-bold tracking-[0.12em] text-dim uppercase">
          {t('features.habit.challenge')} · {t('features.habit.routine')}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <Player name={t('features.habit.you')} initials="TÚ" color="#a3e635" leader />
          <span className="text-2xl font-black italic tracking-[-0.04em] text-white">VS</span>
          <Player name={t('features.habit.rival')} initials="AN" color="#38bdf8" />
        </div>
        <p className="mt-5 rounded-xl bg-field px-3 py-2.5 text-center text-sm font-semibold">
          {t('features.habit.versus')}
          <span className="block text-xs font-medium text-dim">{t('features.habit.left')}</span>
        </p>
      </div>
    </div>
  )
}

function Player({ name, initials, color, leader = false }) {
  return (
    <span className="flex flex-col items-center gap-2">
      <span className="relative">
        {leader ? (
          <Crown className="absolute -top-4 left-1/2 size-4 -translate-x-1/2 fill-[#ffc107] text-[#ffc107]" />
        ) : null}
        <span
          className="flex size-14 items-center justify-center rounded-full border-2 bg-raised text-sm font-extrabold"
          style={{ borderColor: color }}
        >
          {initials}
        </span>
      </span>
      <span className="text-sm font-semibold">{name}</span>
    </span>
  )
}
