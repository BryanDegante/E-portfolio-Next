import { techIcons } from '@/data/TechIcons';

type TechIconProps = {
	name: string;
	className?: string;
	color?: string;
};

export default function TechIcon({
	name,
	className = '',
	color,
}: TechIconProps) {
	const tech = techIcons[name as keyof typeof techIcons];

	if (!tech) return null;

	const Icon = tech.icon;
	const iconColor = color ?? tech.color;

	return <Icon className={`${className} ${iconColor}`} aria-hidden="true" />;
}
