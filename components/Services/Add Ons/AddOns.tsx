'use client';

import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { AddOnData } from '@/data/AddOnData';
import type { RootState } from '@/redux/store';
import AddOnCard from '@/components/UI/AddOnCard/AddOnCard';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function AddOns() {
  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const language = useSelector(
    (state: RootState) => state.language.language
  );

  const isEn = language === 'en';

  useGSAP(
    () => {
      const section = sectionRef.current;
      const tag = tagRef.current;
      const title = titleRef.current;
      const desc = descRef.current;
      const grid = gridRef.current;

      if (!section || !tag || !title || !desc || !grid) return;

      const cards = gsap.utils.toArray<HTMLElement>(
        grid.querySelectorAll('.addon-card')
      );

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.set([tag, title, desc], { autoAlpha: 0, y: 30 });
        gsap.set(cards, { autoAlpha: 0, y: 40 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        });

        tl.to(tag, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' })
          .to(title, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
          .to(desc, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
          .to(
            cards,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.12,
              ease: 'power3.out',
            },
            '-=0.3'
          );

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="addons" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        
        {/* Split Header */}
        <div className="mb-14 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            
            <div className="max-w-2xl">
              <span
                ref={tagRef}
                className="mb-3.5 inline-block rounded-full border border-blue-400/20 bg-blue-400/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-blue-300 opacity-0"
              >
                {isEn ? 'OPTIONAL ADD-ONS' : 'EXTRAS OPCIONALES'}
              </span>

              <h2
                ref={titleRef}
                className="font-heading text-3xl font-bold tracking-tight text-white opacity-0 sm:text-4xl lg:text-5xl"
              >
                {isEn
                  ? 'Enhance Your Package with '
                  : 'Mejora tu Paquete con '}

                <span className="text__color--blue">
                  {isEn
                    ? 'Extra Services.'
                    : 'Servicios Adicionales.'}
                </span>
              </h2>
            </div>

            <div className="max-w-md lg:text-right">
              <p
                ref={descRef}
                className="font-sans text-sm leading-relaxed text-neutral-400 opacity-0 sm:text-base"
              >
                {isEn
                  ? 'Tailor your plan with specialized setup assistance, managed hosting, or ongoing maintenance.'
                  : 'Personaliza tu plan con asistencia de configuración especializada, hosting administrado o mantenimiento continuo.'}
              </p>
            </div>

          </div>
        </div>

        {/* Add-Ons Grid with items-stretch for uniform card height */}
        <div ref={gridRef} className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {AddOnData.map((addon) => (
            <div key={addon.title.en} className="addon-card h-full flex flex-col">
              <AddOnCard
                addon={addon}
                language={language}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}