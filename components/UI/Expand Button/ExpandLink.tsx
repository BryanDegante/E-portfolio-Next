
import type { ReactNode } from 'react';
import styles from './ExpandLink.module.css';

type ExpandLinkProps = {
  text: string;
  link: string;
  newPage: boolean;
  icon: ReactNode;
};

export default function ExpandLink({
  text,
  link,
  icon,
  newPage,
}: ExpandLinkProps) {
  return (
    <a
      href={link}
      target={newPage ? '_blank' : undefined}
      rel={newPage ? 'noopener noreferrer' : undefined}
      className={styles.expand}
    >
      <span className={styles.sign}>
        {icon}
      </span>
      <span className={styles.text}>
        {text}
      </span>
    </a>
  );
}
