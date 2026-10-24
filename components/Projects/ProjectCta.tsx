 'use client';

import { useSelector } from 'react-redux';
import type { RootState } from '@/redux/store';
import { FiGithub } from 'react-icons/fi';
import NavbarContactButton from '../UI/Nav/NavContactButton';

export default function ProjectsCTA() {
	const language = useSelector(
		(state: RootState) => state.language.language,
	);
	const isEn = language === 'en';

	return (
	<section className="relative mx-auto my-24 w-full px-4 sm:px-6">
			<div
				aria-hidden="true"
				className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 blur-[120px]"
			/>

			<div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-linear-to-r from-blue-950/30 via-neutral-900/70 to-neutral-900/40 p-6 text-center backdrop-blur-xl sm:p-12">
				{/* Heading */}
				<h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
					{isEn
						? 'Have a project in mind, or looking for a frontend developer?'
						: '¿Tienes un proyecto en mente o buscas un desarrollador frontend?'}
				</h2>

				<p className="mx-auto mt-3 max-w-2xl font-sans text-xs leading-relaxed text-neutral-400 sm:text-sm">
					{isEn
						? 'Whether you need a website for your business or are looking for a frontend developer to join your team, my inbox is always open.'
						: 'Ya sea que necesites un sitio web para tu negocio o busques un desarrollador frontend para tu equipo, mi bandeja de entrada siempre está abierta.'}
				</p>

				<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
					<NavbarContactButton />

					<a
						href="https://github.com/bryandegante"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/2 px-6 py-3.5 font-sans text-xs font-semibold uppercase tracking-wider text-neutral-300 transition-all duration-300 hover:border-white/20 hover:bg-white/6 hover:text-white"
					>
						<FiGithub className="h-4 w-4" />
						<span>{isEn ? 'View GitHub' : 'Ver GitHub'}</span>
					</a>
				</div>
			</div>
		</section>
	);
}