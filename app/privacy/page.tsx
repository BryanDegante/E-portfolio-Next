'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';

export default function PrivacyPolicyPage() {
  const language = useSelector(
    (state: RootState) => state.language.language
  );
  const isEn = language === 'en';

  return (
    <main className="relative min-h-screen bg-section text-neutral-300 py-24 sm:py-32 overflow-hidden">
      {/* Background glow effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-125 w-full max-w-7xl bg-blue-500/3 blur-[120px]"
      />

      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
        
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-blue-400 transition-colors hover:text-blue-300"
          >
            <span>←</span> {isEn ? 'Back to Home' : 'Volver al Inicio'}
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 border-b border-white/10 pb-8">
          <span className="mb-3.5 inline-block rounded-full border border-blue-400/20 bg-blue-400/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-blue-300">
            {isEn ? 'Legal & Privacy' : 'Legal y Privacidad'}
          </span>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {isEn ? 'Privacy Policy' : 'Política de Privacidad'}
          </h1>
          <p className="mt-3 font-mono text-xs text-neutral-400">
            {isEn ? 'Last updated: September 21, 2026' : 'Última actualización: 21 de septiembre de 2026'}
          </p>
        </header>

        {/* Content */}
        <div className="space-y-10 font-sans text-neutral-300 leading-relaxed">
          <p className="text-base sm:text-lg">
            {isEn
              ? 'This Privacy Policy explains how Bryan Degante ("I," "me," or "my") collects, uses, and protects information submitted through this website.'
              : 'Esta Política de Privacidad explica cómo Bryan Degante ("yo" o "mi") recopila, utiliza y protege la información enviada a través de este sitio web.'}
          </p>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
              {isEn ? 'Information I Collect' : 'Información que Recopilo'}
            </h2>
            <p>
              {isEn
                ? 'When you use the contact form on this website, you may provide:'
                : 'Cuando utilizas el formulario de contacto en este sitio web, puedes proporcionar:'}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              <li>{isEn ? 'Your name' : 'Tu nombre'}</li>
              <li>{isEn ? 'Your email address' : 'Tu correo electrónico'}</li>
              <li>{isEn ? 'The information included in your message' : 'La información incluida en tu mensaje'}</li>
            </ul>
            <p className="mt-3">
              {isEn
                ? 'I only collect information that you voluntarily provide through the contact form.'
                : 'Solo recopilo información que proporcionas voluntariamente a través del formulario de contacto.'}
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
              {isEn ? 'How I Use Your Information' : 'Cómo Utilizo tu Información'}
            </h2>
            <p>
              {isEn
                ? 'Information submitted through the contact form is used solely to:'
                : 'La información enviada a través del formulario de contacto se utiliza únicamente para:'}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              <li>{isEn ? 'Respond to your inquiry' : 'Responder a tu consulta'}</li>
              <li>{isEn ? 'Communicate with you about your request' : 'Comunicarme contigo respecto a tu solicitud'}</li>
              <li>{isEn ? 'Discuss potential freelance services or projects' : 'Discutir posibles servicios o proyectos independientes'}</li>
            </ul>
            <p className="mt-3">
              {isEn
                ? 'I do not use the information submitted through the contact form for unrelated marketing purposes.'
                : 'No utilizo la información enviada a través del formulario de contacto para fines de marketing no relacionados.'}
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
              {isEn ? 'How Your Information Is Processed' : 'Cómo se Procesa tu Información'}
            </h2>
            <p>
              {isEn
                ? 'The contact form uses EmailJS to process and deliver submitted messages to me. Information submitted through the form may therefore be processed by EmailJS as part of providing this service.'
                : 'El formulario de contacto utiliza EmailJS para procesar y entregarme los mensajes enviados. Por lo tanto, la información enviada a través del formulario puede ser procesada por EmailJS como parte de la prestación de este servicio.'}
            </p>
            <p>
              {isEn
                ? 'For more information about how EmailJS handles data, please review their privacy policy.'
                : 'Para obtener más información sobre cómo EmailJS maneja los datos, revisa su política de privacidad.'}
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
              {isEn ? 'Information Sharing' : 'Compartición de Información'}
            </h2>
            <p>
              {isEn
                ? 'I do not sell, rent, or trade your personal information.'
                : 'No vendo, alquilo ni comercializo tu información personal.'}
            </p>
            <p>
              {isEn
                ? 'Information submitted through the contact form may be processed by third-party services used to operate the website and deliver communications, such as EmailJS.'
                : 'La información enviada a través del formulario de contacto puede ser procesada por servicios de terceros utilizados para operar el sitio web y entregar comunicaciones, como EmailJS.'}
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
              {isEn ? 'Data Retention' : 'Retención de Datos'}
            </h2>
            <p>
              {isEn
                ? 'I retain information submitted through the contact form only for as long as reasonably necessary to respond to your inquiry, communicate with you about a potential project, or maintain appropriate business records.'
                : 'Conservo la información enviada a través del formulario de contacto solo durante el tiempo razonablemente necesario para responder a tu consulta, comunicarme contigo sobre un posible proyecto o mantener los registros comerciales apropiados.'}
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
              {isEn ? 'Cookies and Tracking' : 'Cookies y Seguimiento'}
            </h2>
            <p>
              {isEn
                ? 'This website may use cookies or similar technologies that are necessary for the website to function properly.'
                : 'Este sitio web puede utilizar cookies o tecnologías similares que sean necesarias para que el sitio funcione correctamente.'}
            </p>
            <p>
              {isEn
                ? 'If analytics or other tracking services are added to the website in the future, this Privacy Policy will be updated to describe what information those services collect and how it is used.'
                : 'Si en el futuro se agregan servicios de analítica u otros servicios de seguimiento al sitio web, esta Política de Privacidad se actualizará para describir qué información recopilan esos servicios y cómo se utiliza.'}
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
              {isEn ? 'Third-Party Services' : 'Servicios de Terceros'}
            </h2>
            <p>
              {isEn
                ? 'This website may use third-party services to provide certain functionality, including form submission, website hosting, and other technical services.'
                : 'Este sitio web puede utilizar servicios de terceros para proporcionar ciertas funcionalidades, incluyendo el envío de formularios, el alojamiento del sitio web y otros servicios técnicos.'}
            </p>
            <p>
              {isEn
                ? 'These third-party services may process information in accordance with their own privacy policies.'
                : 'Estos servicios de terceros pueden procesar la información de acuerdo con sus propias políticas de privacidad.'}
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
              {isEn ? "Children's Privacy" : 'Privacidad de los Niños'}
            </h2>
            <p>
              {isEn
                ? 'This website is not intended for children under the age of 13, and I do not knowingly collect personal information from children under 13.'
                : 'Este sitio web no está dirigido a niños menores de 13 años, y no recopilo a sabiendas información personal de niños menores de 13 años.'}
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
              {isEn ? 'Changes to This Privacy Policy' : 'Cambios a Esta Política de Privacidad'}
            </h2>
            <p>
              {isEn
                ? 'This Privacy Policy may be updated from time to time to reflect changes to the website, services, or how information is handled.'
                : 'Esta Política de Privacidad puede actualizarse de vez en cuando para reflejar cambios en el sitio web, los servicios o la forma en que se maneja la información.'}
            </p>
            <p>
              {isEn
                ? 'Any changes will be posted on this page with an updated "Last updated" date.'
                : 'Cualquier cambio se publicará en esta página con una fecha actualizada de "Última actualización".'}
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-4 border-t border-white/10 pt-8">
            <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
              {isEn ? 'Contact' : 'Contacto'}
            </h2>
            <p>
              {isEn
                ? 'If you have questions about this Privacy Policy or how your information is handled, you can contact me through the contact form on this website.'
                : 'Si tienes preguntas sobre esta Política de Privacidad o sobre cómo se maneja tu información, puedes contactarme a través del formulario de contacto de este sitio web.'}
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}