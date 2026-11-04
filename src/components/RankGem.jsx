// Copia de fitness-app/apps/coach-landing/src/components/RankGem.tsx. Las gemas de rango de la app (apps/mobile/src/screens/rankings/components/RankBadge.tsx,
// GemIcon), pasadas a SVG web: misma forma por tier, mismo degradado y mismo brillo.
// Colores de packages/shared/src/rankings.ts.
export const RANK_TIERS = [
  {
    id: 'hierro',
    name: 'Hierro',
    color: '#71717A',
    shape: 'M20 3 L35 11 L35 29 L20 37 L5 29 L5 11 Z',
    facet: 'M20 3 L35 11 L20 17 L5 11 Z',
  },
  {
    id: 'bronce',
    name: 'Bronce',
    color: '#A16207',
    shape: 'M20 2 L36 12 L32 35 L8 35 L4 12 Z',
    facet: 'M20 2 L36 12 L20 17 L4 12 Z',
  },
  {
    id: 'plata',
    name: 'Plata',
    color: '#94A3B8',
    shape: 'M20 2 L34 20 L20 38 L6 20 Z',
    facet: 'M20 2 L34 20 L20 14 L6 20 Z',
  },
  {
    id: 'oro',
    name: 'Oro',
    color: '#EAB308',
    shape: 'M20 3 L37 14 L31 36 L9 36 L3 14 Z',
    facet: 'M20 3 L37 14 L20 18 L3 14 Z',
  },
  {
    id: 'esmeralda',
    name: 'Esmeralda',
    color: '#22C55E',
    shape: 'M12 3 L28 3 L37 14 L37 26 L28 37 L12 37 L3 26 L3 14 Z',
    facet: 'M12 3 L28 3 L37 14 L3 14 Z',
  },
  {
    id: 'diamante',
    name: 'Diamante',
    color: '#3B82F6',
    shape: 'M6 5 L34 5 L38 20 L20 38 L2 20 Z',
    facet: 'M6 5 L34 5 L38 20 L20 14 L2 20 Z',
  },
  {
    id: 'platino',
    name: 'Platino',
    color: '#EC4899',
    shape: 'M20 1 L26 12 L38 14 L30 24 L32 37 L20 31 L8 37 L10 24 L2 14 L14 12 Z',
    facet: 'M20 1 L26 12 L38 14 L30 24 L20 18 L10 24 L2 14 L14 12 Z',
  },
  {
    id: 'campeon',
    name: 'Campeón',
    color: '#A855F7',
    shape: 'M6 10 L13 3 L20 10 L27 3 L34 10 L36 35 L4 35 Z',
    facet: 'M6 10 L13 3 L20 10 L27 3 L34 10 L20 20 Z',
  },
  {
    id: 'elite',
    name: 'Repp Elite',
    color: '#06B6D4',
    shape: 'M20 1 L24.5 14.5 L38 14.5 L27 23 L31 37 L20 28.5 L9 37 L13 23 L2 14.5 L15.5 14.5 Z',
    facet: 'M20 1 L24.5 14.5 L38 14.5 L27 23 L20 16 L13 23 L2 14.5 L15.5 14.5 Z',
  },
];

export function RankGem({ tier, size = 28 }) {
  const body = `gem-${tier.id}`;
  const shine = `shine-${tier.id}`;
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden>
      <defs>
        <linearGradient id={body} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={`${tier.color}CC`} />
          <stop offset="0.5" stopColor={tier.color} />
          <stop offset="1" stopColor={`${tier.color}66`} />
        </linearGradient>
        <radialGradient id={shine} cx="0.3" cy="0.25" r="0.6">
          <stop offset="0" stopColor="#fff" stopOpacity="0.4" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d={tier.shape} fill={`url(#${body})`} />
      <path d={tier.facet} fill="#fff" opacity={0.18} />
      <path d={tier.shape} fill={`url(#${shine})`} />
      <path d="M20 14 L23 20 L20 26 L17 20 Z" fill="#fff" opacity={0.5} />
      <path d="M20 16 L22 20 L20 24 L18 20 Z" fill="#fff" opacity={0.75} />
    </svg>
  );
}
