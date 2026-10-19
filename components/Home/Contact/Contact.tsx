
'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
import { setIsModalOpen } from '@/redux/slices/ContactSlice';

export default function Contact() {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.language);
  const isEn = language === 'en';

  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [localTime, setLocalTime] = useState('');

  const email = 'contact@bryandegante.dev';

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/Chicago',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    setCopied(false);
    setCopyError(false);

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopyError(true);

      setTimeout(() => setCopyError(false), 2500);
    }
  };

  const handleOpenContact = () => {
    dispatch(setIsModalOpen(true));
  };

  return (
    <section
      id="contact"
      className="flex scroll-mt-28 flex-col justify-center py-16 sm:py-20 lg:min-h-dvh lg:py-24"
    >
      <div className="relative mx-auto w-full max-w-6xl border-t border-neutral-900 px-5 pt-10 sm:px-8 sm:pt-12 lg:px-10">
        <div className="mb-8 inline-flex items-center">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            04 // {isEn ? 'CONTACT' : 'CONTACTO'}
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="flex flex-col lg:col-span-7">
            <div>
              <h2 className="mb-5 max-w-3xl font-heading text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
                {isEn
                  ? 'Have a project in mind?'
                  : '¿Tienes un proyecto en mente?'}{' '}
                <span className="text__color--blue">
                  {isEn
                    ? "Let's build something that works for your business."
                    : 'Hagamos algo que impulse tu negocio.'}
                </span>
              </h2>

              <p className="max-w-xl font-heading text-base font-medium leading-7 text-neutral-400 sm:text-lg sm:leading-8">
                {isEn
                  ? 'I help businesses create professional websites, refresh outdated designs, and add useful features that make it easier for customers to connect.'
                  : 'Ayudo a los negocios a crear sitios web profesionales, renovar diseños anticuados y agregar funciones útiles para conectar mejor con sus clientes.'}
              </p>
            </div>

            <div className="mt-7 inline-flex w-fit items-center gap-2.5 rounded-full border border-neutral-800 bg-neutral-900/80 px-4 py-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <span className="font-mono text-xs text-neutral-300">
                {isEn
                  ? 'Open to new projects'
                  : 'Disponible para nuevos proyectos'}
              </span>
            </div>
          </div>

          <div className="relative flex flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur-md sm:p-7 lg:col-span-5 lg:p-8">
            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl" />

            <div className="relative">
              <span className="mb-5 block font-mono text-xs uppercase tracking-widest text-neutral-500">
                {isEn ? "LET'S TALK" : 'HABLEMOS'}
              </span>

              <button
                type="button"
                onClick={handleOpenContact}
                className="group mb-3 flex w-full items-center justify-between gap-4 rounded-2xl border border-neutral-800 bg-neutral-950 p-4 text-left transition-all duration-300 hover:border-blue-500/40"
              >
                <span className="flex min-w-0 flex-col">
                  <span className="mb-1 font-mono text-xs text-neutral-500">
                    {isEn ? 'CONTACT ME' : 'ESCRÍBEME'}
                  </span>

                  <span className="text-sm font-semibold text-white sm:text-base">
                    {isEn
                      ? 'Start a Conversation'
                      : 'Iniciemos una Conversación'}
                  </span>
                </span>

                <span className="shrink-0 text-neutral-400 transition-all group-hover:translate-x-1 group-hover:text-blue-400">
                  →
                </span>
              </button>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-live="polite"
                className="flex w-full items-center justify-between gap-3 rounded-2xl border border-neutral-800 bg-neutral-950 p-4 text-left transition-all duration-300 hover:border-neutral-700"
              >
                <span className="flex min-w-0 flex-col">
                  <span className="mb-1 font-mono text-xs text-neutral-500">
                    {isEn ? 'COPY EMAIL' : 'COPIAR CORREO'}
                  </span>

                  <span
                    className={`wrap-break-word font-mono text-sm ${
                      copyError ? 'text-red-400' : 'text-neutral-300'
                    }`}
                  >
                    {copied
                      ? isEn
                        ? 'Copied to clipboard!'
                        : '¡Copiado al portapapeles!'
                      : copyError
                        ? isEn
                          ? 'Unable to copy. Use the email above.'
                          : 'No se pudo copiar. Usa el correo de arriba.'
                        : email}
                  </span>
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 shrink-0 ${
                    copied
                      ? 'text-emerald-400'
                      : copyError
                        ? 'text-red-400'
                        : 'text-neutral-500'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {copied ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  )}
                </svg>
              </button>
            </div>

            <div className="relative mt-6 flex items-center justify-between border-t border-neutral-800/80 pt-5 font-mono text-xs text-neutral-500">
              <span>
                Houston, TX {localTime && `• ${localTime} CT`}
              </span>

              <a
                href="https://github.com/BryanDegante"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                className="transition-colors hover:text-white"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
