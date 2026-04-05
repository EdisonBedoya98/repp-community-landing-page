const APP_STORE_URL = "#"
const PLAY_STORE_URL = "#"

function Sparkle({ className = "" }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  )
}

function AppStoreBadge() {
  return (
    <a
      href={APP_STORE_URL}
      className="inline-flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-full font-semibold text-base hover:bg-gray-200 transition-colors"
    >
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="text-left">
        <div className="text-[10px] leading-none opacity-70">Descargar en</div>
        <div className="text-sm font-bold leading-tight">App Store</div>
      </div>
    </a>
  )
}

function PlayStoreBadge() {
  return (
    <a
      href={PLAY_STORE_URL}
      className="inline-flex items-center gap-3 bg-white text-black px-6 py-3.5 rounded-full font-semibold text-base hover:bg-gray-200 transition-colors"
    >
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.56 1.19l-2.29 1.32-2.5-2.5 2.5-2.5 2.29 1.3M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
      </svg>
      <div className="text-left">
        <div className="text-[10px] leading-none opacity-70">Disponible en</div>
        <div className="text-sm font-bold leading-tight">Google Play</div>
      </div>
    </a>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-surface rounded-2xl p-6 border border-white/5 hover:border-lime/20 transition-colors group">
      <div className="w-12 h-12 bg-lime/10 rounded-xl flex items-center justify-center text-lime mb-4 group-hover:bg-lime/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen font-sans overflow-hidden">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/favicon.svg" alt="Repp" className="w-8 h-8" />
            <span className="text-xl font-extrabold uppercase tracking-wider">Repp</span>
          </div>
          <div className="hidden sm:flex items-center gap-8">
            <a href="#features" className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Funciones</a>
            <a href="#cta" className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Descargar</a>
            <a
              href={APP_STORE_URL}
              className="text-sm bg-lime text-black px-5 py-2 rounded-full font-bold uppercase tracking-wider hover:bg-lime-dark transition-colors"
            >
              Obtener App
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Curved lines */}
          <svg className="absolute top-20 right-0 w-[600px] h-[600px] opacity-20" viewBox="0 0 600 600" fill="none">
            <path d="M600 0C600 331.37 331.37 600 0 600" stroke="#B8FF00" strokeWidth="1.5" />
            <path d="M500 0C500 276.14 276.14 500 0 500" stroke="#B8FF00" strokeWidth="1" />
          </svg>
          <svg className="absolute bottom-10 left-0 w-[400px] h-[400px] opacity-15" viewBox="0 0 400 400" fill="none">
            <path d="M0 400C0 179.09 179.09 0 400 0" stroke="#B8FF00" strokeWidth="1.5" />
          </svg>
          {/* Sparkles */}
          <Sparkle className="absolute top-32 left-[15%] w-5 h-5 text-white opacity-60" />
          <Sparkle className="absolute top-48 right-[20%] w-4 h-4 text-lime opacity-80" />
          <Sparkle className="absolute bottom-[30%] right-[10%] w-3 h-3 text-white opacity-40" />
          <Sparkle className="absolute top-[60%] left-[8%] w-4 h-4 text-lime opacity-50" />
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-lime/10 border border-lime/20 text-lime px-4 py-1.5 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
              Proximamente disponible
            </div>

            {/* Main headline */}
            <h1 className="text-7xl sm:text-[8rem] lg:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter mb-8">
              <span className="text-lime block">Entrena</span>
              <span className="text-white block">con</span>
              <span className="text-white block relative">
                Repp
                <span className="absolute -right-8 top-0">
                  <Sparkle className="w-6 h-6 text-lime" />
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-lg">
              Planifica tu semana, registra cada serie y rep, y sigue tu progreso. La app de fitness que se adapta a ti.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row items-center gap-4 flex-wrap justify-center sm:justify-start">
              <AppStoreBadge />
              <PlayStoreBadge />
            </div>
          </div>

          {/* Wavy line decoration */}
          <div className="absolute bottom-10 left-6 opacity-30 hidden lg:block">
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
              <path d="M0 20C10 20 10 5 20 5C30 5 30 35 40 35C50 35 50 5 60 5C70 5 70 35 80 35C90 35 90 5 100 5C110 5 110 20 120 20" stroke="#B8FF00" strokeWidth="2" />
              <path d="M0 25C10 25 10 10 20 10C30 10 30 40 40 40C50 40 50 10 60 10C70 10 70 40 80 40C90 40 90 10 100 10C110 10 110 25 120 25" stroke="#B8FF00" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
        </div>
      </section>

      {/* Divider line */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Features */}
      <section id="features" className="py-24 px-6 relative">
        <div className="absolute top-20 right-10 pointer-events-none">
          <Sparkle className="w-5 h-5 text-lime opacity-40" />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-4">
              Todo para{" "}
              <span className="text-lime">entrenar</span>
              <br />
              mejor
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Funciones pensadas para que te enfoques en lo que importa: tu entrenamiento.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              title="Plan Semanal"
              description="Organiza tus entrenos de la semana con vista de calendario. Marca tus check-ins y mantiene tu racha."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Registro de Ejercicios"
              description="Registra series, repeticiones y peso para cada ejercicio. Visualiza los musculos que trabajas."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              }
              title="Rutinas Reutilizables"
              description="Crea y guarda tus rutinas favoritas. Inicialas con un toque cuando quieras repetirlas."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Seguimiento de Progreso"
              description="Mira tu historial de entrenamiento, racha y estadisticas. Todo en tu perfil."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              }
              title="Personalizable"
              description="Configura tu objetivo, nivel, equipamiento y dias de entrenamiento a tu medida."
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Timer Integrado"
              description="Temporizador de descanso entre series para mantener la intensidad de tu sesion."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24 px-6 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Sparkle className="w-6 h-6 text-lime mx-auto mb-6" />
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-6">
            Empieza <span className="text-lime">hoy</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">
            Descarga la app y lleva tu entrenamiento al siguiente nivel. Gratis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AppStoreBadge />
            <PlayStoreBadge />
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <footer className="py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/favicon.svg" alt="Repp" className="w-6 h-6" />
            <span className="font-extrabold uppercase tracking-wider">Repp</span>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Repp. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
