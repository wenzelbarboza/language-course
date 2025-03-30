"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className=" lg:my-5 w-full container mx-auto px-2 sm:px-4">
      <div className="flex items-center justify-between w-full mb-3 container flex-col sm:flex-row gap-4 sm:gap-0 ">
        <div className="mb-4 block sm:hidden">
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="30-Day Intensive Learning"
            // className="w-5 h-5 object-contain flex-shrink-0"
          />
        </div>
        <div>
          <div className=" text-sm  font-semibold mb-4">
            {t("footer.follow")}
          </div>
          <div className="flex justify-between">
            <Image
              src="/insta.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Image
              src="/facebook.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Image
              src="/x.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
            <Image
              src="/linkedin.png"
              width={30}
              height={30}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div>
          <p className="text-sm  font-semibold">{t("footer.terms")}</p>
        </div>
        <div>
          <div className="mb-4 hidden sm:block">
            <Image
              src="/logo.png"
              width={200}
              height={200}
              alt="30-Day Intensive Learning"
              // className="w-5 h-5 object-contain flex-shrink-0"
            />
          </div>
          <p className="text-sm  font-semibold">YOUR SLOGAN HERE</p>
          <ul className="flex gap-1 flex-col items-center sm:items-start">
            <li className="text-xs font-light">{t("footer.home")}</li>
            <li className="text-xs font-light">{t("footer.about")}</li>
            <li className="text-xs font-light">{t("footer.courses")}</li>
            <li className="text-xs font-light">{t("footer.contact")}</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
