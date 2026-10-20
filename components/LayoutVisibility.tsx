
'use client';

import { usePathname } from 'next/navigation';
import Nav from '@/components/UI/Nav/Nav';
import Footer from '@/components/UI/Footer/Footer';

type LayoutVisibilityProps = {
  children: React.ReactNode;
};

const validRoutes = [
  '/',
  '/services',
  '/projects',
  '/privacy',
  '/sitemap',
];

export default function LayoutVisibility({
  children,
}: LayoutVisibilityProps) {
  const pathname = usePathname();
  const isValidRoute = validRoutes.includes(pathname);

  return (
    <>
      {isValidRoute && <Nav />}

      {children}

      {isValidRoute && <Footer />}
    </>
  );
}
