'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ContactButton from '@/components/UI/Contact/ContactButton';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP);
}

export default function Landing() {
  const language = useSelector((state: RootState) => state.language.language);
  const isEn = language === 'en';

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
          duration: 0.9,
        },
      });

      tl.fromTo(
        '.gsap-title',
        {
          opacity: 0,
          y: 40,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.1,
          delay: 0.15,
        }
      )
        .fromTo(
          '.gsap-role',
          {
            opacity: 0,
            y: 25,
            filter: 'blur(5px)',
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          },
          '-=0.65'
        )
        .fromTo(
          '.gsap-desc',
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .fromTo(
          '.gsap-actions li',
          {
            opacity: 0,
            y: 16,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            stagger: 0.14,
            clearProps: 'transform',
          },
          '-=0.35'
        );
    },
    { scope: containerRef }
  );

  return (
    <section className="flex min-h-dvh flex-col justify-center">
      <div
        ref={containerRef}
        className="mx-auto flex min-h-[80vh] w-full max-w-200 flex-col items-center justify-center px-5 py-12"
      >
        <div className="flex w-full max-w-160 flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="gsap-title font-heading text-4xl font-bold leading-tight tracking-tight text-white opacity-0 sm:text-5xl md:text-6xl lg:text-7xl">
              {isEn ? "Websites Built" : 'Sitios Web Hechos'}
            </h1>

            <h2 className="gsap-role font-heading text-2xl font-semibold leading-tight text-neutral-200 opacity-0 sm:text-3xl md:text-4xl">
              <span className="text__color--blue">
                {isEn
                  ? 'Simple landing pages to fully customized websites'
                  : 'páginas de aterrizaje sencillas hasta sitios web totalmente personalizados'}
              </span>
            </h2>

            <p className="gsap-desc mt-2 max-w-lg font-heading text-base font-normal leading-relaxed text-neutral-400 opacity-0 sm:text-lg lg:text-xl">
              {isEn
                ? 'Modern responsive websites designed around your goals'
                : 'modernos y responsivos diseñados para alcanzar tus objetivos.'}
            </p>
          </div>

          <ul className="gsap-actions flex list-none flex-wrap items-center justify-center gap-3">
            <li className="opacity-0">
              <ContactButton />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}