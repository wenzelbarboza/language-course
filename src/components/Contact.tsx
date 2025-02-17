"use client";

import Aos from "aos";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <section
      id="contact"
      className="contact-section py-20 lg:py-40 relative z-10 sm:p-0 p-2"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div
            className="lg:w-1/2 mb-10 lg:mb-0 text-white"
            data-aos="fade-right"
          >
            <h2 className="text-3xl font-medium mb-8">
              Have Questions? We're Here to Help!
            </h2>
            <p className=" mb-8 font-extralight">
              Reach out to us for course inquiries, enrollment assistance, or
              general support.Our team is ready to assist you every step of the
              way!
            </p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6  mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-semibold">For any enquiry, Call Us: </span>
              <a href="tel:010-020-0340" className=" hover:underline ml-2">
                010-020-0340
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12" data-aos="fade-left">
            <form className="bg-white lg:p-14 md:p-8 p-4 rounded-3xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-3xl border  focus:outline-none   bg-customBlue-inp border-none"
                  required
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className="w-full px-4 py-2 rounded-3xl border  focus:outline-none   bg-customBlue-inp border-none"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-3xl border  focus:outline-none   mb-4 bg-customBlue-inp border-none"
                required
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 rounded-2xl border  focus:outline-none focus:ring-4  mb-4 bg-customBlue-inp border-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-customBlue-button text-white px-6 py-3 rounded-3xl hover:bg-customOrange transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
