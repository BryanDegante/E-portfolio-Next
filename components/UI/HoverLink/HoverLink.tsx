
import Link from 'next/link';
import styles from './HoverLink.module.css';

type HoverLinkProps = {
	link: string;
	css: string;
	label: string;
	onClose?: () => void;
	onNavigate?: () => void;
};

export default function HoverLink({
	link,
	css,
	label,
	onClose,
	onNavigate,
}: HoverLinkProps) {
	return (
		<Link
			onClick={() => {
				onNavigate?.();
				onClose?.();
			}}
			href={link}
			className={`${css} ${styles['link__hover--effect']}`}
			scroll={true}
		>
			{label}
		</Link>
	);
}
