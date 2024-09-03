'use client'
import { useState } from "react";
import NavButton from "./NavButton";
import { Bars3Icon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function NavBar ({scrollTo}) {
    const [darkMode, setDarkMode] = useState(false);
    const darkModeToggle = () => {
      console.log("TOGGLING DARK MODE")
      if (darkMode === true) {
        document.body.classList.remove("dark")
        return setDarkMode(false);
      }
      if (darkMode === false) {
        document.body.classList.add("dark")
        return setDarkMode(true);
      }
    }
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth"});
    };
    return (
        <div className="flex flex-row justify-between bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-gray-300 px-0 sm:px-4 py-4">
            <div className="md:w-5/12 lg:w-6/12 cursor-default">
                <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-medium">Juan&nbsp;Marin</p>
            </div>

            {/* Navigation Buttons */}
            <section className={`hidden md:flex md:justify-between md:items-center md:w-7/12 lg:w-6/12`}>
                <NavButton onClick={()=>{scrollToSection('about')}} text="About" />
                <NavButton onClick={()=>{scrollToSection('work')}} text="Work" />
                <NavButton onClick={()=>{scrollToSection('tech')}} text="Tech" />
                <NavButton onClick={()=>{scrollToSection('contact')}} text="Hit&nbsp;me&nbsp;up" />
             
            </section>
            <div className="flex flex-row-reverse justify-between">
            {/* Hamburger Button */}        
            <label htmlFor="nav-toggle" className="cursor-pointer md:hidden">
                <Bars3Icon className="h-8 w-8 text-neutral-900 dark:text-gray-300 hover:text-gray-400 dark:hover:text-neutral-50 ml-4 md:ml-0"/>
            </label>                
            <div onClick={darkModeToggle} className="flex items-center gap-1 cursor-pointer ml-4 border-b-2 border-neutral-100 hover:border-neutral-900 dark:border-neutral-900 dark:hover:text-neutral-50 dark:hover:border-neutral-50">
                <SunIcon className="hidden dark:block w-5 h-5" />
                <MoonIcon className="dark:hidden block w-5 h-5" />
                <div className="hidden md:block">
                    <p className="hidden dark:block text-base sm:text-lg md:text-xl 2xl:text-2xl dark:font-light">Light</p>
                    <p className="dark:hidden block text-base sm:text-lg md:text-xl 2xl:text-2xl dark:font-light">Dark</p>
                </div>
            </div>
            </div>
        </div>
    );
}