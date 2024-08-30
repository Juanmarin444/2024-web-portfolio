import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] })

export default function About() {
  return (
    <div className="text-base sm:text-lg md:text-[2.2em] md:leading-8 lg:leading-10 py-10 md:py-20 lg:py-24 font-normal  md:w-5/6 lg:w-4/5 xl:w-3/4 2xl:w-2/3">
      <p className="text-neutral-900 dark:text-gray-300">Passionate web developer with expertise in full-stack frameworks. Skilled in creating dynamic, user-friendly applications. Dedicated to solving problems and delivering high-quality solutions that add value.</p>
      <Link href="https://juanmarin.netlify.app/" className={`mt-10 md:mt-30 lg:mt-20 text-neutral-100 bg-neutral-900 dark:text-neutral-900 dark:bg-neutral-100 font-medium rounded-full py-2 px-4 2xl:py-4 2xl:px-16 2xl:mt-16 flex items-center w-fit ${montserrat.className} hover:bg-gray-400 dark:hover:text-gray-300`}>
        Hit me up&nbsp;<ArrowUpRightIcon className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10" />
      </Link>
    </div>
  )
}
