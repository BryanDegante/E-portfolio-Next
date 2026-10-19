import About from "@/components/Home/About/About";
import Contact from "@/components/Home/Contact/Contact";
import Landing from "@/components/Home/Landing/Landing";
import Projects from "@/components/Home/Projects/Projects";
import Services from "@/components/Home/Services/Services";

export default function Home() {
  return <main>
    <Landing />
    <About/>
    <Projects />
    <Services />
    <Contact /> 
  </main>;
}
