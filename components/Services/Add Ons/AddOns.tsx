'use client';

import { useSelector } from 'react-redux';
import { AddOnData } from '@/data/AddOnData';
import type { RootState } from '@/redux/store';
import AddOnCard from '@/components/UI/AddOnCard/AddOnCard';

export default function AddOns() {
  const language = useSelector(
    (state: RootState) => state.language.language
  );

  const isEn = language === 'en';

  return (
    <section id="addons" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        
        {/* Distinct Left-Aligned Split Header */}
        <div className="mb-14 border-t border-white/10 pt-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            
            {/* Left Column: Tag & Title */}
            <div className="max-w-2xl">
              <span className="mb-3.5 inline-block rounded-full border border-blue-400/20 bg-blue-400/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-blue-300">
              {isEn ? 'OPTIONAL ADD-ONS' : 'EXTRAS OPCIONALES'}
              </span>

              <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
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

            {/* Right Column: Description Text */}
            <div className="max-w-md lg:text-right">
              <p className="font-sans text-sm leading-relaxed text-neutral-400 sm:text-base">
                {isEn
                  ? 'Tailor your plan with specialized setup assistance, managed hosting, or ongoing maintenance.'
                  : 'Personaliza tu plan con asistencia de configuración especializada, hosting administrado o mantenimiento continuo.'}
              </p>
            </div>

          </div>
        </div>

        {/* Add-Ons Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {AddOnData.map((addon) => (
            <AddOnCard
              key={addon.title.en}
              addon={addon}
              language={language}
            />
          ))}
        </div>

      </div>
    </section>
  );
}