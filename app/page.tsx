import Image from "next/image";
import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experiences from "@/components/Experiences";
import Leadership from "@/components/Leadership";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="max-w-screen">
      <div>
      <FloatingNav navItems={navItems} />
        <Hero/>
        <About/>
        <Experiences/>
        <Projects/>
        <Leadership/>
        <Skills/>
        <Footer/>
      </div>
    </main>
  );
}
