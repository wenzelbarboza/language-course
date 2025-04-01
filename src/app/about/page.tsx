"use client";
import Contact from "@/components/Contact";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function About() {
  const { t } = useLanguage();
  return (
    <main className=" mx-auto">
      <div className="container mx-auto w-full h-full flex md:flex-row flex-col-reverse px-2 gap-4 md:gap-2  my-10 mb-32">
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl font-bold mb-4 md:mb-8 bg-text-gradient bg-clip-text text-transparent">
            {t("aboutUs.title")}
          </h1>
          <p className="mb-4 md:mb-6 leading-loose">
            {t("aboutUs.introduction")}
          </p>
          <h6 className=" font-bold mb-4 md:mb-6 text-[rgb(30,75,142)]">
            {t("aboutUs.certifications.title")}
          </h6>
          <div className="flex flex-col gap-8">
            <div className="flex gap-2">
              <div>
                <Image
                  src="/DGERT.png"
                  width={40}
                  height={40}
                  alt={t("aboutUs.certifications.iefp")}
                />
              </div>
              <span>{t("aboutUs.certifications.iefp")}</span>
            </div>
            <div className="flex gap-2">
              <div>
                <Image
                  src="/DGERT.png"
                  width={40}
                  height={40}
                  alt={t("aboutUs.certifications.iefp")}
                />
              </div>
              <span>{t("aboutUs.certifications.iefp")}</span>
            </div>
            <div className="flex gap-2">
              <div>
                <Image
                  src="/DGERT.png"
                  width={40}
                  height={40}
                  alt={t("aboutUs.certifications.dgadr")}
                />
              </div>
              <span>{t("aboutUs.certifications.dgadr")}</span>
            </div>
            <div className="flex gap-2">
              <div>
                <Image
                  src="/DGERT.png"
                  width={40}
                  height={40}
                  alt={t("aboutUs.certifications.act")}
                />
              </div>
              <span>{t("aboutUs.certifications.act")}</span>
            </div>
            <div className="flex gap-2">
              <div>
                <Image
                  src="/DGERT.png"
                  width={40}
                  height={40}
                  alt={t("aboutUs.certifications.fnacc")}
                />
              </div>
              <span>{t("aboutUs.certifications.fnacc")}</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/4  flex justify-center  md:items-start items-center">
          <div>
            <Image
              src="/aboutus-logo.png"
              width={400}
              height={400}
              alt="Picture of the author"
              className="min-w-[200px] min-h-[200px] object-contain flex-shrink-0"
            />
          </div>
        </div>
      </div>
      <div className="mb-10 sm:mb-60 lg:mb-0">
        <Contact />
      </div>
    </main>
  );
}
