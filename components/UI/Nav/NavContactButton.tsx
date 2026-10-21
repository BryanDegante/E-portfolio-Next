'use client';

import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
import { FiArrowRight } from 'react-icons/fi';
import { setIsModalOpen } from '@/redux/slices/ContactSlice';

type NavbarContactButtonProps={
  onClick ? : () => void
}

export default function NavbarContactButton({onClick}: NavbarContactButtonProps) {
  const language = useSelector(
    (state: RootState) => state.language.language
  );
  const isEn = language === 'en';
  const dispatch = useDispatch();


  return (
    <button
      className="
        group relative isolate inline-flex items-center gap-2.5
        overflow-hidden rounded-full 
        border border-blue-500/30 bg-blue-500/10 
        px-5 py-2.5 font-heading text-xs font-semibold uppercase tracking-wider text-blue-300
        backdrop-blur-md transition-all duration-300
        hover:border-blue-400/60 hover:bg-blue-500/20 hover:text-white
        hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.35)]
        active:scale-95
      "
      
onClick={() => {
  onClick?.(); 
  dispatch(setIsModalOpen(true)); 
}}

      type='button'
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-blue-600/20 to-cyan-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <span>{isEn ? "Let's Talk" : 'Hablemos'}</span>

      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 transition-all duration-300 group-hover:bg-blue-400 group-hover:text-neutral-950 group-hover:translate-x-0.5">
        <FiArrowRight className="h-3 w-3" />
      </span>
    </button>
  );
}