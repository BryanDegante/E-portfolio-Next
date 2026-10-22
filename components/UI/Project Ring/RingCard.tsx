'use client';

import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';

type RingCardProps = {
	imgLink: string;
	title: string;
	index: number;
	angleStep: number;
	radius: number;
	scale: number;
	opacity: number;
	zIndex: number;
	isFront: boolean;
	isHovered: boolean;
	isSelected: boolean;
	url: string;
	onCardHover: (hovered: boolean) => void;
	onCardClick: () => void;
};

export default function RingCard({
	imgLink,
	title,
	index,
	angleStep,
	radius,
	scale,
	opacity,
	zIndex,
	isFront,
	isHovered,
	isSelected,
	url,
	onCardHover,
	onCardClick,
}: RingCardProps) {
	const angle = index * angleStep;
	const isActive = isFront || isHovered || isSelected;

	return (
		<article
			onPointerEnter={() => onCardHover(true)}
			onPointerLeave={() => onCardHover(false)}
			onClick={(e) => {
				if ((e.target as HTMLElement).closest('a')) return;
				onCardClick();
			}}
			style={{
				transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px) scale(${scale})`,
				opacity,
				zIndex: isActive ? zIndex + 100 : zIndex,
			}}
			className={`
        group absolute left-1/2 top-1/2
        flex h-60 w-48 flex-col overflow-hidden
        rounded-2xl border bg-neutral-950
        transition-[border-color,box-shadow]
        duration-300
        sm:h-72 sm:w-56
        ${
			isActive
				? 'border-blue-400/60 shadow-[0_18px_50px_rgba(59,130,246,0.2)]'
				: 'border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.4)]'
		}
      `}
		>
			<figure className="relative h-32 w-full shrink-0 overflow-hidden bg-neutral-900 sm:h-44">
			<Image
  src={imgLink}
  alt={`${title} project preview`}
  fill
  sizes="(max-width: 639px) 384px, 448px"
  className="object-cover transition-transform duration-500 group-hover:scale-105"
/>

				<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-950/50 via-transparent to-transparent" />
			</figure>
			<div className="flex min-h-0 flex-1 flex-col justify-between gap-2 p-3 sm:gap-3 sm:p-4">
				<div>
					<p className="mb-1 font-mono text-[9px] uppercase tracking-[0.15em] text-blue-400/80 sm:text-[10px] sm:tracking-[0.2em]">
						Featured project
					</p>

					<h3 className="truncate font-heading text-sm font-semibold text-white sm:text-base">
						{title}
					</h3>
				</div>

				<a
					href={url}
					target="_blank"
					rel="noopener noreferrer"
					tabIndex={isActive ? 0 : -1}
					aria-label={`Visit ${title} website`}
					className={`
            inline-flex w-fit items-center gap-2 rounded-full
            border px-3 py-1.5 font-mono text-xs
            transition-all duration-200
            ${
				isActive
					? 'pointer-events-auto border-blue-400/30 bg-blue-400/10 text-blue-300 opacity-100 hover:bg-blue-400/20'
					: 'pointer-events-none border-transparent text-neutral-500 opacity-0'
			}
          `}
				>
					View project{' '}
					<span aria-hidden="true">
						<GoArrowUpRight className="text-xs" />
					</span>
				</a>
			</div>
		</article>
	);
}
