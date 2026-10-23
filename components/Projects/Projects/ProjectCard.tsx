'use client';

import type { Project } from '@/data/ProjectData';
import type { RootState } from '@/redux/store';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import TechCard from './TechCard';

export default function ProjectCard({ project }: { project: Project }) {
	const language = useSelector((state: RootState) => state.language.language);
	return (
		<div className="mt-4 project-card absolute inset-0 mx-auto h-162.5 md:h-175 w-[calc(100%-2rem)] max-w-5xl rounded-3xl border border-white/15 bg-neutral-900/85 backdrop-blur-2xl p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-4 border-flow">
			<div className="mb-3 inline-flex items-center gap-2">
				<span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
					0{project.id} //{' '}
					{language === 'en' ? 'Project' : 'Proyecto'}
				</span>
			</div>
			<h3 className="text-text text-xl md:text-2xl">
				{project.name[language]}
			</h3>
			<div className="flex flex-col gap-6">
				<div className=" w-full md:w-auto">
					<Image
						src={project.screenshot}
						alt={`${project.name[language]} Screenshot`}
						width={400}
						height={300}
						className="h-64 w-full rounded-xl object-contain md:h-80"
					/>
				</div>
				<div className=" w-full ">
					<p className="text-muted text-sm md:text-base leading-relaxed">
						{project.description[language]}
					</p>
					<div className="flex flex-wrap justify-start items-center gap-2 mt-4">
						{project.tech.map((tech, index) => (
							<TechCard tech={tech} key={index} />
						))}
					</div>
				</div>
			</div>
			{project.website}
		</div>
	);
}
