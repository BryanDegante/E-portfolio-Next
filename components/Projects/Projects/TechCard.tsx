import TechIcon from '@/components/UI/TechIcon/TechIcon';

type TechCardProps = {
	tech: string;
};

export default function TechCard({ tech }: TechCardProps) {
	return (
		<div className="relative inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-white/10 bg-black/50 px-3 py-2 text-[12px] text-text transition-all duration-200 ease-out hover:scale-105 hover:border-primary-hover">
			<TechIcon name={tech} />
			{tech}
		</div>
	);
}
