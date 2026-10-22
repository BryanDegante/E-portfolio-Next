'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';

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
      en: 'Building for the Web',
      es: 'Desarrollo Web',
    },
    description: {
      en: 'Turning ideas into responsive, functional web applications using modern frontend tools and reusable components.',
      es: 'Transformando ideas en aplicaciones web funcionales y adaptables mediante herramientas modernas y componentes reutilizables.',
    },
  },
  {
    number: '02',
    title: {
      en: 'Learning by Building',
      es: 'Aprender Creando',
    },
    description: {
      en: 'Growing as a self taught developer through hands on projects, problem solving, and continuous learning.',
      es: 'Creciendo como desarrollador autodidacta mediante proyectos prácticos, resolución de problemas y aprendizaje continuo.',
    },
  },
  {
    number: '03',
    title: {
      en: 'Design & Interaction',
      es: 'Diseño e Interacción',
    },
    description: {
      en: 'Exploring thoughtful UI design, smooth animations, and interactive details that make web experiences feel polished.',
      es: 'Explorando el diseño de interfaces, las animaciones fluidas y los detalles interactivos que hacen más atractivas las experiencias web.',
    },
  },
];

const CONTENT = {
  en: {
    label: '01 // ABOUT',
    heading: 'Building thoughtful, responsive web experiences.',
    paragraphOneStart:
      "I'm a self-taught frontend developer who enjoys turning ideas into ",
    paragraphOneHighlight: 'interactive, user friendly experiences',
    paragraphOneEnd:
      '. My journey into web development has been driven by curiosity, hands-on practice, and a desire to understand how things work behind the scenes.',
    paragraphTwoStart:
      'Through personal projects and continuous learning, I’ve been developing my skills in ',
    paragraphTwoHighlight: 'React, Next.js, and TypeScript',
    paragraphTwoEnd:
      '. I enjoy bringing designs to life, exploring application functionality, and experimenting with animations to create experiences that look good and work well.',
    paragraphThreeStart:
      "I'm looking for ",
    paragraphThreeHighlight: 'frontend developer opportunities',
    paragraphThreeEnd:
      ' where I can contribute to meaningful projects, learn from other developers, and continue growing my skills. I’m also open to select freelance projects where I can help businesses build their online presence.',
  },
  es: {
    label: '01 // SOBRE MÍ',
    heading: 'Creando experiencias web intuitivas y adaptables.',
    paragraphOneStart:
      'Soy desarrollador frontend autodidacta y disfruto transformar ideas en ',
    paragraphOneHighlight: 'experiencias interactivas y fáciles de usar',
    paragraphOneEnd:
      '. Mi camino en el desarrollo web ha estado impulsado por la curiosidad, la práctica y el deseo de entender cómo funcionan las cosas detrás de cada interfaz.',
    paragraphTwoStart:
      'A través de proyectos personales y aprendizaje continuo, he ido desarrollando mis habilidades en ',
    paragraphTwoHighlight: 'React, Next.js y TypeScript',
    paragraphTwoEnd:
      '. Disfruto dar vida a los diseños, explorar la funcionalidad de las aplicaciones y experimentar con animaciones para crear experiencias atractivas y funcionales.',
    paragraphThreeStart:
      'Busco ',
    paragraphThreeHighlight: 'oportunidades como desarrollador frontend',
    paragraphThreeEnd:
      ' donde pueda contribuir a proyectos significativos, aprender de otros desarrolladores y seguir desarrollando mis habilidades. También estoy abierto a proyectos freelance seleccionados para ayudar a negocios a fortalecer su presencia en línea.',
  },
};

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  const language = useSelector(
    (state: RootState) => state.language.language
  );

  const content = CONTENT[language];

  useGSAP(
    () => {
      const container = containerRef.current;

      if (!container) return;

      const label = container.querySelector('.about-label');
      const heading = container.querySelector('.about-heading');
      const paragraphs = container.querySelectorAll('.about-paragraph');
      const cards = container.querySelectorAll('.about-card');

      if (label) {
        gsap.fromTo(
          label,
          {
            opacity: 0,
            x: -20,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (heading) {
        gsap.fromTo(
          heading,
          {
            opacity: 0,
            y: 25,
            filter: 'blur(8px)',
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1,
            delay: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (paragraphs.length > 0) {
        gsap.fromTo(
          paragraphs,
          {
            opacity: 0,
            y: 22,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.16,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: paragraphs[0],
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            x: 30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.18,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cards[0],
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="About"
      className="relative mx-auto max-w-5xl border-t border-neutral-900 px-6 py-28"
    >
      <div className="about-label mb-3 inline-flex items-center gap-2">
        <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
          {content.label}
        </span>
      </div>

      <h2 className="about-heading mb-12 max-w-3xl font-heading text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
        {content.heading}
      </h2>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        <div className="space-y-6 font-body text-base leading-relaxed text-neutral-300 sm:text-lg lg:col-span-7">
          <p className="about-paragraph">
            {content.paragraphOneStart}
            <span className="text__color--blue font-semibold">
              {content.paragraphOneHighlight}
            </span>
            {content.paragraphOneEnd}
          </p>

          <p className="about-paragraph">
            {content.paragraphTwoStart}
            <span className="text__color--blue font-semibold">
              {content.paragraphTwoHighlight}
            </span>
            {content.paragraphTwoEnd}
          </p>

          <p className="about-paragraph text-neutral-400">
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
              className="about-card group rounded-2xl border border-neutral-800 bg-card p-6 transition-colors duration-300 hover:border-neutral-700 hover:bg-neutral-900/90"
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