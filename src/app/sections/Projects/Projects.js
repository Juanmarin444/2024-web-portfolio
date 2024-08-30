import Project from '@/components/Project'
import { myprojects } from '@/utils/projectsData.js'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] })

export default function Projects ()  {
  return (
    <section className="flex flex-col justify-center">
      <h1 className={`text-4xl md:text-5xl lg:text-6xl ${montserrat.className} py-10`}>Projects</h1>
      <div className="flex flex-col justify-center gap-12">
        <h1 className={`text-2xl md:text-3xl lg:text-4xl sm:ml-10 ${montserrat.className}`}>JavaScript</h1>
        <div className="flex flex-row flex-wrap gap-10 justify-center">
          <Project image={myprojects.javascriptArcadeData.image} name={myprojects.javascriptArcadeData.name} description={myprojects.javascriptArcadeData.desc} url={myprojects.javascriptArcadeData.url} github={myprojects.javascriptArcadeData.gitUrl}/>
          <Project image={myprojects.smartShopData.image} name={myprojects.smartShopData.name} description={myprojects.smartShopData.desc} url={myprojects.smartShopData.url} github={myprojects.smartShopData.gitUrl}/>
          <Project image={myprojects.worldClockData.image} name={myprojects.worldClockData.name} description={myprojects.worldClockData.desc} url={myprojects.worldClockData.url} github={myprojects.worldClockData.gitUrl}/>
          <Project image={myprojects.weatherAppData.image} name={myprojects.weatherAppData.name} description={myprojects.weatherAppData.desc} url={myprojects.weatherAppData.url} github={myprojects.weatherAppData.gitUrl}/>
        </div>
        <h1 className={`text-2xl md:text-3xl lg:text-4xl sm:ml-10 ${montserrat.className}`}>Python</h1>
        <div className="flex flex-row flex-wrap gap-10 justify-center">
          <Project image={myprojects.taskManagerData.image} name={myprojects.taskManagerData.name} description={myprojects.taskManagerData.desc} url={myprojects.taskManagerData.url} github={myprojects.taskManagerData.gitUrl}/>
          <Project image={myprojects.courseTrackerData.image} name={myprojects.courseTrackerData.name} description={myprojects.courseTrackerData.desc} url={myprojects.courseTrackerData.url} github={myprojects.courseTrackerData.gitUrl}/>
        </div>
        <h1 className={`text-2xl md:text-3xl lg:text-4xl sm:ml-10 ${montserrat.className}`}>Email Marketing</h1>
        <div className="flex flex-row flex-wrap gap-10 justify-center">
          <Project image={myprojects.windowsEmailData.image} name={myprojects.windowsEmailData.name} description={myprojects.windowsEmailData.desc} url={myprojects.windowsEmailData.url} github={myprojects.windowsEmailData.gitUrl}/>
          <Project image={myprojects.brilliantEmailData.image} name={myprojects.brilliantEmailData.name} description={myprojects.brilliantEmailData.desc} url={myprojects.brilliantEmailData.url} github={myprojects.brilliantEmailData.gitUrl}/>
          <Project image={myprojects.grammarlyEmailData.image} name={myprojects.grammarlyEmailData.name} description={myprojects.grammarlyEmailData.desc} url={myprojects.grammarlyEmailData.url} github={myprojects.grammarlyEmailData.gitUrl}/>
          <Project image={myprojects.harleyDavidsonEmailData.image} name={myprojects.harleyDavidsonEmailData.name} description={myprojects.harleyDavidsonEmailData.desc} url={myprojects.harleyDavidsonEmailData.url} github={myprojects.harleyDavidsonEmailData.gitUrl}/>
        </div>
      </div>
    </section>
  )
}