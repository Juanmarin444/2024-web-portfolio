import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import MobileNav from "@/components/MobileNav";
import Tech from "./sections/Tech/Tech";

export default function Home() {
  return (
    <div className={`bg-neutral-100 dark:bg-neutral-900 w-full`}>
      <main className="text-neutral-900 dark:text-gray-300 px-6 max-w-[1812px] mx-auto">
        {/* <NavBar /> */}
        <div id="nav">
          <NavBar />
          <div className="md:hidden">
            <input type="checkbox" id="nav-toggle" className="hidden peer/nav-toggle" />
            <MobileNav/>
          </div>
        </div>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="work">
          <Projects />
        </section>
        <section id="tech">
          <Tech />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}
