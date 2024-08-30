import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] })

export default function Hero () {
    return (
        <div className={`flex flex-col xl:flex-row justify-between gap-8 pt-12 md:pt-24 lg:pt-48 ${montserrat.className}`}>
            <div className="flex flex-col text-[14em] text-neutral-900 dark:text-gray-100 leading-none font-medium -tracking-wider xl:w-5/6">
                <h1>Front-end</h1>
                <h1>Developer</h1>
            </div>
            <div className="flex flex-col justify-end text-base lg:text-[1.26em] dark:font-light text-neutral-900 dark:text-gray-300 -tracking-wider xl:w-1/6">
                <p>Creative, dedicated, adaptable</p>
                <p>developer with strong</p>
                <p>problem-solving and</p>
                <p>collaborative skills.</p>
            </div>
        </div>
    );
}