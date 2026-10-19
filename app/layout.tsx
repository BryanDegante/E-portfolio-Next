import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@/components/UI/Nav/Nav';
import ReduxProvider from '@/redux/Provider';
import Particles from '@/components/Particles/Particles';
import ContactModal from '@/components/UI/Contact/ContactModal';
import Footer from '@/components/UI/Footer/Footer';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bryan Degante | Frontend Developer',
  description:
    'Frontend developer specializing in React, Next.js, and modern web experiences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} h-full antialiased`}>
      <body className='bg-section min-h-full flex flex-col'>
        <ReduxProvider>
          <ContactModal />
          <Particles particleCount={700} color={'#E5E7EB'} />
          <Nav />
          {children}\
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
