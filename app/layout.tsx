import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/UI/Nav/Nav';
import ReduxProvider from '@/redux/Provider';
import Particles from '@/components/Particles/Particles';
import ContactModal from '@/components/UI/Contact/ContactModal';
import Footer from '@/components/UI/Footer/Footer';
import LoadingScreen from '@/components/UI/LoadingScreen/LoadingScreen';
import ScrollToTop from '@/components/UI/Scroll/ScrollToTop';
import LayoutVisibility from '@/components/LayoutVisibility';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bryandegante.dev'),
  title: {
    default: 'Bryan Degante | Frontend Web Developer',
    template: '%s | Bryan Degante',
  },
  description:
    'Frontend developer specializing in Next.js, modern UI/UX design systems, GSAP animations, and interactive web experiences.',
  keywords: [
    'Bryan Degante',
    'Frontend Developer',
    'Web Designer',
    'Next.js Developer',
    'React Developer',
    'Tailwind CSS',
    'GSAP Animations',
    'Houston Web Developer',
    'Freelance Frontend Developer',
  ],
  authors: [{ name: 'Bryan Degante', url: 'https://bryandegante.dev' }],
  creator: 'Bryan Degante',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bryandegante.dev',
    title: 'Bryan Degante | Frontend Web Developer',
    description:
      'Frontend developer specializing in Next.js, modern UI/UX design systems, and interactive web experiences.',
    siteName: 'Bryan Degante',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bryan Degante — Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bryan Degante | Frontend Web Developer',
    description:
      'Frontend developer specializing in Next.js, modern UI/UX design systems, and interactive web experiences.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
    data-scroll-behavior="smooth"
      lang='en'
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} h-full antialiased`}>
      <body className='bg-section min-h-full flex flex-col'>
        <ReduxProvider>
          <LoadingScreen />
          <ContactModal />
          <Particles particleCount={700} color={'#E5E7EB'} />
          <ScrollToTop />
          <LayoutVisibility>{children}</LayoutVisibility>
        </ReduxProvider>
      </body>
    </html>
  );
}