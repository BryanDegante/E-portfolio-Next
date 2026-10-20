
import type { AddOn } from '@/data/AddOnData';

type AddOnCardProps = {
  addon: AddOn;
  language: 'en' | 'es';
};

export default function AddOnCard({
  addon,
  language,
}: AddOnCardProps) {
  const isEn = language === 'en';

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-[0_20px_60px_-25px_rgba(59,130,246,0.18)] sm:p-8">
      <div>
        {/* Type Badge & Price */}
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-blue-300 sm:text-xs">
            {addon.type}
          </span>

          <div className="flex items-baseline gap-1">
            <span className="font-heading text-2xl font-bold text-white">
              ${addon.price}
            </span>

            <span className="font-mono text-[11px] text-neutral-500">
              USD
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

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
        <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500">
          {isEn ? 'Optional Add-on' : 'Adicional Opcional'}
        </span>

        <span className="font-mono text-xs font-medium text-blue-400 transition-transform duration-300 group-hover:translate-x-1">
          +
        </span>
      </div>
    </div>
  );
}
