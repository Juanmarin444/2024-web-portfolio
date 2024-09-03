'use client'
import { useState } from 'react';

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] })

export default function Contact () {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      setStatus('pending');
      setError(null);
      const myForm = event.target;
      const formData = new FormData(myForm);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      if (res.status === 200) {
        setStatus('ok');
      } else {
        setStatus('error');
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus('error');
      setError(`${e}`);
    }
  };

  return (
    <div className="py-10 md:py-20 lg:py-24 flex flex-col items-center">
      <h1 className={`text-4xl md:text-5xl lg:text-6xl sm:self-start ${montserrat.className} py-10`}>Hit me up</h1>

      <div className="flex flex-col sm:flex-row items-center justify-center max-w-5xl">
        <div className="w-full sm:w-1/2 p-4 text-base md:text-lg lg:text-xl">
          <h2>Hey, thanks for stopping by! Got something to share? Hit me up using this form. I’m looking forward to hearing from you.</h2>
        </div>
        <div className="w-full sm:w-1/2 p-4">
          <form className="text-base md:text-lg lg:text-xl text-neutral-900 dark:text-neutral-100" name="contact v1" onSubmit={handleFormSubmit}>
            <input type="hidden" name="form-name" value="contact v1" />
            <label className="w-full" >Name
              <input className="w-full p-2 m-2 dark:bg-neutral-700" type="text" name="name" size="50" placeholder="Your name..." />
            </label>
            <label className="w-full" >Email
              <input className="w-full p-2 m-2 dark:bg-neutral-700" type="email" name="email" size="50" placeholder="Your email..." />
            </label>
            <label className="w-full" >Message
              <textarea className="w-full p-2 m-2 dark:bg-neutral-700" name="message" rows="5" cols="50" placeholder="Your message..." ></textarea>
            </label>
            {/* <div>
              <div data-netlify-recaptcha=""></div>
            </div> */}
            <input className="border-b-2 border-neutral-100 dark:border-neutral-900 hover:border-neutral-900 dark:hover:text-neutral-50 dark:hover:border-neutral-100 cursor-pointer" type="submit" value="SEND" />
            {status === 'ok' && (
              <div className="alert alert-success flex gap-1">
                <SuccessIcon />
                Submitted!
              </div>
            )}
            {status === 'error' && (
              <div className="alert alert-error flex gap-1">
                <ErrorIcon />
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

function SuccessIcon() {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
      >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
      </svg>
  );
}
function ErrorIcon(success) {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
      >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
      </svg>
  );
}