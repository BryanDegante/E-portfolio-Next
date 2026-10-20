
'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FAQData } from '@/data/FAQData';
import type { RootState } from '@/redux/store';
import FaqCard from '@/components/UI/Faq Card/FaqCard';

export default function Faq() {
  const language = useSelector(
    (state: RootState) => state.language.language
  );

  const isEn = language === 'en';

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="relative border-t border-white/10 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">

          {/* Section Header */}
          <div className="lg:sticky lg:top-32 lg:col-span-5">
            <span className="mb-3.5 inline-block rounded-full border border-blue-400/20 bg-blue-400/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-blue-300">
              {isEn ? 'FAQ' : 'PREGUNTAS FRECUENTES'}
            </span>

            <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {isEn ? 'Got Questions? ' : '¿Tienes Dudas? '}
              <br />

              <span className="text__color--blue">
                {isEn
                  ? "We've Got Answers."
                  : 'Aquí Tenemos Respuestas.'}
              </span>
            </h2>

            <p className="mt-4 font-sans text-base leading-relaxed text-neutral-400 sm:text-lg">
              {isEn
                ? 'Find clear answers regarding custom components, timelines, deliverables, process workflows, and post-launch support.'
                : 'Encuentra respuestas claras sobre componentes personalizados, tiempos de entrega, entregables, flujos de trabajo y soporte posterior al lanzamiento.'}
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 lg:col-span-7">
            {FAQData.map((item, index) => (
              <FaqCard
                key={item.question.en}
                item={item}
                index={index}
                openIndex={openIndex}
                toggleAccordion={toggleAccordion}
                language={language}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
