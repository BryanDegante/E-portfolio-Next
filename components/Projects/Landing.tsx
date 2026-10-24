'use client';

import type { RootState } from '@/redux/store';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

export default function Landing() {
	const language = useSelector((state: RootState) => state.language.language);
	const isEn = language === 'en';
	const container = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				defaults: {
					ease: 'power3.out',
				},
			});

			tl.from('.gsap-tag', {
				y: 20,
				opacity: 0,
				duration: 0.7,
			})
				.from(
					'.projects-title',
					{
						y: 45,
						opacity: 0,
						duration: 0.9,
					},
					'-=0.35',
				)
				.from(
					'.projects-description',
					{
						y: 25,
						opacity: 0,
						duration: 0.7,
					},
					'-=0.45',
				);
		},
		{ scope: container },
	);

	return (
		<section ref={container} className="flex flex-col justify-center">
			<div className="mx-auto flex min-h-[80dvh] w-full max-w-5xl flex-col items-start justify-center gap-4 border-b border-neutral-900 px-5 py-12">
				<div className="gsap-tag mb-3 inline-flex items-center gap-2">
					<span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
						{isEn
							? 'Portfolio / Selected Work'
							: 'Portafolio / Proyectos destacados'}
					</span>
				</div>

				<h1 className="projects-title font-heading text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl md:text-6xl lg:text-7xl">
					{isEn ? 'Turning Ideas into' : 'Transformando ideas en'}
					<br />
					<span className="text__color--blue">
						{isEn
							? 'digital experiences.'
							: 'experiencias digitales.'}
					</span>
				</h1>

				<p className="projects-description max-w-2xl text-xl text-muted sm:text-2xl">
					{isEn
						? 'A collection of projects where I explore modern frontend development, interactive interfaces, and thoughtful user experiences.'
						: 'Una colección de proyectos en los que exploro el desarrollo frontend moderno, las interfaces interactivas y las experiencias digitales intuitivas.'}
				</p>
			</div>
		</section>
	);
}