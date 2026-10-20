import Link from 'next/link';
import styles from './HoverLink.module.css';

type HoverLinkProps = {
  link: string;
  css: string;
  label: string;
  onClose?: () => void;
};

export default function HoverLink({
  link,
  css,
  label,
  onClose
}: HoverLinkProps) {
  return (
    <Link
   onClick={() => onClose?.()}
      href={link}
      className={`${css} ${styles['link__hover--effect']}`}
      scroll={true  }
    >
      {label}
    </Link>
  );
}