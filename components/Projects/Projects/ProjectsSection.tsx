'use client';

import { ProjectsData } from '@/data/ProjectData';
import ProjectCard from './ProjectCard';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ProjectsSection() {
	const sectionRef = useRef<HTMLElement>(null);
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			const cards = gsap.utils.toArray<HTMLElement>('.project-card');

			if (cards.length < 2) return;

cards.forEach((card, index) => {
	gsap.set(card, {
		yPercent: index === 0 ? 0 : 100,
		zIndex: cards.length - index,
	});
});
			const timeline = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 100px',
					end: () => `+=${window.innerHeight * (cards.length - 1)}`,
					pin: true,
					scrub: 1,
					invalidateOnRefresh: true,
				},
			});

	cards.slice(1).forEach((card, index) => {
		timeline
			.set(card, { zIndex: cards.length + index + 1 }, index)
			.to(card, { yPercent: 0, duration: 1 }, index)
			.to(
				cards[index],
				{ scale: 0.92, opacity: 0.5, duration: 1 },
				index,
			);
	});
		}, sectionRef);

		return () => ctx.revert();
	}, []);
	return (
		<section ref={sectionRef} className="relative pb-[10vh]">
			<div className="sticky top-25 min-h-[calc(100vh-100px)] ">
				{ProjectsData.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</section>
	);
}
