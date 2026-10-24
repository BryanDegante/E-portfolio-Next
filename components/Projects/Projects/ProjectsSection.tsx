
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

		const mm = gsap.matchMedia();

		mm.add('(max-width: 767px)', () => {
			const cards = gsap.utils.toArray<HTMLElement>(
				'.project-card',
				sectionRef.current,
			);

			cards.forEach((card) => {
				gsap.set(card, {
					opacity: 0,
					y: 35,
				});

				ScrollTrigger.create({
					trigger: card,
					start: 'top 88%',
					end: 'bottom 12%',

					onEnter: () => {
						gsap.to(card, {
							opacity: 1,
							y: 0,
							duration: 0.65,
							ease: 'power2.out',
							overwrite: true,
						});
					},

					onEnterBack: () => {
						gsap.to(card, {
							opacity: 1,
							y: 0,
							duration: 0.5,
							ease: 'power2.out',
							overwrite: true,
						});
					},

					onLeave: () => {
						gsap.to(card, {
							opacity: 0,
							y: -25,
							duration: 0.45,
							ease: 'power2.in',
							overwrite: true,
						});
					},

					onLeaveBack: () => {
						gsap.to(card, {
							opacity: 0,
							y: 35,
							duration: 0.35,
							ease: 'power2.out',
							overwrite: true,
						});
					},
				});
			});
		});

		mm.add('(min-width: 768px)', () => {
			const cards = gsap.utils.toArray<HTMLElement>(
				'.project-card',
				sectionRef.current,
			);

			if (cards.length < 2) return;

			cards.forEach((card, index) => {
				gsap.set(card, {
					yPercent: index === 0 ? 0 : 100,
					zIndex: cards.length - index,
					scale: 1,
					opacity: 1,
				});
			});

			const timeline = gsap.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 100px',
					end: () =>
						`+=${window.innerHeight * (cards.length - 1)}`,
					pin: true,
					scrub: 1,
					invalidateOnRefresh: true,
				},
			});

			cards.slice(1).forEach((card, index) => {
				timeline
					.set(
						card,
						{ zIndex: cards.length + index + 1 },
						index,
					)
					.to(card, { yPercent: 0, duration: 1 }, index)
					.to(
						cards[index],
						{
							scale: 0.92,
							opacity: 0.5,
							duration: 1,
						},
						index,
					);
			});

			return () => timeline.kill();
		});

		return () => mm.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="relative pb-[10vh]"
		>
			<div
				className="
					relative flex flex-col gap-6
					sm:gap-8
					md:sticky md:top-25
					md:block md:h-[calc(100vh-100px)]
				"
			>
				{ProjectsData.map((project) => (
					<ProjectCard
						key={project.id}
						project={project}
					/>
				))}
			</div>
		</section>
	);
}
