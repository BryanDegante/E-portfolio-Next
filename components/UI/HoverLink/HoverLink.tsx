import Link from 'next/link';
import styles from './HoverLink.module.css'

type HoverLinkProps = {
  link: string;
  label: string;
  css: string; 
};

export default function HoverLink({ link, label,css }: HoverLinkProps) {
  return <Link href={link} className={`${css} ${styles['link__hover--effect']}`}>{label}</Link>;
}
