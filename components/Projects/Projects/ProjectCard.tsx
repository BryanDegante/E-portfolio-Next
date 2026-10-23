'use client';

import type { Project } from '@/data/ProjectData';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import TechCard from './TechCard';

export default function ProjectCard({ project }: { project: Project }) {
  const language = useSelector((state: RootState) => state.language.language);
  return (
    <div className='absolute inset-0 mx-auto h-fit w-full max-w-5xl rounded-2xl border border-white/10 bg-neutral-900/60 p-6'>
        <h3 className='text-text text-xl md:text-2xl'>
        {project.name[language]}
        </h3>
        <p className='text-muted text-base'>
        {project.description[language]}
        </p>
        <Image src={project.screenshot} alt='Project Image' width={400} height={300} />

        {project.tech.map((tech,index)=> (
            <TechCard tech={tech} key={index}/>
        ))}
        {project.website}
    </div>
  );
}
