import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import { DocumentChartBarIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className={`bg-neutral-100 dark:bg-neutral-900 w-full`}>
      <main className="text-neutral-900 dark:text-gray-300 px-6 max-w-[1812px] mx-auto">
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
