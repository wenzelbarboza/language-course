"use client";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

export default function Banner() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <section
      id="top"
      className="  bg-banner bg-cover bg-center bg-no-repeat z-[-50] relative "
    >
      <div className="w-full h-screen items-end  bg-white bg-opacity-80 py-20 z-[-49] relative px-2 sm:px-0">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            {/* <div className="lg:w-[28rem]" data-aos="fade-right"> */}
            <div className="md:w-[28rem] lg:w-[38rem]" data-aos="fade-right">
              <h1 className="text-5xl lg:text-7xl font-semibold mb-4 ">
                Take Your <span className="text-red-600 ">Portuguese</span> to
                the next level with
                <span className="bg-text-gradient bg-clip-text text-transparent">
                  {" "}
                  Portuges A2
                </span>
              </h1>
              <p className="text-l mb-6 opacity-80">
                Experience expert-designed courses that combine practical
                learning, cultural immersion, and real-world conversation skill
                for your success
              </p>
            </div>
            {/* <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your website URL..."
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                Analyze Site
              </button>
            </form> */}
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <Image
              src="/banner-right-image.png?height=400&width=600"
              alt="Team meeting"
              width={600}
              height={400}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
