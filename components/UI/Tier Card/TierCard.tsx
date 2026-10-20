
import type { Tier } from '@/data/TierData';
import ContactButton from '@/components/UI/Contact/ContactButton';
import { FiCheck, FiExternalLink } from 'react-icons/fi';

type TierCardProps = {
  tier: Tier;
  index: number;
  language: 'en' | 'es';
};

export default function TierCard({
  tier,
  index,
  language,
}: TierCardProps) {
  const isEn = language === 'en';
  const isPopular = index === 1;

  return (
    <div
      className={`relative flex flex-col justify-between rounded-3xl border bg-neutral-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
        isPopular
          ? 'border-blue-400/50 shadow-[0_20px_60px_-15px_rgba(59,130,246,0.25)] lg:-translate-y-2'
          : 'border-white/10 hover:border-blue-400/30'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full border border-blue-400/40 bg-blue-500 px-4 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
          {isEn ? 'Most Popular' : 'Más Popular'}
        </div>
      )}

      <div>
        <div className="flex items-baseline justify-between">
          <h3 className="font-heading text-2xl font-bold text-white">
            {tier.title[language]}
          </h3>

          <div className="flex items-baseline gap-1">
            <span className="font-heading text-4xl font-extrabold text-white">
              ${tier.price}
            </span>
            <span className="font-mono text-xs text-neutral-500">
              USD
            </span>
          </div>
        </div>

        <p className="mt-4 min-h-12.5 font-sans text-sm leading-relaxed text-neutral-400">
          {tier.subtitle[language]}
        </p>

        <div className="mt-8">
          <p className="mb-4 font-mono text-xs uppercase tracking-wider text-neutral-500">
            {isEn ? "What's included:" : 'Lo que incluye:'}
          </p>

          <ul className="space-y-3">
            {tier.list[language].map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 font-sans text-sm text-neutral-300"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  <FiCheck className="h-3 w-3" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="mt-8 rounded-2xl border border-white/5 bg-black/30 p-4">
          <p className="mb-1 font-mono text-[11px] uppercase tracking-wider text-blue-400">
            {isEn ? 'Ideal For:' : 'Ideal Para:'}
          </p>
          <p className="font-sans text-xs leading-relaxed text-neutral-400">
            {tier.best[language]}
          </p>
        </div>

        {tier.examples.length > 0 && (
          <div className="mt-6">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-neutral-500">
              {isEn ? 'Example Projects:' : 'Proyectos de Ejemplo:'}
            </p>

            <div className="flex flex-wrap gap-2">
              {tier.examples.map((ex) => (
                <a
                  key={ex.name}
                  href={ex.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/3 px-3 py-1.5 font-sans text-xs text-neutral-300 transition-all hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white"
                >
                  <span>{ex.name}</span>
                  <FiExternalLink className="h-3 w-3 text-neutral-500 transition-colors group-hover/link:text-blue-400" />
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex w-full justify-center border-t border-white/5 pt-6">
          <div className="w-full [&_button]:w-full [&_button]:justify-center">
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
}
