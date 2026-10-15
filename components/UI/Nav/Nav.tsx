'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ReactCountryFlag from 'react-country-flag';

import styles from './Nav.module.css';
import ContactButton from '@/components/UI/Contact/ContactButton';
import HoverLink from '../HoverLink/HoverLink';

const navLinks = {
  services: [
    { id: 'Home', label: { en: 'Home', es: 'Inicio' }, href: '/' },
    { id: 'Tiers', label: { en: 'Tiers', es: 'Precios' }, href: '#Tiers' },
  ],
  privacy: [
    { id: 'Home', label: { en: 'Home', es: 'Inicio' }, href: '/' },
    {
      id: 'Services',
      label: { en: 'Services', es: 'Servicios' },
      href: '/services',
    },
  ],
  home: [
    {
      id: 'Services',
      label: { en: 'Services', es: 'Servicios' },
      href: '/services',
    },
    { id: 'About', label: { en: 'About', es: 'Sobre mí' }, href: '#About' },
    {
      id: 'Projects',
      label: { en: 'Projects', es: 'Proyectos' },
      href: '#Projects',
    },
  ],
};

export default function Nav() {
  const pathname = usePathname();

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
        <a href='/' aria-label='Go to homepage' className='shrink-0'>
          <Image
            src='/logo.png'
            alt='Bryan Degante'
            width={40}
            height={40}
            priority
            className='h-10 w-10 object-contain'
          />
        </a>

        <ul className='hidden items-center gap-6 md:flex'>
          {links.map((link) => (
            <li key={link.id}>
              <HoverLink
                link={link.href}
                css='text-sm font-medium text-text'
                label={link.label.en}
              />
            </li>
          ))}

          <li>
            <ContactButton label='Contact Me' />
          </li>

          <li>
            <div className='flex shrink-0 items-center gap-2 text-sm font-medium'>
              <button
                type='button'
                aria-label='Switch to English'
                className={`flex items-center gap-1.5 cursor-pointer text-muted ${styles['language__button']} hover:text-[#60a5fa]`}>
                <ReactCountryFlag
                  countryCode='US'
                  svg
                  aria-label='United States'
                />
                EN
              </button>

              <span className='text-muted'>/</span>

              <button
                type='button'
                aria-label='Switch to Spanish'
                className={`flex items-center gap-1.5 cursor-pointer text-muted ${styles['language__button']} hover:text-[#60a5fa] active:text[#60a5fa] active:border-[rgba(59, 130, 246, 0.35)] active:bg-[rgba(59, 130, 246, 0.12)]`}>
                <ReactCountryFlag countryCode='MX' svg aria-label='Mexico' />
                ES
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
