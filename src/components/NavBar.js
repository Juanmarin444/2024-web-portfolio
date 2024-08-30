'use client'
import { useState } from "react";
import NavButton from "./NavButton";
import { Bars3Icon, SunIcon, UserIcon } from "@heroicons/react/24/outline";

export default function NavBar ({toggleDropdown}) {
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
    return (
        <div className="flex flex-row justify-between bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-gray-300 px-0 sm:px-4 py-4">
            <div className="md:w-5/12 lg:w-6/12 cursor-default">
                <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-medium">Juan&nbsp;Marin</p>
            </div>

            {/* Navigation Buttons */}
            <section className={`hidden md:flex md:justify-between md:items-center md:w-7/12 lg:w-6/12`}>
                <NavButton text="About" dropDown={false} />
                <NavButton text="Work" dropDown={false} />
                <NavButton href="/welcome/info/about-us" text="Tech" />
                <NavButton href="/welcome/info/contact-us" text="Hit&nbsp;me&nbsp;up" />
                <div onClick={darkModeToggle} className="flex items-center gap-1 hover:text-gray-400 dark:hover:text-white cursor-pointer">
                    <SunIcon className="w-5 h-5" />
                    <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl dark:font-light">Dark</p>
                </div>
            </section>
            
            {/* Hamburger Button */}        
            <label htmlFor="nav-toggle" className="cursor-pointer md:hidden">
                <Bars3Icon className="h-8 w-8 text-gray-300 hover:text-gray-400 dark:hover:text-gray-100"/>
            </label>                
            
        </div>
    );
}