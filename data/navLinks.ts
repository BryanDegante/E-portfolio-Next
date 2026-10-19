export type NavLink = {
  id: string;
  label: {
    en: string;
    es: string;
  };
  href?: string;
  isModal?: boolean;
};

export const navLinks = {
  home: [
    {
      id: 'Services',
      label: { en: 'Services', es: 'Servicios' },
      href: '/services',
    },
    {
      id: 'About',
      label: { en: 'About', es: 'Sobre mí' },
      href: '#About',
    },
    {
      id: 'Projects',
      label: { en: 'Projects', es: 'Proyectos' },
      href: '#Projects',
    },
    {
      id: 'Contact',
      label: { en: 'Contact', es: 'Contacto' },
      isModal: true,
    },
  ],
  services: [
    {
      id: 'Home',
      label: { en: 'Home', es: 'Inicio' },
      href: '/',
    },
    {
      id: 'Tiers',
      label: { en: 'Tiers', es: 'Precios' },
      href: '#Tiers',
    },
    {
      id: 'Contact',
      label: { en: 'Contact', es: 'Contacto' },
      isModal: true,
    },
  ],
  privacy: [
    {
      id: 'Home',
      label: { en: 'Home', es: 'Inicio' },
      href: '/',
    },
    {
      id: 'Services',
      label: { en: 'Services', es: 'Servicios' },
      href: '/services',
    },
    {
      id: 'Contact',
      label: { en: 'Contact', es: 'Contacto' },
      isModal: true,
    },
  ],
} satisfies Record<string, NavLink[]>;