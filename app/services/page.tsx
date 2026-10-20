import AddOns from "@/components/Services/Add Ons/AddOns";
import Faq from "@/components/Services/FAQ/Faq";
import Landing from "@/components/Services/Landing/Landing";
import Tiers from "@/components/Services/Tiers/Tiers";

export default function Services() {
  return <main>
    <Landing />
    <Tiers />
    <AddOns />
    <Faq />
  </main>
}