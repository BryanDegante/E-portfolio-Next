export type NavLink = {
  id: string;
  label: {
    en: string;
    es: string;
  };
  href?: string;
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
      id: 'Skills',
      label: { en: 'Skills', es: 'Habilidades' },
      href: '#Skills',
    },
    {
      id: 'Projects',
      label: { en: 'Projects', es: 'Proyectos' },
      href: '#Projects',
    },
  ],
  services: [
    {
      id: 'Home',
      label: { en: 'Home', es: 'Inicio' },
      href: '/',
    },
    {
      id: 'Projects',
      label: { en: 'Projects', es: 'Proyectos' },
      href: '/projects',
    },
    {
      id: 'Tiers',
      label: { en: 'Tiers', es: 'Precios' },
      href: '#Tiers',
    },
    {
      id: 'Add Ons',
      label: { en: 'Add Ons', es: 'Extras' },
      href: '#AddOns',
    },
  ],
  projects: [
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
  ],
  privacy: [
    {
      id: 'Home',
      label: { en: 'Home', es: 'Inicio' },
      href: '/',
    },
    {
      id: 'Projects',
      label: { en: 'Projects', es: 'Proyectos' },
      href: '/projects',
    },
    {
      id: 'Services',
      label: { en: 'Services', es: 'Servicios' },
      href: '/services',
    },
  ],
} satisfies Record<string, NavLink[]>;
