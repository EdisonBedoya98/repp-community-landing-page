import Image from 'next/image'

// Captura real de la app (fitness-app/apps/mobile/assets/entrada/*-{es,en}.jpg, 603×1311)
// dentro del mismo marco de teléfono que usa el panel y reppcoach.com.
export default function PhoneScreenshot({ src, alt, className = '', priority = false, sizes }) {
  return (
    <div
      className={`rounded-[2.6rem] bg-[#050505] p-[0.55rem] shadow-[0_0_0_1px_#2a2a2a,0_30px_80px_-20px_rgba(0,0,0,0.9)] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[2.1rem] bg-canvas">
        <span
          aria-hidden
          className="absolute top-2 left-1/2 z-10 h-[5.5%] max-h-6 w-[30%] -translate-x-1/2 rounded-full bg-black"
        />
        <Image
          src={src}
          alt={alt}
          width={603}
          height={1311}
          priority={priority}
          sizes={sizes ?? '(min-width: 1024px) 280px, 45vw'}
          className="block h-auto w-full"
        />
      </div>
    </div>
  )
}
