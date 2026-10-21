import AddOns from "@/components/Services/Add Ons/AddOns";
import Faq from "@/components/Services/FAQ/Faq";
import Landing from "@/components/Services/Landing/Landing";
import Tiers from "@/components/Services/Tiers/Tiers";

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Services',
  description:
    'Custom frontend web development, modern Next.js architecture, interactive UI/UX design systems, and digital solutions for growing businesses.',
  openGraph: {
    title: 'Services | Bryan Degante',
    description:
      'Custom frontend web development, modern Next.js architecture, interactive UI/UX design systems, and digital solutions.',
    url: 'https://bryandegante.dev/services',
  },
};

export default function Services() {
  return <main>
    <Landing />
    <Tiers />
    <AddOns />
    <Faq />
  </main>
}