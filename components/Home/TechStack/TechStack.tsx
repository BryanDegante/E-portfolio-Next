
'use client';

import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiGit,
  SiVercel,
  SiJavascript,
  SiVite,
  SiRedis,
  SiPostgresql,
  SiNodedotjs,
  SiGsap,
  SiGithub,
  SiFirebase,
  SiStripe,
  SiHtml5,
  SiCss,
  SiThreedotjs,
} from 'react-icons/si';
import { FiCode, FiDatabase, FiLayers, FiTool } from 'react-icons/fi';

export default function AboutTechStack() {
  const language = useSelector(
    (state: RootState) => state.language.language
  );
  const isEn = language === 'en';

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const header = section.querySelector('.tech-header');
      const cards = section.querySelectorAll('.tech-card');
      const banner = section.querySelector('.tech-learning');

      gsap.set([header, cards, banner], {
        autoAlpha: 0,
        y: 24,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          once: true,
        },
      });

      timeline
        .to(header, {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        })
        .to(
          cards,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.12,
            ease: 'power2.out',
          },
          '-=0.2'
        )
        .to(
          banner,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.15'
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const stackCategories = [
    {
      titleEn: 'Frontend',
      titleEs: 'Frontend',
      icon: <FiCode className="h-4 w-4 text-blue-400" />,
      skills: [
        {
          name: 'HTML5',
          icon: <SiHtml5 className="h-4 w-4 text-orange-500" />,
        },
        {
          name: 'CSS',
          icon: <SiCss className="h-4 w-4 text-blue-400" />,
        },
        {
          name: 'JavaScript',
          icon: <SiJavascript className="h-4 w-4 text-yellow-400" />,
        },
        {
          name: 'TypeScript',
          icon: <SiTypescript className="h-4 w-4 text-blue-400" />,
        },
        {
          name: 'React',
          icon: <SiReact className="h-4 w-4 text-sky-400" />,
        },
        {
          name: 'Next.js',
          icon: <SiNextdotjs className="h-4 w-4 text-white" />,
        },
      ],
    },
    {
      titleEn: 'Styling & Animation',
      titleEs: 'Estilos y Animación',
      icon: <FiLayers className="h-4 w-4 text-cyan-400" />,
      skills: [
        {
          name: 'Tailwind CSS',
          icon: <SiTailwindcss className="h-4 w-4 text-teal-400" />,
        },
        {
          name: 'GSAP',
          icon: <SiGsap className="h-4 w-4 text-green-400" />,
        },
        {
          name: 'Three.js',
          icon: <SiThreedotjs className="h-4 w-4 text-white" />,
        },
        {
          name: 'CSS 3D Transforms',
          icon: (
            <span className="font-mono text-[10px] font-bold text-blue-300">
              3D
            </span>
          ),
        },
      ],
    },
    {
      titleEn: 'State & Integrations',
      titleEs: 'Estado e Integraciones',
      icon: <FiDatabase className="h-4 w-4 text-purple-400" />,
      skills: [
        {
          name: 'Redux Toolkit',
          icon: <SiRedux className="h-4 w-4 text-purple-400" />,
        },
        {
          name: 'REST APIs',
          icon: (
            <span className="font-mono text-[10px] font-bold text-blue-300">
              API
            </span>
          ),
        },
        {
          name: 'Firebase',
          icon: <SiFirebase className="h-4 w-4 text-yellow-400" />,
        },
        {
          name: 'Stripe',
          icon: <SiStripe className="h-4 w-4 text-indigo-400" />,
        },
      ],
    },
    {
      titleEn: 'Tools & Deployment',
      titleEs: 'Herramientas y Despliegue',
      icon: <FiTool className="h-4 w-4 text-emerald-400" />,
      skills: [
        {
          name: 'Git',
          icon: <SiGit className="h-4 w-4 text-orange-500" />,
        },
        {
          name: 'GitHub',
          icon: <SiGithub className="h-4 w-4 text-white" />,
        },
        {
          name: 'Vite',
          icon: <SiVite className="h-4 w-4 text-purple-400" />,
        },
        {
          name: 'Vercel',
          icon: <SiVercel className="h-4 w-4 text-white" />,
        },
      ],
    },
  ];

  const activeLearning = [
    {
      name: 'Node.js',
      icon: <SiNodedotjs className="h-4 w-4 text-emerald-400" />,
    },
    {
      name: 'Redis',
      icon: <SiRedis className="h-4 w-4 text-red-500" />,
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql className="h-4 w-4 text-blue-400" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id='Skills'
      className="mx-auto mt-16 w-full max-w-7xl px-6 py-28"
    >
      <div className="tech-header mb-8 border-b border-white/10 pb-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
         02 {isEn ? '// MY TOOLKIT' : '// MI KIT DE HERRAMIENTAS'}
        </span>

        <h3 className="mt-1 font-heading text-xl font-bold text-white sm:text-2xl">
          {isEn
            ? 'Technologies I Work With'
            : 'Tecnologías con las que Trabajo'}
        </h3>

        <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-neutral-400">
          {isEn
            ? 'My frontend toolkit for building modern, responsive, and interactive web experiences.'
            : 'Mis herramientas frontend para crear experiencias web modernas, adaptables e interactivas.'}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stackCategories.map((category) => (
          <div
            key={category.titleEn}
            className="tech-card group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-5 backdrop-blur-xl transition-colors duration-300 hover:border-blue-400/30 hover:bg-neutral-900/80"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/5 blur-2xl transition-colors duration-500 group-hover:bg-blue-500/10" />

            <div className="relative">
              <div className="mb-5 flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/4">
                  {category.icon}
                </div>

                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-300">
                  {isEn ? category.titleEn : category.titleEs}
                </h4>
              </div>

              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-3 rounded-xl border border-white/6 bg-white/2 px-3 py-2.5 transition-colors duration-200 hover:border-white/15 hover:bg-white/5"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-black/40">
                      {skill.icon}
                    </div>

                    <span className="font-sans text-xs font-medium text-neutral-200">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="tech-learning mt-5 rounded-2xl border border-blue-500/20 bg-linear-to-r from-blue-950/30 via-neutral-900/60 to-neutral-900/40 p-5 backdrop-blur-xl sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-blue-500" />
              </span>

              <span className="font-mono text-xs uppercase tracking-wider text-blue-400">
                {isEn ? 'CURRENTLY EXPLORING' : 'EXPLORANDO ACTUALMENTE'}
              </span>
            </div>

            <h4 className="mt-2 font-heading text-base font-bold text-white sm:text-lg">
              {isEn
                ? 'Growing Toward Full-Stack Development'
                : 'Avanzando hacia el Desarrollo Full-Stack'}
            </h4>

            <p className="mt-1 font-sans text-xs leading-relaxed text-neutral-400">
              {isEn
                ? 'Expanding my knowledge of backend development, server-side architecture, and databases.'
                : 'Ampliando mis conocimientos de desarrollo backend, arquitectura del servidor y bases de datos.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {activeLearning.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2.5 rounded-xl border border-blue-400/20 bg-blue-500/10 px-3.5 py-2 font-mono text-xs text-blue-300"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-black/30">
                  {item.icon}
                </div>

                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
