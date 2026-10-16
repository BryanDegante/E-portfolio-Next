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

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const language = useSelector((state: RootState) => state.language.language);

  useEffect(() => {
    const hamburger = hamburgerRef.current;
    if (!hamburger) return;

    const lines = hamburger.querySelectorAll('span');

    gsap.to(lines[0], {
      rotate: isMenuOpen ? 45 : 0,
      y: isMenuOpen ? 6 : 0,
      duration: 0.25,
    });

    gsap.to(lines[1], {
      opacity: isMenuOpen ? 0 : 1,
      duration: 0.2,
    });

    gsap.to(lines[2], {
      rotate: isMenuOpen ? -45 : 0,
      y: isMenuOpen ? -6 : 0,
      duration: 0.25,
    });
  }, [isMenuOpen]);

  const links =
    pathname === '/services'
      ? navLinks.services
      : pathname === '/privacy'
        ? navLinks.privacy
        : navLinks.home;

  return (
    <nav className='fixed left-0 top-5 z-50 w-full px-4 sm:px-6'>
      <div
        className={`mx-auto flex w-full max-w-275 items-center justify-between gap-4 rounded-[18px] px-5 py-3.5 sm:px-7 ${styles.content}`}>
        <Link href='/' aria-label='Go to homepage' className='shrink-0'>
          <Image
            src='/logo.png'
            alt='Bryan Degante'
            width={40}
            height={40}
            priority
            className='h-10 w-10 object-contain'
          />
        </Link>

        <ul className='hidden items-center gap-6 md:flex'>
          {links.map((link) => (
            <li key={link.id}>
              {link.isModal ? (
                <ContactButton label={link.label[language]} />
              ) : (
                <HoverLink
                  link={link.href ?? '/'}
                  css='text-sm font-medium text-text'
                  label={link.label[language]}
                />
              )}
            </li>
          ))}
        </ul>

        <div className='hidden md:flex'>
          <LanguageSwitcher />
        </div>

        <button
          ref={hamburgerRef}
          type='button'
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className='flex flex-col gap-1.5 cursor-pointer z-60 md:hidden'>
          <span className='w-7 h-0.5 bg-text block transition duration-300 ease-in' />
          <span className='w-7 h-0.5 bg-text block transition duration-300 ease-in' />
          <span className='w-7 h-0.5 bg-text block transition duration-300 ease-in' />
        </button>

        <NavModal
          navLinks={links}
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>
    </nav>
  );
}
