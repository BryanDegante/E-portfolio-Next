'use client';

import HoverLink from '../HoverLink/HoverLink';
import ContactButton from '@/components/UI/Contact/ContactButton';
import type { NavLink } from '@/data/navLinks';
import LanguageSwitcher from '../Language Switcher/LanguageSwitcher';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

type NavModalProps = {
  navLinks: NavLink[];
  isOpen: boolean;
  onClose: () => void;
};

export default function NavModal({
  navLinks,
  isOpen,
  onClose,
}: NavModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLLIElement | null)[]>([]);
  const language = useSelector((state: RootState) => state.language.language);

  useEffect(() => {
    const modal = modalRef.current;

    if (!modal || !isOpen) return;

    const links = linksRef.current.filter(
      (link): link is HTMLLIElement => link !== null
    );

    const context = gsap.context(() => {
      gsap.fromTo(
        modal,
        { x: '100%', opacity: 0 },
        {
          x: '0%',
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        links,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.07,
          delay: 0.15,
          duration: 0.35,
          ease: 'power3.out',
        }
      );
    }, modal);

    return () => context.revert();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex justify-end bg-[rgba(0,0,0,0.43)] backdrop-blur-lg">
      <div
        ref={modalRef}
        className="flex h-full w-[85%] max-w-95 flex-col justify-between border-l border-l-[rgba(255,255,255,0.08)] bg-section p-8 backdrop-blur-[20px]"
      >
        <div className="mb-10 flex items-center justify-between">
          <p className="text-xs uppercase tracking-[2px] text-text">
            Menu
          </p>

          <button
            type="button"
            aria-label="Close navigation menu"
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <ul className="flex list-none flex-col gap-5">
          {navLinks.map((link, i) => (
            <li
              key={link.id}
              ref={(el) => {
                linksRef.current[i] = el;
              }}
              className="navModal-item"
            >
              {link.isModal ? (
                <ContactButton label={link.label[language]} />
              ) : (
                <HoverLink
                  link={link.href ?? '/'}
            onClose={onClose}

                  label={link.label[language]}
                  css="text-left text-xl font-medium text-text"
                />
              )}
            </li>
          ))}
        </ul>

        <LanguageSwitcher onClick={onClose}/>

        <div className="text-sm text-muted">
          <p>© {new Date().getFullYear()} Portfolio</p>
        </div>
      </div>
    </div>
  );
}