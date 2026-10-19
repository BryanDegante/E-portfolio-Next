'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ProjectRing from '@/components/UI/Project Ring/ProjectRing';
import type { RootState } from '@/redux/store';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Projects() {
  const language = useSelector((state: RootState) => state.language.language);
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
          '.gsap-ring',
          { opacity: 0, scale: 0.95, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1 },
          '-=0.5'
        )
        .fromTo(
          '.gsap-cta',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0 },
          '-=0.7'
        );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="Projects" className="min-h-dvh">
      <div className="relative mx-auto max-w-5xl border-t border-neutral-900 px-6 py-28">
        
        <div className="gsap-tag mb-3 inline-flex items-center gap-2 opacity-0">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
            02 // {isEn ? 'PROJECTS' : 'PROYECTOS'}
          </span>
        </div>

        <h2 className="gsap-title mb-4 max-w-3xl text-start font-heading text-3xl font-bold leading-[1.15] tracking-tight text-white opacity-0 sm:text-4xl lg:text-5xl">
          {isEn ? "Things I've" : 'Cosas que he'}{' '}
          <br />
          <span className="text__color--blue">
            {isEn ? 'Built.' : 'Construido.'}
          </span>
        </h2>

        <p className="gsap-desc w-full max-w-2xl text-start font-heading text-lg font-medium leading-relaxed text-neutral-400 opacity-0 md:text-xl">
          {isEn
            ? "A look at the applications I've designed, developed, and brought to life."
            : 'Un vistazo a las aplicaciones que he diseñado, desarrollado y cobrado vida.'}
        </p>

        <div className="gsap-ring mt-12 w-full opacity-0 sm:mt-16">
          <ProjectRing />
        </div>

        <div className="gsap-cta mt-8 flex justify-end opacity-0">
          <Link
            href="/projects"
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
            {isEn ? 'See all projects' : 'Ver todos los proyectos'}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}