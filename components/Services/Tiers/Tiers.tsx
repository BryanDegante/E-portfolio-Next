'use client';
import { useSelector } from 'react-redux';
import { TierData } from '@/data/TierData';
import type { RootState } from '@/redux/store';
import TierCard from '@/components/UI/Tier Card/TierCard';

export default function Tiers() {
  const language = useSelector(
    (state: RootState) => state.language.language
  );

  const isEn = language === 'en';

  return (
    <section id="Tiers" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-3 inline-block rounded-full border border-blue-400/20 bg-blue-400/15 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-blue-300">
           {isEn ? 'TIERS' : 'PLANES'}
          </span>

          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {isEn
              ? 'Transparent Pricing for '
              : 'Precios Transparentes para '}
            <span className="text__color--blue">
              {isEn ? 'Every Stage.' : 'Cada Etapa.'}
            </span>
          </h2>

          <p className="mt-4 font-sans text-base text-neutral-400 sm:text-lg">
            {isEn
              ? 'Choose the package that best fits your business goals and online presence requirements.'
              : 'Elige el paquete que mejor se adapte a los objetivos de tu negocio y requisitos de presencia en línea.'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch">
          {TierData.map((tier, index) => (
            <TierCard
              key={tier.title.en}
              tier={tier}
              index={index}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
