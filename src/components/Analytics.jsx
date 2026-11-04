'use client'

import { useEffect } from 'react'

// PostHog en el mismo proyecto que la app, como reppcoach.com (fitness-app/docs/
// analytics-events.md, «Landing de Repp Coach»): la visita ($pageview) y el clic en un enlace
// marcado con data-cta="<lugar>:<destino>" (`landing_cta_clicked`), con `site` para separar
// los dos sitios. Sin cookies ni localStorage, así que no hace falta banner. Sin clave, nada.
const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com'

export default function Analytics() {
  useEffect(() => {
    if (!KEY) return
    let cancelled = false
    let posthog = null

    const onClick = (event) => {
      const link = event.target?.closest?.('a[data-cta]')
      if (!link || !posthog) return
      const [place, target] = (link.dataset.cta ?? '').split(':')
      // El clic suele sacar de la página: fuera de la cola por lotes y por sendBeacon.
      posthog.capture(
        'landing_cta_clicked',
        { place, target },
        { send_instantly: true, transport: 'sendBeacon' },
      )
    }

    const load = () => {
      import('posthog-js').then(({ default: client }) => {
        if (cancelled) return
        client.init(KEY, {
          api_host: HOST,
          persistence: 'memory',
          person_profiles: 'identified_only',
          autocapture: false,
          capture_pageview: true,
          capture_pageleave: false,
          disable_session_recording: true,
          disable_surveys: true,
          capture_dead_clicks: false,
          capture_performance: false,
          capture_heatmaps: false,
          disable_external_dependency_loading: true,
        })
        client.register({ site: 'repp.community' })
        posthog = client
      })
    }

    document.addEventListener('click', onClick)
    const idle = window.requestIdleCallback ?? ((cb) => window.setTimeout(cb, 1500))
    idle(load)
    return () => {
      cancelled = true
      document.removeEventListener('click', onClick)
    }
  }, [])

  return null
}
