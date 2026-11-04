import Image from 'next/image'

// La R de la app (apps/mobile/assets/repp-logo.png) y «Repp».
export default function Logo({ size = 28 }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image src="/repp-logo.png" alt="" width={size} height={Math.round(size * 0.895)} priority />
      <span className="text-[19px] leading-none font-extrabold tracking-[-0.02em] text-white">
        Repp
      </span>
    </span>
  )
}
