'use client';

import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
import { setIsModalOpen } from '@/redux/slices/ContactSlice';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Contact() {
  const dispatch = useDispatch();

  const language = useSelector((state: RootState) => state.language.language);

  const isEn = language === 'en';

  const [localTime, setLocalTime] = useState('');

  const containerRef = useRef<HTMLElement>(null);


  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setLocalTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/Chicago',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      const section = containerRef.current;

      if (!section) return;

      const label = section.querySelector('.contact-label');
      const heading = section.querySelector('.contact-heading');
      const description = section.querySelector('.contact-description');
      const availability = section.querySelector('.contact-availability');
      const card = section.querySelector('.contact-card');
      const footer = section.querySelector('.contact-footer');

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
          once: true,
        },
      });

      if (label) {
        timeline.fromTo(
          label,
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
        );
      }

      if (heading) {
        timeline.fromTo(
          heading,
          {
            opacity: 0,
            y: 30,
            filter: 'blur(8px)',
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.3',
        );
      }

      if (description) {
        timeline.fromTo(
          description,
          {
            opacity: 0,
            y: 18,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
          },
          '-=0.55',
        );
      }

      if (availability) {
        timeline.fromTo(
          availability,
          {
            opacity: 0,
            scale: 0.94,
            y: 10,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: 'back.out(1.5)',
          },
          '-=0.25',
        );
      }

      if (card) {
        timeline.fromTo(
          card,
          {
            opacity: 0,
            x: 35,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
          },
          '-=0.45',
        );
      }

      if (footer) {
        timeline.fromTo(
          footer,
          {
            opacity: 0,
            y: 12,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power2.out',
          },
          '-=0.3',
        );
      }
    },
    { scope: containerRef },
  );

  const handleOpenContact = () => {
    dispatch(setIsModalOpen(true));
  };

  return (
    <section
      ref={containerRef}
      id='contact'
      className='flex scroll-mt-28 flex-col justify-center py-16 sm:py-20 lg:min-h-dvh lg:py-24'>
      <div className='relative mx-auto w-full max-w-6xl border-t border-neutral-900 px-5 pt-10 sm:px-8 sm:pt-12 lg:px-10'>
        <div className='contact-label mb-8 inline-flex items-center'>
          <span className='font-mono text-xs uppercase tracking-widest text-cyan-400'>
            05 // {isEn ? 'CONTACT' : 'CONTACTO'}
          </span>
        </div>

        <div className='grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:items-center lg:gap-12'>
          <div className='flex flex-col lg:col-span-7'>
            <div>
              <h2 className='contact-heading mb-5 max-w-3xl font-heading text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl'>
                {isEn
                  ? 'Have a project in mind?'
                  : '¿Tienes un proyecto en mente?'}{' '}
                <span className='text__color--blue'>
                  {isEn
                    ? "Let's build something that works for your business."
                    : 'Hagamos algo que impulse tu negocio.'}
                </span>
              </h2>

              <p className='contact-description max-w-xl font-heading text-base font-medium leading-7 text-neutral-400 sm:text-lg sm:leading-8'>
                {isEn
                  ? 'I help businesses create professional websites, refresh outdated designs, and add useful features that make it easier for customers to connect.'
                  : 'Ayudo a los negocios a crear sitios web profesionales, renovar diseños anticuados y agregar funciones útiles para conectar mejor con sus clientes.'}
              </p>
            </div>

            <div className='contact-availability mt-7 inline-flex w-fit items-center gap-2.5 rounded-full border border-neutral-800 bg-neutral-900/80 px-4 py-2'>
              <span className='relative flex h-2 w-2 shrink-0'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75' />
                <span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
              </span>

              <span className='font-mono text-xs text-neutral-300'>
                {isEn
                  ? 'Open to new projects'
                  : 'Disponible para nuevos proyectos'}
              </span>
            </div>
          </div>

          <div className='contact-card relative flex flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur-md sm:p-7 lg:col-span-5 lg:p-8'>
            <div className='pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl' />

            <div className='relative'>
              <span className='mb-5 block font-mono text-xs uppercase tracking-widest text-neutral-500'>
                {isEn ? "LET'S TALK" : 'HABLEMOS'}
              </span>

              <button
                type='button'
                onClick={handleOpenContact}
                className='group mb-3 flex w-full items-center justify-between gap-4 rounded-2xl border border-neutral-800 bg-neutral-950 p-4 text-left transition-all duration-300 hover:border-blue-500/40 active:scale-[0.99]'>
                <span className='flex min-w-0 flex-col'>
                  <span className='mb-1 font-mono text-xs text-neutral-500'>
                    {isEn ? 'CONTACT ME' : 'ESCRÍBEME'}
                  </span>

                  <span className='text-sm font-semibold text-white sm:text-base'>
                    {isEn
                      ? 'Start a Conversation'
                      : 'Iniciemos una Conversación'}
                  </span>
                </span>

                <span className='shrink-0 text-neutral-400 transition-all group-hover:translate-x-1 group-hover:text-blue-400'>
                  →
                </span>
              </button>

             
            </div>

            <div className='contact-footer relative mt-6 flex items-center justify-between border-t border-neutral-800/80 pt-5 font-mono text-xs text-neutral-500'>
              <span>Houston, TX {localTime && `• ${localTime} CT`}</span>

              <a
                href='https://github.com/BryanDegante'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit my GitHub profile'
                className='transition-colors hover:text-white'>
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
