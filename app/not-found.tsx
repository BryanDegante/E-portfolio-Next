'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
import { FiHome, FiBriefcase, FiFolder, FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  const language = useSelector(
    (state: RootState) => state.language.language
  );
  const isEn = language === 'en';

  return (
    <main className="relative flex min-h-screen items-center justify-center  text-neutral-300 py-24 sm:py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-125ull max-w-5xl bg-blue-500/5 blur-[140px]"
      />

      <div className="mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
        
        <span className="mb-4 inline-block rounded-full border border-blue-400/20 bg-blue-400/10 px-3.5 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
          {isEn ? 'ERROR 404' : 'ERROR 404'}
        </span>

        <h1 className="font-heading text-7xl font-extrabold tracking-tight text-white sm:text-9xl lg:text-[11rem] leading-none drop-shadow-[0_10px_30px_rgba(59,130,246,0.15)]">
          404
        </h1>

        <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {isEn ? 'Lost in Hyperspace' : 'Página no encontrada'}
        </h2>
        <p className="mx-auto mt-3 max-w-md font-sans text-sm text-neutral-400 sm:text-base">
          {isEn
            ? "The page you're looking for doesn't exist, was moved, or is temporarily unavailable."
            : 'La página que buscas no existe, ha sido movida o no está disponible temporalmente.'}
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 rounded-xl border border-blue-400/30 bg-blue-500/10 px-6 py-3.5 font-sans text-sm font-semibold text-blue-300 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
          >
            <FiArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>{isEn ? 'Return to Home' : 'Volver al Inicio'}</span>
          </Link>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-neutral-500">
            {isEn ? 'Or explore these pages:' : 'O explora estas páginas:'}
          </p>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Link
              href="/"
              className="flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/2 p-3.5 font-sans text-xs text-neutral-300 transition-all duration-300 hover:border-blue-400/40 hover:bg-neutral-900 hover:text-blue-300"
            >
              <FiHome className="h-4 w-4 text-blue-400" />
              <span>{isEn ? 'Home' : 'Inicio'}</span>
            </Link>

            <Link
              href="/services"
              className="flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/2 p-3.5 font-sans text-xs text-neutral-300 transition-all duration-300 hover:border-blue-400/40 hover:bg-neutral-900 hover:text-blue-300"
            >
              <FiBriefcase className="h-4 w-4 text-blue-400" />
              <span>{isEn ? 'Services' : 'Servicios'}</span>
            </Link>

            <Link
              href="/projects"
              className="flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/2 p-3.5 font-sans text-xs text-neutral-300 transition-all duration-300 hover:border-blue-400/40 hover:bg-neutral-900 hover:text-blue-300"
            >
              <FiFolder className="h-4 w-4 text-blue-400" />
              <span>{isEn ? 'Projects' : 'Proyectos'}</span>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}