'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import styles from './Nav.module.css';
import { navLinks } from '@/data/navLinks';
import ContactButton from '@/components/UI/Contact/ContactButton';
import HoverLink from '../HoverLink/HoverLink';
import LanguageSwitcher from '../Language Switcher/LanguageSwitcher';
import NavModal from './NavModal';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import NavbarContactButton from './NavContactButton';

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const language = useSelector((state: RootState) => state.language.language);

  // Navbar entrance animation
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        nav,
        {
          y: -24,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        },
      );
    }, nav);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    if (!hamburger) return;

    const lines = hamburger.querySelectorAll('span');
    if (lines.length < 3) return;

    const ctx = gsap.context(() => {
      gsap.to(lines[0], {
        rotate: isMenuOpen ? 45 : 0,
        y: isMenuOpen ? 6 : 0,
        duration: 0.25,
        ease: 'power2.out',
      });

      gsap.to(lines[1], {
        opacity: isMenuOpen ? 0 : 1,
        duration: 0.2,
        ease: 'power2.out',
      });

      gsap.to(lines[2], {
        rotate: isMenuOpen ? -45 : 0,
        y: isMenuOpen ? -6 : 0,
        duration: 0.25,
        ease: 'power2.out',
      });
    }, hamburger);

    return () => ctx.revert();
  }, [isMenuOpen]);

  const links =
    pathname === '/services'
      ? navLinks.services
      : pathname === '/privacy'
        ? navLinks.privacy
        : navLinks.home;

  return (
    <nav
      ref={navRef}
      className="fixed left-0 top-5 z-50 w-full px-4 sm:px-6"
    >
      <div
        className={`mx-auto flex w-full max-w-275 items-center justify-between gap-4 rounded-[18px] px-5 py-3.5 sm:px-7 ${styles.content}`}
      >
        <Link href="/" aria-label="Go to homepage" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Bryan Degante"
            width={40}
            height={40}
            priority
            className="h-10 w-10 object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              {link.isModal ? (
                <NavbarContactButton />
              ) : (
                <HoverLink
                  link={link.href ?? '/'}
                  css="text-sm font-medium text-text"
                  label={link.label[language]}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex">
          <LanguageSwitcher />
        </div>

        <button
          ref={hamburgerRef}
          type="button"
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="relative z-60 flex flex-col gap-1.5 cursor-pointer md:hidden"
        >
          <span className="h-0.5 w-6 block bg-text transition-colors" />
          <span className="h-0.5 w-6 block bg-text transition-colors" />
          <span className="h-0.5 w-6 block bg-text transition-colors" />
        </button>
      </div>

      <NavModal
        navLinks={links}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </nav>
  );
}