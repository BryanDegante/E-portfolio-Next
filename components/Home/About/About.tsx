
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface HighlightCard {
  number: string;
  title: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
}

const HIGHLIGHTS: HighlightCard[] = [
  {
    number: '01',
    title: {
      en: 'Frontend Development',
      es: 'Desarrollo Frontend',
    },
    description: {
      en: 'Building responsive, user-friendly web interfaces with reusable components and maintainable code.',
      es: 'Creación de interfaces web responsivas y fáciles de usar mediante componentes reutilizables y código mantenible.',
    },
  },
  {
    number: '02',
    title: {
      en: 'Application Functionality',
      es: 'Funcionalidad de Aplicaciones',
    },
    description: {
      en: 'Creating interactive features, managing application state, and connecting interfaces to APIs and external services.',
      es: 'Creación de funciones interactivas, gestión del estado de las aplicaciones e integración de interfaces con APIs y servicios externos.',
    },
  },
  {
    number: '03',
    title: {
      en: 'UI & Interaction',
      es: 'Interfaz e Interacción',
    },
    description: {
      en: 'Combining thoughtful design, clean layouts, and purposeful animations to create polished digital experiences.',
      es: 'Combinación de diseño cuidadoso, diseños limpios y animaciones funcionales para crear experiencias digitales pulidas.',
    },
  },
];

const CONTENT = {
  en: {
    label: '01 // ABOUT',
    heading: 'Building thoughtful, responsive web experiences.',
    paragraphOneStart:
      "I'm a frontend developer who enjoys turning ideas into ",
    paragraphOneHighlight: 'clean, functional, and user-friendly',
    paragraphOneEnd:
      ' web experiences. I focus on building interfaces that look great, work across devices, and make it easy for people to interact with the product.',
    paragraphTwoStart:
      'I enjoy the process of taking a design from concept to a ',
    paragraphTwoHighlight: 'working application',
    paragraphTwoEnd:
      ", paying attention to both the details people see and the functionality that makes an experience work. I'm always looking for ways to write better code, improve usability, and create interfaces that feel intuitive and polished.",
    paragraphThreeStart: "I'm currently seeking ",
    paragraphThreeHighlight: 'frontend developer opportunities',
    paragraphThreeEnd:
      " where I can contribute to meaningful projects, collaborate with a team, and continue growing as a developer. I'm also open to select freelance projects.",
  },
  es: {
    label: '01 // SOBRE MÍ',
    heading: 'Creando experiencias web intuitivas y adaptables.',
    paragraphOneStart:
      'Soy desarrollador frontend y disfruto transformar ideas en ',
    paragraphOneHighlight: 'experiencias web funcionales e intuitivas',
    paragraphOneEnd:
      '. Me enfoco en crear interfaces atractivas, adaptables a distintos dispositivos y fáciles de usar.',
    paragraphTwoStart:
      'Me gusta transformar diseños en ',
    paragraphTwoHighlight: 'aplicaciones funcionales',
    paragraphTwoEnd:
      ', prestando atención tanto a los detalles visuales como al funcionamiento de cada experiencia. Siempre busco mejorar mi código, la usabilidad y la forma en que las personas interactúan con una aplicación.',
    paragraphThreeStart: 'Actualmente busco ',
    paragraphThreeHighlight: 'oportunidades como desarrollador frontend',
    paragraphThreeEnd:
      ' donde pueda contribuir a proyectos reales, colaborar con un equipo y seguir creciendo profesionalmente. También estoy disponible para proyectos freelance seleccionados.',
  },
};

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const language = useSelector(
    (state: RootState) => state.language.language
  );

  const content = CONTENT[language];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-animate',
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="About"
      className="relative mx-auto max-w-5xl border-t border-neutral-900 px-6 py-28"
    >
      <div className="about-animate mb-3 inline-flex items-center gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
          {content.label}
        </span> 
      </div>

      <h2 className="about-animate mb-12 max-w-3xl font-heading text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
        {content.heading}
      </h2>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        <div className="space-y-6 font-body text-base leading-relaxed text-neutral-300 sm:text-lg lg:col-span-7">
          <p className="about-animate">
            {content.paragraphOneStart}
            <span className="text__color--blue font-semibold">
              {content.paragraphOneHighlight}
            </span>
            {content.paragraphOneEnd}
          </p>

          <p className="about-animate">
            {content.paragraphTwoStart}
            <span className="text__color--blue font-semibold">
              {content.paragraphTwoHighlight}
            </span>
            {content.paragraphTwoEnd}
          </p>

          <p className="about-animate text-neutral-400">
            {content.paragraphThreeStart}
            <span className="text__color--blue font-semibold">
              {content.paragraphThreeHighlight}
            </span>
            {content.paragraphThreeEnd}
          </p>
        </div>

        <div className="space-y-4 lg:col-span-5">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.number}
              className="about-animate group rounded-2xl border border-neutral-800 bg-card p-6 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/90"
            >
              <div className="mb-2 flex items-center justify-between gap-4">
                <h3 className="font-heading text-base font-semibold text-white transition-colors group-hover:text-primary-blue">
                  {item.title[language]}
                </h3>

                <span className="font-mono text-xs text-neutral-500">
                  {item.number}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-muted transition-colors group-hover:text-text">
                {item.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
