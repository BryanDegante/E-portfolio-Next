
'use client';

import type { Project } from '@/data/ProjectData';
import type { RootState } from '@/redux/store';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import TechCard from './TechCard';

export default function ProjectCard({ project }: { project: Project }) {
	const language = useSelector(
		(state: RootState) => state.language.language,
	);

	const visitSiteText =
		language === 'en' ? 'Visit Site' : 'Visitar Sitio';

	return (
		<article
			className="
				project-card relative mx-auto flex h-auto w-[calc(100%-1rem)]
				max-w-5xl flex-col gap-4 rounded-3xl border
				border-white/15 bg-neutral-900/90 p-4 backdrop-blur-2xl
				border-flow
				sm:w-[calc(100%-2rem)] sm:gap-5 sm:p-6
				md:gap-6 md:p-8
				md:absolute md:inset-x-0 md:top-0
				md:min-h-[calc(100vh-7rem)]
			"
		>
			{/* Project label and title */}
			<div className="flex flex-col gap-2">
				<span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400 sm:text-xs">
					{String(project.id).padStart(2, '0')} //{' '}
					{language === 'en' ? 'Project' : 'Proyecto'}
				</span>

				<h3 className="text-text text-xl font-semibold sm:text-2xl md:text-3xl">
					{project.name[language]}
				</h3>
			</div>

			{/* Project screenshot with hover button */}
			<div className="flex w-full justify-center">
				<div className="group relative inline-flex max-w-full overflow-hidden rounded-xl">
					<Image
						src={project.screenshot}
						alt={`${project.name[language]} screenshot`}
						width={1200}
						height={800}
						sizes="
							(max-width: 639px) calc(100vw - 4rem),
							(max-width: 1023px) calc(100vw - 6rem),
							768px
						"
						className="
							block h-auto w-auto max-w-full
							max-h-[30vh] object-contain
							sm:max-h-[35vh]
							md:max-h-[42vh]
						"
					/>

					<a
						href={project.website}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`${visitSiteText}: ${project.name[language]}`}
						className="
							absolute inset-0 z-10
							flex items-end justify-center p-4
							bg-black/40 opacity-100
							transition-opacity duration-300
							sm:items-center
							lg:bg-black/50 lg:opacity-0
							lg:group-hover:opacity-100
							focus-visible:outline-2
							focus-visible:outline-cyan-400
						"
					>
						<span
							className="
								inline-flex items-center gap-2
								rounded-full border border-cyan-300/40
								bg-gradient-to-r from-blue-500 to-cyan-400
								px-5 py-2.5 sm:py-3
								text-sm font-semibold text-white
								shadow-lg shadow-blue-500/20
								transition-transform duration-300
								group-hover:scale-105
								hover:from-blue-600 hover:to-cyan-500
							"
						>
							{visitSiteText}
							<span aria-hidden="true">↗</span>
						</span>
					</a>
				</div>
			</div>

			{/* Project description */}
			<p className="text-muted text-sm leading-relaxed sm:text-base">
				{project.description[language]}
			</p>

			{/* Technology stack */}
			<div className="flex flex-wrap items-center gap-2">
				{project.tech.map((tech) => (
					<TechCard tech={tech} key={tech} />
				))}
			</div>
		</article>
	);
}
