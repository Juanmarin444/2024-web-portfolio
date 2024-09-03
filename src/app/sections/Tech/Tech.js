import TechCard from "@/components/TechCard";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] })

export default function Tech () {
    return (
        <section className="flex flex-col justify-center pt-24">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl ${montserrat.className} py-10`}>Favorite Tech</h1>
            <div className="flex flex-row flex-wrap gap-10 justify-center">
                <TechCard name="JavaScript" src="/assets/javascriptIcon.png" />
                <TechCard name="React" src="/assets/react.svg"/>
                <TechCard name="Redux" src="/assets/reduxIcon.png" />
                <TechCard name="Node.js" src="/assets/nodejsIcon.png" />
                <TechCard name="Django" src="/assets/djangoIcon.png" />
                <div className="flex items-center">
                    <div className="dark:hidden">
                        <TechCard name="Flask" src="/assets/flask_black.svg"/>
                    </div>
                    <div className="hidden dark:block">
                        <TechCard name="Flask" src="/assets/flask_white.svg"/>
                    </div>
                </div>
                <TechCard name="SQLite" src="/assets/sqliteIcon.png"/>
                <TechCard name="MongoDB" src="/assets/mongodbIcon.png"/>
                <div>
                    <div className="dark:hidden">
                        <TechCard name="Next" src="/assets/nextjsIconBlack.svg" />
                    </div>
                    <div className="hidden dark:block">
                        <TechCard name="Next" src="/assets/nextjsIconWhite.svg" />
                    </div>
                </div>
                <TechCard name="Pug" src="/assets/pugIcon.png" />
                <TechCard name="Sass" src="/assets/sassIcon.png" />
                <TechCard name="Swift" src="/assets/swiftIcon.png" />
                <TechCard name="Git" src="/assets/gitIcon.png" />
                <TechCard name="HTML" src="/assets/htmlIcon.png" />
                <TechCard name="CSS" src="/assets/cssIcon.png" />
            </div>
      </section>
    )
}