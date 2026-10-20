'use client';

import type { AddOn } from '@/data/AddOnData';
import { FiPlus } from 'react-icons/fi';

type AddOnCardProps = {
  addon: AddOn;
  language: 'en' | 'es';
};

export default function AddOnCard({ addon, language }: AddOnCardProps) {
  const isEn = language === 'en';
  const isManaged = addon.type.toLowerCase() === 'managed';

  return (
    <article className="group relative isolate flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_20px_60px_-25px_rgba(59,130,246,0.18)]">
      
      {/* Subtle background ambient glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 -z-10 h-48 w-48 rounded-full bg-blue-500/10 blur-[70px] transition-all duration-500 group-hover:bg-blue-400/20"
      />

      <div>
        {/* Top Meta: Type Badge & Price Tag */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-wider text-blue-300">
            {addon.type}
          </span>
          <div className="flex items-baseline gap-1.5 rounded-full border border-white/5 bg-black/40 px-3.5 py-1">
            <span className="font-heading text-xl font-bold text-white">
              ${addon.price}
            </span>
            <span className="font-mono text-[10px] text-neutral-400">
              {isManaged
                ? (isEn ? '/mo' : '/mes')
                : (isEn ? 'one-time' : 'pago único')}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-3 font-heading text-xl font-bold text-white transition-colors group-hover:text-blue-50 sm:text-2xl">
          {addon.title[language]}
        </h3>

        {/* Description */}
        <p className="font-sans text-sm leading-relaxed text-neutral-400">
          {addon.description[language]}
        </p>
      </div>

      {/* Card Footer */}
      <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
        <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
          {isManaged
            ? (isEn ? 'Recurring Service' : 'Servicio Recurrente')
            : (isEn ? 'One-Time Setup' : 'Configuración Única')}
        </span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/3 text-neutral-400 transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/10 group-hover:text-blue-400 group-hover:scale-110">
          <FiPlus className="h-3.5 w-3.5" />
        </span>
      </div>

    </article>
  );
}