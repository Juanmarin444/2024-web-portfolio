'use client'
import NavButton from "./NavButton";

export default function MobileNav () {
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth"});
    };
    return (
        <div className="hidden peer-checked/nav-toggle:flex flex-col justify-around h-40 bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-gray-300 z-10 absolute w-full min-w-72 md:hidden">
            <NavButton onClick={() => scrollToSection('about')} text="About" className="pl-8" />
            <NavButton onClick={() => scrollToSection('work')} text="Work" className="pl-8" />
            <NavButton onClick={() => scrollToSection('tech')} text="Tech" className="pl-8" />
            <NavButton onClick={() => scrollToSection('contact')} text="Hit&nbsp;me&nbsp;up" className="pl-8" />
        </div>
    );
}