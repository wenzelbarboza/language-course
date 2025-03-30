"use client";
import React from "react";
import Link from "next/link";
import { Card } from "./ui/card";
import { useLanguage } from "@/context/LanguageContext";

const EnrollNow = () => {
  const { t } = useLanguage();
  return (
    <section className="container mx-auto sm:my-52 my-32 px-2 sm:px-4">
      <Card className="bg-gradient-to-r from-pink-500 to-red-500 border-2  rounded-2xl overflow-hidden">
        <div className="flex flex-col items-center justify-center text-center py-12 px-4 sm:px-8 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("enrollNow.ready")}
          </h2>
          <p className="text-lg mb-8">{t("enrollNow.join")}</p>
          <Link
            href="/pricing"
            className="bg-white text-pink-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-colors duration-300"
          >
            {t("enrollNow.button")}
          </Link>
        </div>
      </Card>
    </section>
  );
};

export default EnrollNow;
