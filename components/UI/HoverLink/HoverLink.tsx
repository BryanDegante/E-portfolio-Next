import Link from 'next/link';
import styles from './HoverLink.module.css';

type HoverLinkProps = {
  link: string;
  css: string;
  label: string;
};

export default function HoverLink({
  link,
  css,
  label,
}: HoverLinkProps) {
  return (
    <Link
      href={link}
      className={`${css} ${styles['link__hover--effect']}`}
    >
      {label}
    </Link>
  );
}