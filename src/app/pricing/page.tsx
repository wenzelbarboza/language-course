"use client";

import Contact from "@/components/Contact";
import Image from "next/image";
import React, { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

// code to check if the environment variable is set
const superq = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_SUPERQ;
const quick = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_QUICK;
const standard = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_STANDARD;
const quickSmall = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_QUICK_SMALL;
const quickFamily = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_QUICK_FAMILY;

if (!superq || !quick || !standard || !quickSmall || !quickFamily) {
  throw new Error(
    "One or more environment variables are not set. Please check your .env file."
  );
}

const Pricing = () => {
  const { t } = useLanguage();
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      {/* our courses */}
      <section
        className="w-full mb-8 py-24  px-4 our-courses bg-customOrange sm:bg-transparent"
        data-aos="fade-down"
      >
        <div className="container mx-auto">
          <div className="mb-4 md:mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent inline-block">
              {t("courses.title")}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3 text-white">
              <p className="mb-4 text-lg">{t("courses.description")}</p>
              <p className="mb-6 text-lg">{t("courses.description2")}</p>
            </div>
            <div className="md:w-1/3 flex items-center justify-center">
              <button
                onClick={scrollToContact}
                className="bg-customBlue-button hover:bg-blue-500 text-white text-xl font-medium px-10 py-4 rounded-full transition duration-300 w-full md:w-auto"
              >
                {t("header.enrollNow")}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* what you will learn section*/}
      <section className="container mx-auto py-24 " data-aos="fade-up px-4">
        <div className=" mb-12 text-center">
          <h2 className="text-4xl font-bold text-[#00AEEF] mb-4">
            {t("courses.whatYouLearn")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/skills-speaking.png"
              alt="Speaking Skills Icon"
              width={64}
              height={64}
              className="mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">
              {t("courses.speaking")}
            </h3>
            <p className="text-gray-600">{t("courses.speakingDesc")}</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/skills-writing.png"
              alt="Grammar Icon"
              width={64}
              height={64}
              className="mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">
              {t("courses.grammar")}
            </h3>
            <p className="text-gray-600">{t("courses.grammarDesc")}</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/skills-listning.png"
              alt="Native Speakers Icon"
              width={64}
              height={64}
              className="mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">
              {t("courses.listening")}
            </h3>
            <p className="text-gray-600">{t("courses.listeningDesc")}</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/skills-writing.png"
              alt="Written Communication Icon"
              width={64}
              height={64}
              className="mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold mb-2">
              {t("courses.writing")}
            </h3>
            <p className="text-gray-600">{t("courses.writingDesc")}</p>
          </div>
        </div>
      </section>
      {/* choose your learning plan section */}
      <section className=" container mx-auto py-20 px-4" data-aos="fade-up">
        <div className="  px-4 mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">{t("courses.choosePlan")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Super Q Plan */}
          <div className="border border-red-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="mb-6 text-center">
                <Image
                  src="/SuperQ.png"
                  alt="Super Q Plan"
                  width={250}
                  height={150}
                  className="mx-auto h-[150px] w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-3xl font-bold text-[#00AEEF] mb-2">
                  {t("courses.superQ")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("courses.superQDesc")}
                </p>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <Image
                    src="/Calendar.png"
                    alt="Calendar"
                    width={20}
                    height={20}
                    className="text-gray-600"
                  />
                </div>
                <span className="text-lg font-medium">
                  30 {t("courses.days")}
                </span>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <Image
                    src="/Time-machine.png"
                    alt="Calendar"
                    width={20}
                    height={20}
                    className="text-gray-600"
                  />
                </div>
                <span className="text-lg font-medium">
                  5 {t("courses.hours")}
                </span>
              </div>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-[#00AEEF]">
                  € 8000 {t("courses.person")}
                </p>
              </div>

              <a href={superq} target="_blank">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white text-lg font-medium py-3 px-4 rounded-full transition duration-300">
                  {t("courses.enrollNow")}
                </button>
              </a>
            </div>
          </div>
          {/* Quick Plan */}
          <div className="border border-blue-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="mb-6 text-center">
                <Image
                  src="/Quick.png"
                  alt="Quick Plan"
                  width={250}
                  height={150}
                  className="mx-auto h-[150px] w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-3xl font-bold text-[#00AEEF] mb-2">
                  {t("courses.quick")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("courses.quickDesc")}
                </p>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <Image
                    src="/Calendar.png"
                    alt="Calendar"
                    width={20}
                    height={20}
                    className="text-gray-600"
                  />
                </div>
                <span className="text-lg font-medium">
                  75 {t("courses.days")}
                </span>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <Image
                    src="/Time-machine.png"
                    alt="Calendar"
                    width={20}
                    height={20}
                    className="text-gray-600"
                  />
                </div>
                <span className="text-lg font-medium">
                  2 {t("courses.hours")}
                </span>
              </div>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-[#00AEEF]">
                  € 5000 {t("courses.person")}
                </p>
              </div>
              <a href={quick} target="_blank">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white text-lg font-medium py-3 px-4 rounded-full transition duration-300">
                  {t("courses.enrollNow")}
                </button>
              </a>
            </div>
          </div>
          {/* Standard Plan */}
          <div className="border border-blue-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="mb-6 text-center">
                <Image
                  src="/Standard.png"
                  alt="Standard Plan"
                  width={250}
                  height={150}
                  className="mx-auto h-[150px] w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-3xl font-bold text-[#00AEEF] mb-2">
                  {t("courses.standard")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("courses.standardDesc")}
                </p>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <Image
                    src="/Calendar.png"
                    alt="Calendar"
                    width={20}
                    height={20}
                    className="text-gray-600"
                  />
                </div>
                <span className="text-lg font-medium">
                  150 {t("courses.days")}
                </span>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <Image
                    src="/Time-machine.png"
                    alt="Calendar"
                    width={20}
                    height={20}
                    className="text-gray-600"
                  />
                </div>
                <span className="text-lg font-medium">
                  1 {t("courses.hours")}
                </span>
              </div>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-[#00AEEF]">
                  € 2500 {t("courses.person")}
                </p>
              </div>
              <a href={standard} target="_blank">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white text-lg font-medium py-3 px-4 rounded-full transition duration-300">
                  {t("courses.enrollNow")}
                </button>
              </a>
            </div>
          </div>
          {/* Quick small plan */}
          <div className="border border-blue-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="mb-6 text-center">
                <Image
                  src="/Quick.png"
                  alt="Quick Plan"
                  width={250}
                  height={150}
                  className="mx-auto h-[150px] w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-3xl font-bold text-[#00AEEF] mb-2">
                  {t("courses.quickSm")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("courses.quickSmDesc")}
                </p>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <Image
                    src="/Calendar.png"
                    alt="Calendar"
                    width={20}
                    height={20}
                    className="text-gray-600"
                  />
                </div>
                <span className="text-lg font-medium">
                  75 {t("courses.days")}
                </span>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <Image
                    src="/Time-machine.png"
                    alt="Calendar"
                    width={20}
                    height={20}
                    className="text-gray-600"
                  />
                </div>
                <span className="text-lg font-medium">
                  2 {t("courses.hours")}
                </span>
              </div>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-[#00AEEF]">
                  € 8000 {t("courses.person")}
                </p>
              </div>
              <a href={quickSmall} target="_blank">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white text-lg font-medium py-3 px-4 rounded-full transition duration-300">
                  {t("courses.enrollNow")}
                </button>
              </a>
            </div>
          </div>

          {/* Quick - family Plan */}
          <div className="border border-blue-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <div className="mb-6 text-center">
                <Image
                  src="/Quick.png"
                  alt="Quick Plan"
                  width={250}
                  height={150}
                  className="mx-auto h-[150px] w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-3xl font-bold text-[#00AEEF] mb-2">
                  {t("courses.quickFm")}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t("courses.quickFmDesc")}
                </p>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <Image
                    src="/Calendar.png"
                    alt="Calendar"
                    width={20}
                    height={20}
                    className="text-gray-600"
                  />
                </div>
                <span className="text-lg font-medium">
                  75 {t("courses.days")}
                </span>
              </div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <Image
                    src="/Time-machine.png"
                    alt="Calendar"
                    width={20}
                    height={20}
                    className="text-gray-600"
                  />
                </div>
                <span className="text-lg font-medium">
                  2 {t("courses.hours")}
                </span>
              </div>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-[#00AEEF]">
                  € 6800 {t("courses.person")}
                </p>
              </div>
              <a href={quickFamily} target="_blank">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white text-lg font-medium py-3 px-4 rounded-full transition duration-300">
                  {t("courses.enrollNow")}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
};

export default Pricing;
