'use client';

import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { TierData } from '@/data/TierData';
import type { RootState } from '@/redux/store';
import TierCard from '@/components/UI/Tier Card/TierCard';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function Tiers() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const language = useSelector(
    (state: RootState) => state.language.language
  );

  const isEn = language === 'en';

  useGSAP(
    () => {
      const section = sectionRef.current;
      const label = labelRef.current;
      const title = titleRef.current;
      const description = descriptionRef.current;
      const cardsContainer = cardsRef.current;

      if (
        !section ||
        !label ||
        !title ||
        !description ||
        !cardsContainer
      ) {
        return;
      }

      const cards = gsap.utils.toArray<HTMLElement>(
        cardsContainer.querySelectorAll('.tier-card')
      );

      const mm = gsap.matchMedia();

      mm.add(
        '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
        () => {
          gsap.set([label, title, description], {
            autoAlpha: 0,
            y: 30,
          });

          gsap.set(cards, {
            autoAlpha: 0,
            y: 50,
          });

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top top+=80', 
              end: '+=150%',
              pin: true,
              pinSpacing: true,
              scrub: 0.6,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          timeline
            .to(label, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out' })
            .to(title, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
            .to(description, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
            
            .to(
              cards,
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
              },
              '+=0.1'
            )
            .to({}, { duration: 0.4 });

          return () => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
          };
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="Tiers"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        
        <div className="mx-auto mb-12 lg:mb-16 max-w-3xl text-center">
          <span
            ref={labelRef}
            className="mb-3 inline-block rounded-full border border-blue-400/20 bg-blue-400/15 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-blue-300"
          >
            04 // {isEn ? 'TIERS' : 'PLANES'}
          </span>

          <h2
            ref={titleRef}
            className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {isEn ? 'Transparent Pricing for ' : 'Precios Transparentes para '}
            <span className="text__color--blue">
              {isEn ? 'Every Stage.' : 'Cada Etapa.'}
            </span>
          </h2>

          <p
            ref={descriptionRef}
            className="mt-4 font-sans text-base text-neutral-400 sm:text-lg"
          >
            {isEn
              ? 'Choose the package that best fits your business goals and online presence requirements.'
              : 'Elige el paquete que mejor se adapte a los objetivos de tu negocio y requisitos de presencia en línea.'}
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch"
        >
          {TierData.map((tier, index) => (
            <div key={tier.title.en} className="tier-card h-full">
              <TierCard
                tier={tier}
                index={index}
                language={language}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}