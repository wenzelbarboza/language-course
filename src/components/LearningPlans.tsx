"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";
import { useLanguage } from "@/context/LanguageContext";

const LearningPlans = () => {
  const { t } = useLanguage();

  // Environment variables for payment links
  const superq = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_SUPERQ;
  const quick = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_QUICK;
  const standard = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_STANDARD;

  return (
    <section className="container mx-auto py-20 px-4" data-aos="fade-up">
      <div className="px-4 mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">{t("courses.choosePlan")}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t("courses.description")}
        </p>
      </div>

      {/* View All Plans Button */}
      <div className="text-center mb-12">
        <Link
          href="/pricing"
          className="bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600 font-semibold py-3 px-8 rounded-full transition-colors duration-300 inline-block"
        >
          {t("courses.viewAllPlans")}
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
              <p className="text-gray-600 text-sm">{t("courses.superQDesc")}</p>
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
              <p className="text-gray-600 text-sm">{t("courses.quickDesc")}</p>
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
      </div>
    </section>
  );
};

export default LearningPlans;
