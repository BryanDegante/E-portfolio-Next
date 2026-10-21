import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the Privacy Policy for bryandegante.dev to understand how contact information and user data are collected, processed, and protected.',
  openGraph: {
    title: 'Privacy Policy | Bryan Degante',
    description:
      'Information on data collection, contact form processing, and website privacy practices.',
    url: 'https://bryandegante.dev/privacy',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}