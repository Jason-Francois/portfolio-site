import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </>
  );
}
