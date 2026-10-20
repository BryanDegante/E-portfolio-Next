'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import ExpandLink from '../Expand Button/ExpandLink';
import ContactButton from '../Contact/ContactButton';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import HoverLink from '../HoverLink/HoverLink';

export default function Footer() {
  const language = useSelector((state: RootState) => state.language.language);
  const isEn = language === 'en';

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='w-full border-t border-slate-800/60 bg-section font-sans'>
      <div className='mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10'>
        
        <div className='grid grid-cols-1 gap-10 md:grid-cols-12 mb-12'>
          
          <div className='flex flex-col gap-3 md:col-span-5'>
            <Link
              href='/'
              className='font-heading text-lg font-bold tracking-wider text-white transition-colors hover:text-blue-400'>
              BRYAN DEGANTE<span className='text-blue-500'>.</span>
            </Link>
            <p className='max-w-sm text-xs text-neutral-400 font-medium leading-relaxed'>
              {isEn
                ? 'Frontend developer specializing in Next.js, modern UI/UX design systems, and interactive web experiences.'
                : 'Desarrollador frontend especializado en Next.js, sistemas de diseño UI/UX y experiencias web interactivas.'}
            </p>
          </div>

          <div className='flex flex-col gap-2.5 md:col-span-3 font-mono  text-neutral-400'>
            <span className='text-[10px] uppercase tracking-widest text-neutral-600 font-semibold mb-1 '>
              {isEn ? 'Navigation' : 'Navegación'}
            </span>
            
            <HoverLink link='/' css='text-xs w-fit' label={isEn ? 'Home' : 'Inicio'}/>
            <HoverLink link='/Projects' css='text-xs w-fit' label={isEn ? 'Projects' : 'Proyectos'}/>
            <HoverLink link='/services' css='text-xs w-fit' label=  {isEn ? 'Services' : 'Servicios'}/>
          
          </div>

          <div className='flex flex-col gap-3 md:col-span-4 md:items-end font-mono text-xs text-neutral-400'>
            <span className='text-[10px] uppercase tracking-widest text-neutral-600 font-semibold mb-1 w-full text-left md:text-right'>
              {isEn ? 'Connect' : 'Conectar'}
            </span>
            <div className='flex flex-wrap items-center gap-4'>
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

        </div>

        <div className='h-px w-full bg-slate-800/40 mb-8' />

        <div className='flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between font-mono text-xs text-neutral-500'>
          
          <div className='flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] '>
            <span>© {currentYear} Bryan Degante.</span>
            <span>•</span>
            <Link
              href='/privacy'
              className='transition-colors hover:text-neutral-300'>
              {isEn ? 'Privacy Policy' : 'Política de Privacidad'}
            </Link>
            <span>•</span>
            <Link
              href='/sitemap'
              className='transition-colors hover:text-neutral-300'>
              Sitemap
            </Link>
            <span>•</span>
            <a
              href='/robots.txt'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-colors hover:text-neutral-300'>
              Robots
            </a>
          </div>

          <button
            type='button'
            onClick={scrollToTop}
            className='group inline-flex items-center gap-2 text-neutral-400 transition-colors hover:text-white w-fit'>
            <span>{isEn ? 'Back to top' : 'Volver arriba'}</span>
            <span className='transition-transform duration-300 group-hover:-translate-y-0.5'>
              ↑
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}