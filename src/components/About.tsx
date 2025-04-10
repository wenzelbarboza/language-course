"use client";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      title: t("about.learnConnect"),
      description: t("about.learnConnectDesc"),
      icon: "/globe.svg?height=50&width=50",
    },
    {
      title: t("about.funLearning"),
      description: t("about.funLearningDesc"),
      icon: "/book.svg?height=50&width=50",
    },
    {
      title: t("about.practiceWithOthers"),
      description: t("about.practiceWithOthersDesc"),
      icon: "/handshake.svg?height=50&width=50",
    },
    {
      title: t("about.startNow"),
      description: t("about.startNowDesc"),
      icon: "/rocket.svg?height=45&width=45",
    },
  ];

  return (
    // <section id="about" className="about-section relative py-20 ">
    <section id="about" className="lg:about-section relative  ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-2 sm:px-4 mt-4 sm:mt-0">
        <div className="lg:w-1/3 mb-10 lg:mb-0 z-[4]" data-aos="fade-right">
          <Image
            src="/about-img.png?height=500&width=400"
            alt="About us"
            width={400}
            height={500}
          />
        </div>
        <div className="lg:w-2/3 lg:pl-12 z-[4]">
          <div
            className="grid md:grid-cols-2 gap-8 text-white"
            data-aos="fade-up"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start p-4  bg-gradient-to-r from-[#eb5b35] to-[#ea456b] rounded-2xl lg:bg-none lg:p-0 "
              >
                <div className="flex-shrink-0 mr-4 bg-white rounded-full ">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    width={50}
                    height={50}
                    className="m-4"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
