'use client';
import type { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export default function Landing() {
	const language = useSelector((state: RootState) => state.language.language);
	const isEn = language === 'en';
	return (
		<section className="flex  flex-col justify-center">
			<div className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col items-start justify-center px-5 py-12 border-b border-neutral-900 gap-4">
				<div className="gsap-tag mb-3 inline-flex items-center gap-2">
					<span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
						{isEn
							? 'Portfolio / Selected Work'
							: 'Portafolio / Proyectos destacados'}
					</span>
				</div>
				<h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl md:text-6xl lg:text-7xl ">
					{isEn ? 'Turning Ideas into' : 'Transformando ideas en'}
					<br />
					<span className="text__color--blue">
						{isEn
							? 'digital experiences.'
							: 'experiencias digitales.'}
					</span>
				</h1>
				<p className="text-muted max-w-2xl text-xl sm:text-2xl ">
					{isEn
						? 'A collection of projects where I explore modern frontend development, interactive interfaces, and thoughtful user experiences.'
						: 'Una colección de proyectos en los que exploro el desarrollo frontend moderno, las interfaces interactivas y las experiencias digitales intuitivas.'}
				</p>
			</div>
		</section>
	);
}
