import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] })

export default function Contact () {
  return (
    <div className="py-10 md:py-20 lg:py-24 flex flex-col items-center">
      <h1 className={`text-4xl md:text-5xl lg:text-6xl sm:self-start ${montserrat.className} py-10`}>Hit me up</h1>

      <div className="flex flex-col sm:flex-row items-center justify-center max-w-5xl">
        <div className="w-full sm:w-1/2 p-4 text-base md:text-lg lg:text-xl">
          <h2>Hey, thanks for stopping by! Got something to share? Hit me up using this form. I’m looking forward to hearing from you.</h2>
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <form className="text-base md:text-lg lg:text-xl" name="contact v1" method="post" data-netlify="true">
            <input type="hidden" name="form-name" value="contact v1" />
            <label className="w-full" >Name
              <input className="w-full p-2 m-2" type="text" name="name" size="50" placeholder="Your name..." />
            </label>
            <label className="w-full" >Email
              <input className="w-full p-2 m-2" type="email" name="email" size="50" placeholder="Your email..." />
            </label>
            <label className="w-full" >Message
              <textarea className="w-full p-2 m-2" name="message" rows="5" cols="50" placeholder="Your message..." ></textarea>
            </label>
            {/* <div>
              <div data-netlify-recaptcha=""></div>
            </div> */}
            <input className="border-b-2 border-neutral-100 dark:border-neutral-900 hover:border-neutral-900 dark:hover:text-neutral-50 dark:hover:border-neutral-100 cursor-pointer" type="submit" value="SEND" />
          </form>
        </div>
      </div>
    </div>
  )
}