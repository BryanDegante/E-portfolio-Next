'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import type { RootState } from '@/redux/store';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Service() {
  const language = useSelector(
    (state: RootState) => state.language.language
  );

  const isEn = language === 'en';
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
        defaults: { ease: 'power3.out', duration: 0.9 },
      });

      tl.fromTo(
        '.gsap-tag',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 }
      )
        .fromTo(
          '.gsap-title',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          '-=0.6'
        )
        .fromTo(
          '.gsap-desc',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0 },
          '-=0.6'
        )
        .fromTo(
          '.gsap-card',
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, stagger: 0.15 },
          '-=0.5'
        )
        .fromTo(
          '.gsap-footer',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0 },
          '-=0.6'
        );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative flex min-h-dvh items-center py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-12 border-t border-white/10 pt-8 sm:mb-16">
          <div className="gsap-tag mb-5 flex items-center gap-3 opacity-0">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400">
              03 // {isEn ? 'Services' : 'Servicios'}
            </span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="gsap-title max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-white opacity-0 sm:text-4xl lg:text-5xl xl:text-6xl">
              {isEn
                ? 'Websites That Work for '
                : 'Sitios Web que Impulsan '}
              <span className="text__color--blue">
                {isEn ? 'Your Business.' : 'Tu Negocio.'}
              </span>
            </h2>

            <p className="gsap-desc max-w-xl font-sans text-base leading-7 text-neutral-400 opacity-0 sm:text-lg lg:justify-self-end">
              {isEn
                ? 'Whether you need a professional website, improvements to your existing site, or new features to better serve your customers, I build solutions around your business goals.'
                : 'Ya sea que necesites un sitio web profesional, mejorar tu sitio actual o agregar funciones para atender mejor a tus clientes, desarrollo soluciones enfocadas en los objetivos de tu negocio.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article className="gsap-card group relative isolate flex min-h-85 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 opacity-0 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_20px_60px_-25px_rgba(59,130,246,0.18)] sm:p-8 md:col-span-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px] transition-colors duration-500 group-hover:bg-blue-400/20"
            />

            <div>
              <div className="mb-7 flex items-center justify-between gap-4">
                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 font-mono text-[10px] tracking-wider text-blue-300 sm:text-xs">
                  {isEn ? 'BUILD YOUR ONLINE PRESENCE' : 'IMPULSA TU PRESENCIA DIGITAL'}
                </span>
                <span className="font-mono text-sm text-neutral-600">
                  01
                </span>
              </div>

              <h3 className="mb-3 max-w-lg font-heading text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-50 sm:text-3xl">
                {isEn ? 'Business Websites' : 'Sitios Web para Negocios'}
              </h3>

              <p className="max-w-lg font-sans text-sm leading-7 text-neutral-400 sm:text-base">
                {isEn
                  ? 'Make a strong first impression with a professional, mobile-friendly website that showcases your services, builds trust, and helps potential customers reach you.'
                  : 'Causa una excelente primera impresión con un sitio web profesional y adaptable a móviles que muestre tus servicios, genere confianza y facilite el contacto con tus clientes potenciales.'}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {(
                isEn
                  ? ['Professional Design', 'Mobile-Friendly', 'Contact Forms']
                  : ['Diseño Profesional', 'Adaptable a Móviles', 'Formularios de Contacto']
              ).map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/[0.07] bg-black/30 px-3 py-1.5 text-xs text-neutral-400 transition-colors duration-300 group-hover:border-blue-400/15 group-hover:text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="gsap-card group relative isolate flex min-h-80 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 opacity-0 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_20px_60px_-25px_rgba(59,130,246,0.18)] sm:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-20 -z-10 h-56 w-56 rounded-full bg-blue-500/10 blur-[80px] transition-colors duration-500 group-hover:bg-blue-500/20"
            />

            <div>
              <div className="mb-7 flex items-center justify-between gap-4">
                <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 font-mono text-[10px] tracking-wider text-blue-300 sm:text-xs">
                  {isEn ? 'GIVE YOUR SITE A REFRESH' : 'RENUEVA TU SITIO WEB'}
                </span>
                <span className="font-mono text-sm text-neutral-600">
                  02
                </span>
              </div>

              <h3 className="mb-3 font-heading text-xl font-bold text-white transition-colors duration-300 group-hover:text-blue-50 sm:text-2xl">
                {isEn ? 'Website Redesigns' : 'Rediseño de Sitios Web'}
              </h3>

              <p className="font-sans text-sm leading-7 text-neutral-400">
                {isEn
                  ? 'Give your existing website a fresh, modern look with improved layouts, easier navigation, and a smoother experience for your visitors.'
                  : 'Dale un aspecto moderno a tu sitio web con mejores diseños, navegación más sencilla y una experiencia más agradable para tus visitantes.'}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {(
                isEn
                  ? ['Modern Layouts', 'Better Usability', 'Responsive Design']
                  : ['Diseños Modernos', 'Mejor Usabilidad', 'Diseño Adaptable']
              ).map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/[0.07] bg-black/30 px-3 py-1.5 text-xs text-neutral-400 transition-colors duration-300 group-hover:border-blue-400/15 group-hover:text-neutral-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="gsap-card group relative isolate flex flex-col gap-8 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 opacity-0 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 sm:p-8 md:col-span-3 md:flex-row md:items-center md:justify-between">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-32 -z-10 h-64 w-64 rounded-full bg-indigo-500/[0.07] blur-[90px] transition-colors duration-500 group-hover:bg-blue-500/10"
            />

            <div className="relative max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 font-mono text-[10px] tracking-wider text-neutral-300 sm:text-xs">
                  {isEn ? 'MAKE YOUR WEBSITE DO MORE' : 'SACA MÁS PROVECHO A TU SITIO'}
                </span>
                <span className="font-mono text-sm text-neutral-600">
                  03
                </span>
              </div>

              <h3 className="mb-3 font-heading text-xl font-bold text-white sm:text-2xl">
                {isEn
                  ? 'Custom Features & Functionality'
                  : 'Funciones y Mejoras Personalizadas'}
              </h3>

              <p className="max-w-xl font-sans text-sm leading-7 text-neutral-400 sm:text-base">
                {isEn
                  ? 'Add useful features that make your website work harder for your business, from interactive elements and contact forms to API integrations and other tailored improvements.'
                  : 'Agrega funciones útiles que hagan que tu sitio web trabaje mejor para tu negocio, desde elementos interactivos y formularios de contacto hasta integraciones con APIs y otras mejoras a medida.'}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {(
                  isEn
                    ? ['Interactive Features', 'Forms & Integrations', 'Custom Improvements']
                    : ['Funciones Interactivas', 'Formularios e Integraciones', 'Mejoras a Medida']
                ).map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/[0.07] bg-black/30 px-3 py-1.5 text-xs text-neutral-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/services"
              className="
                group inline-flex items-center gap-3
                rounded-full border border-blue-400/30
                bg-blue-500/10 px-6 py-3
                font-heading text-sm font-semibold text-blue-300
                transition-all duration-300
                hover:border-blue-400/60
                hover:bg-blue-500/20
                hover:text-white
                hover:shadow-[0_0_24px_rgba(59,130,246,0.15)]
              "
            >
              {isEn ? 'Explore All Services' : 'Ver Todos los Servicios'}
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </article>
        </div>

        <div className="gsap-footer mt-8 flex flex-col gap-2 border-t border-white/6 pt-5 opacity-0 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-wide text-neutral-500">
            {isEn
              ? 'YOUR BUSINESS. YOUR GOALS. BUILT FOR YOU.'
              : 'TU NEGOCIO. TUS OBJETIVOS. HECHO PARA TI.'}
          </p>

          <span className="font-mono text-[11px] text-neutral-600">
            {isEn ? 'Websites Built Around Your Needs' : 'Sitios Web Adaptados a Tus Necesidades'}
          </span>
        </div>
      </div>
    </section>
  );
}