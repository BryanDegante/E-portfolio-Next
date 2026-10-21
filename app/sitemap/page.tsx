'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
import { FiArrowUpRight, FiHome, FiBriefcase, FiFolder, FiShield } from 'react-icons/fi';

export default function SitemapPage() {
  const language = useSelector(
    (state: RootState) => state.language.language
  );
  const isEn = language === 'en';

  const pages = [
    {
      title: isEn ? 'Home' : 'Inicio',
      path: '/',
      description: isEn
        ? 'Main portfolio overview, highlighted services, selected projects, and FAQ.'
        : 'Visión general del portafolio, servicios destacados, proyectos y preguntas frecuentes.',
      icon: <FiHome className="h-5 w-5 text-blue-400" />,
      tag: '01',
    },
    {
      title: isEn ? 'Services' : 'Servicios',
      path: '/services',
      description: isEn
        ? 'Detailed service breakdown, package tiers, pricing add-ons, and process workflows.'
        : 'Desglose de servicios, paquetes, extras opcionales y flujos de trabajo.',
      icon: <FiBriefcase className="h-5 w-5 text-blue-400" />,
      tag: '02',
    },
    {
      title: isEn ? 'Projects' : 'Proyectos',
      path: '/projects',
      description: isEn
        ? 'Showcase of recent client work, web applications, and interactive digital builds.'
        : 'Muestra de trabajos recientes, aplicaciones web y proyectos interactivos.',
      icon: <FiFolder className="h-5 w-5 text-blue-400" />,
      tag: '03',
    },
    {
      title: isEn ? 'Privacy Policy' : 'Política de Privacidad',
      path: '/privacy',
      description: isEn
        ? 'Information on data collection, EmailJS processing, and website privacy practices.'
        : 'Información sobre recolección de datos, procesamiento con EmailJS y privacidad.',
      icon: <FiShield className="h-5 w-5 text-blue-400" />,
      tag: '04',
    },
  ];

  return (
    <main className="relative min-h-screen bg-section text-neutral-300 py-24 sm:py-32 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-125 w-full max-w-7xl bg-blue-500/3 blur-[120px]"
      />

      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
        
        <header className="mb-12 border-b border-white/10 pb-8">
          <span className="mb-3.5 inline-block rounded-full border border-blue-400/20 bg-blue-400/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-blue-300">
            {isEn ? 'SITE MAP' : 'MAPA DEL SITIO'}
          </span>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {isEn ? 'Directory & Structure' : 'Directorio y Estructura'}
          </h1>
          <p className="mt-3 font-sans text-sm text-neutral-400 sm:text-base">
            {isEn
              ? 'An overview of all public pages and resources available on bryandegante.dev.'
              : 'Una vista general de todas las páginas y recursos disponibles en bryandegante.dev.'}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_15px_40px_-20px_rgba(59,130,246,0.25)]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3">
                    {page.icon}
                  </div>
                  <span className="font-mono text-xs text-neutral-600">
                    {page.tag}
                  </span>
                </div>

                <h2 className="mb-2 font-heading text-lg font-bold text-white transition-colors group-hover:text-blue-300">
                  {page.title}
                </h2>

                <p className="font-sans text-xs leading-relaxed text-neutral-400">
                  {page.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 font-mono text-xs text-blue-400 group-hover:text-blue-300">
                <span>{page.path}</span>
                <FiArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}