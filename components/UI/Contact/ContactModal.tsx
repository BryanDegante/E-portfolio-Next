
  'use client';

  import { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import type { RootState } from '@/redux/store';
  import { setIsModalOpen } from '@/redux/slices/ContactSlice';

  export default function ContactModal() {
    const dispatch = useDispatch();

    const language = useSelector((state: RootState) => state.language.language);
    const modalIsOpen = useSelector(
      (state: RootState) => state.contactModal.modalIsOpen
    );

    const isEn = language === 'en';

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      service: 'Business Website',
      message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const closeModal = () => {
      dispatch(setIsModalOpen(false));
    };

    useEffect(() => {
      if (!modalIsOpen) return;

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          closeModal();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }, [modalIsOpen]);

    useEffect(() => {
      if (!modalIsOpen) {
        setIsSubmitting(false);
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          service: 'Business Website',
          message: '',
        });
      }
    }, [modalIsOpen]);

    if (!modalIsOpen) return null;

    const services = isEn
      ? [
          'Business Website',
          'Website Redesign',
          'Custom Features',
          'Other Inquiry',
        ]
      : [
          'Sitio Web para Negocio',
          'Rediseño de Sitio Web',
          'Funciones Personalizadas',
          'Otra Consulta',
        ];

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsSubmitting(true);

      await new Promise((resolve) => setTimeout(resolve, 1200));

      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        closeModal();
      }, 2500);
    };

    return (
      <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-4 pb-6 pt-28 sm:px-6 sm:pt-32">
        <button
          type="button"
          aria-label={isEn ? 'Close contact modal' : 'Cerrar ventana de contacto'}
          onClick={closeModal}
          className="fixed inset-0 h-full w-full cursor-default bg-neutral-950/80 backdrop-blur-md animate-in fade-in duration-300"
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          className="relative z-10 my-0 w-full max-w-xl overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/95 p-5 shadow-2xl backdrop-blur-xl animate-in zoom-in-95 duration-200 sm:p-8"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 mb-6 flex items-start justify-between gap-4">
            <div>
              <span className="mb-1 block font-mono text-xs uppercase tracking-widest text-cyan-400">
                04 // {isEn ? 'DIRECT MESSAGE' : 'MENSAJE DIRECTO'}
              </span>

              <h3
                id="contact-modal-title"
                className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl"
              >
                {isEn ? 'Start a Project' : 'Iniciar un Proyecto'}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {isEn
                  ? "Tell me a little about your business and what you'd like to build."
                  : 'Cuéntame un poco sobre tu negocio y lo que te gustaría crear.'}
              </p>
            </div>

            <button
              type="button"
              onClick={closeModal}
              aria-label={isEn ? 'Close contact modal' : 'Cerrar ventana de contacto'}
              className="shrink-0 rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {isSubmitted ? (
            <div className="relative z-10 flex flex-col items-center justify-center py-12 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h4 className="mb-2 font-heading text-xl font-bold text-white">
                {isEn ? 'Thank You!' : '¡Gracias!'}
              </h4>

              <p className="max-w-xs text-sm text-neutral-400">
                {isEn
                  ? 'Your message has been processed in this demo. Email delivery still needs to be connected.'
                  : 'Tu mensaje se procesó en esta demostración. Aún falta conectar el envío de correos.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
              <fieldset>
                <legend className="mb-2 block font-mono text-xs uppercase text-neutral-400">
                  {isEn ? 'What can I help you with?' : '¿En qué puedo ayudarte?'}
                </legend>

                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      type="button"
                      key={service}
                      onClick={() =>
                        setFormData((previous) => ({
                          ...previous,
                          service,
                        }))
                      }
                      aria-pressed={formData.service === service}
                      className={`rounded-xl border px-3 py-2 font-mono text-xs transition-all ${
                        formData.service === service
                          ? 'border-blue-500/40 bg-blue-500/10 text-blue-400'
                          : 'border-neutral-800 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1 block font-mono text-xs uppercase text-neutral-400"
                  >
                    {isEn ? 'Your Name' : 'Tu Nombre'}
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={(event) =>
                      setFormData((previous) => ({
                        ...previous,
                        name: event.target.value,
                      }))
                    }
                    placeholder={isEn ? 'John Doe' : 'Carlos Pérez'}
                    className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 font-heading text-sm text-white transition-colors placeholder:text-neutral-600 focus:border-blue-500/50 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1 block font-mono text-xs uppercase text-neutral-400"
                  >
                    {isEn ? 'Your Email' : 'Tu Correo'}
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((previous) => ({
                        ...previous,
                        email: event.target.value,
                      }))
                    }
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 font-heading text-sm text-white transition-colors placeholder:text-neutral-600 focus:border-blue-500/50 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1 block font-mono text-xs uppercase text-neutral-400"
                >
                  {isEn ? 'Project Details' : 'Detalles del Proyecto'}
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(event) =>
                    setFormData((previous) => ({
                      ...previous,
                      message: event.target.value,
                    }))
                  }
                  placeholder={
                    isEn
                      ? 'Tell me about your business, goals, or what you need...'
                      : 'Cuéntame sobre tu negocio, tus objetivos o lo que necesitas...'
                  }
                  className="w-full resize-y rounded-2xl border border-neutral-800 bg-neutral-950 p-4 font-heading text-sm text-white transition-colors placeholder:text-neutral-600 focus:border-blue-500/50 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-mono text-xs font-semibold text-black shadow-lg transition-colors hover:bg-blue-400 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <svg
                      className="h-4 w-4 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    {isEn ? 'Sending...' : 'Enviando...'}
                  </span>
                ) : (
                  <span>{isEn ? 'Send Message →' : 'Enviar Mensaje →'}</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }
    