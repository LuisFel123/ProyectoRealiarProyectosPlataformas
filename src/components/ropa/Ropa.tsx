import React from 'react'
import { NavbarGorrasPla } from '../NavbarGorrasPla'

export const Ropa = () => {
  return (
    <>
          <NavbarGorrasPla />
    
          <section
            id="ropa"
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-4 py-24 sm:px-6 lg:px-8"
          >
            {/* Brillo verde de fondo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.22),transparent_55%)] sm:bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.25),transparent_45%)]" />
    
            {/* Círculo decorativo adaptable */}
            <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-500/20 shadow-[0_0_60px_rgba(34,197,94,0.25)] sm:h-[330px] sm:w-[330px] md:h-[430px] md:w-[430px]" />
    
            {/* Brillos extra */}
            <div className="absolute left-4 top-24 h-24 w-24 rounded-full bg-green-500/10 blur-3xl sm:left-20 sm:h-40 sm:w-40" />
            <div className="absolute bottom-20 right-4 h-28 w-28 rounded-full bg-green-400/10 blur-3xl sm:right-20 sm:h-44 sm:w-44" />
    
            <div className="relative z-10 mx-auto max-w-5xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-green-400 sm:text-sm sm:tracking-[0.45em]">
                Nueva colección
              </p>
    
              <h1 className="break-words text-4xl font-black uppercase leading-tight tracking-wide text-white drop-shadow-[0_0_25px_rgba(34,197,94,0.65)] sm:text-6xl sm:tracking-widest md:text-7xl lg:text-8xl">
                Próximamente
              </h1>
    
              <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-green-500 shadow-[0_0_25px_rgba(34,197,94,0.9)] sm:w-40" />
    
              <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-gray-400 sm:max-w-xl sm:text-base md:text-lg">
                Estamos preparando algo especial. Muy pronto podrás ver esta
                sección.
              </p>
            </div>
          </section>
        </>
  )
}
