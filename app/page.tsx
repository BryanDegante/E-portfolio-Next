import About from "@/components/Home/About/About";
import Contact from "@/components/Home/Contact/Contact";
import Landing from "@/components/Home/Landing/Landing";
import Projects from "@/components/Home/Projects/Projects";
import Services from "@/components/Home/Services/Services";
import TechStack from "@/components/Home/TechStack/TechStack";

export default function Home() {
  return <main>
    <Landing />
    <About/>
    <TechStack />
    <Projects />
    <Services />
    <Contact /> 
  </main>;
}
