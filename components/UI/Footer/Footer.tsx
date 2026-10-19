'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import ExpandLink from '../Expand Button/ExpandLink';
import ContactButton from '../Contact/ContactButton';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const language = useSelector((state: RootState) => state.language.language);
  const isEn = language === 'en';

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-800/60 bg-section font-sans">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between mb-12">
          
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="font-heading text-lg font-bold tracking-wider text-white transition-colors hover:text-blue-400"
            >
              BRYAN DEGANTE<span className="text-blue-500">.</span>
            </Link>
            <p className="max-w-sm text-xs text-neutral-400 font-medium">
              {isEn
                ? 'Frontend developer specializing in Next.js, modern UI/UX design systems, and interactive web experiences.'
                : 'Desarrollador frontend especializado en Next.js, sistemas de diseño UI/UX y experiencias web interactivas.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-neutral-400">
                         <ExpandLink
                           text='GitHub'
                           icon={<FaGithub className='text-sm text-text sm:text-base' />}
                           link='https://github.com/BryanDegante'
                         />
           
                         <ExpandLink
                           text='LinkedIn'
                           icon={<FaLinkedin className='text-sm text-text sm:text-base' />}
                           link='https://www.linkedin.com/in/bryandegante-dev/'
                         />
           
                         <ContactButton />
          </div>
        </div>

        <div className="h-px w-full bg-slate-800/40 mb-8" />

        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between font-mono text-xs text-neutral-500">
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span>© {currentYear} Bryan Degante.</span>
            <span className="hidden sm:inline">•</span>
            <span>Houston, TX</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-neutral-400 transition-colors hover:text-white w-fit"
          >
            <span>{isEn ? 'Back to top' : 'Volver arriba'}</span>
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
              ↑
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}