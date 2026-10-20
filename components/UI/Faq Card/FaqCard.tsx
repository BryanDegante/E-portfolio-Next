
import { FiChevronDown } from 'react-icons/fi';
import type { FAQ } from '@/data/FAQData';

type FaqCardProps = {
  item: FAQ;
  index: number;
  openIndex: number | null;
  toggleAccordion: (index: number) => void;
  language: 'en' | 'es';
};

export default function FaqCard({
  item,
  index,
  openIndex,
  toggleAccordion,
  language,
}: FaqCardProps) {
  const isOpen = openIndex === index;

  return (
    <div
      className={`overflow-hidden rounded-2xl border bg-neutral-900/60 backdrop-blur-xl transition-all duration-300 ${
        isOpen
          ? 'border-blue-400/40 shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)]'
          : 'border-white/10 hover:border-white/20'
      }`}
    >
      <button
        type="button"
        onClick={() => toggleAccordion(index)}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between p-6 text-left"
      >
        <span className="pr-4 font-heading text-base font-semibold text-white sm:text-lg">
          {item.question[language]}
        </span>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/3 text-blue-400 transition-transform duration-300 ${
            isOpen
              ? 'rotate-180 border-blue-400/40 bg-blue-500/10'
              : ''
          }`}
        >
          <FiChevronDown className="h-4 w-4" />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? 'grid-rows-[1fr] px-6 pb-6 opacity-100'
            : 'grid-rows-[0fr] px-6 opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-white/5 pt-4 font-sans text-sm leading-relaxed text-neutral-400 sm:text-base">
            {item.answer[language]}
          </p>
        </div>
      </div>
    </div>
  );
}
