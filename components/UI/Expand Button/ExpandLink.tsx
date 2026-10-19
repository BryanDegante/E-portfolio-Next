
import type { ReactNode } from 'react';
import styles from './ExpandLink.module.css';

type ExpandLinkProps = {
  text: string;
  link: string;
  icon: ReactNode;
};

export default function ExpandLink({
  text,
  link,
  icon,
}: ExpandLinkProps) {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
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
