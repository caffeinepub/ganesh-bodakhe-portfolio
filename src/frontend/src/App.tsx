import { Toaster } from "@/components/ui/sonner";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Toaster position="top-right" richColors />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
