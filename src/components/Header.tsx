"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { language, setLanguage, t } = useLanguage();

  // Close menu if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white  sticky top-0 z-50 px-2 sm:px-4 py-4">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200}
            height={200}
            // className="w-0 h-10 object-contain flex-shrink-0"
          />
        </Link>
        <nav className="hidden md:flex space-x-4 items-center ml-4">
          <Link href="/" className="text-gray-600 hover:text-blue-600">
            {t("header.home")}
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-blue-600 whitespace-nowrap"
          >
            {t("header.aboutUs")}
          </Link>
          <Link
            href="/pricing"
            className="text-gray-600 hover:text-blue-600"
            // onClick={(e) => {
            //   e.preventDefault();
            //   const coursesSection = document.getElementById("courses");
            //   if (coursesSection) {
            //     coursesSection.scrollIntoView({ behavior: "smooth" });
            //   }
            // }}
          >
            {t("header.courses")}
          </Link>
          {/* <Link href="#portfolio" className="text-gray-600 hover:text-blue-600">
            {t("header.testimonials")}
          </Link> */}
          {/* <Link href="#blog" className="text-gray-600 hover:text-blue-600">
            {t('header.blog')}
          </Link> */}
          <Link
            href="#contact"
            className="text-gray-600 hover:text-blue-600 whitespace-nowrap"
          >
            {t("header.messageUs")}
          </Link>
          <Link
            href="/pricing"
            className="bg-customOrange hover:bg-customBlue-button text-white px-4 py-2 rounded-full whitespace-nowrap"
          >
            {t("header.enrollNow")}
          </Link>
          <div className="ml-4 flex items-center space-x-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded ${
                language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("zh")}
              className={`px-2 py-1 rounded ${
                language === "zh" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              中文
            </button>
          </div>
        </nav>
        <button
          ref={buttonRef}
          className="md:hidden text-xl"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden transition-all duration-300 ease-in-out origin-top transform ${
          isMenuOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        } fixed top-20 left-0 w-full bg-white py-2 shadow-md z-50`}
      >
        <nav>
          {[
            { name: t("header.home"), href: "/" },
            { name: t("header.aboutUs"), href: "/about" },
            // { name: t("header.courses"), href: "/pricing", scroll: true },
            { name: t("header.courses"), href: "/pricing" },
            // { name: t("header.testimonials"), href: "#portfolio" },
            // { name: t('header.blog'), href: "#blog" },
            { name: t("header.messageUs"), href: "#contact" },
            { name: t("header.enrollNow"), href: "/pricing" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              onClick={(e) => {
                // if (item.scroll && item.name === t("header.courses")) {
                //   e.preventDefault();
                //   setIsMenuOpen(false);
                //   const coursesSection = document.getElementById("courses");
                //   if (coursesSection) {
                //     coursesSection.scrollIntoView({ behavior: "smooth" });
                //   }
                // } else {
                setIsMenuOpen(false);
                // }
              }}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex justify-center mt-4 space-x-2 px-4 py-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 rounded ${
                language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("zh")}
              className={`px-2 py-1 rounded ${
                language === "zh" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              中文
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50 px-2 sm:px-0">
//       <div className="container mx-auto flex justify-between items-center py-4">
//         <Link href="/" className="text-2xl font-bold">
//           Spac<span className="text-blue-600">Dyna</span>
//         </Link>
//         <nav className="hidden md:flex space-x-4 items-center">
//           <Link href="#top" className="text-gray-600 hover:text-blue-600">
//             Home
//           </Link>
//           <Link href="#about" className="text-gray-600 hover:text-blue-600">
//             About Us
//           </Link>
//           <Link href="#services" className="text-gray-600 hover:text-blue-600">
//             Services
//           </Link>
//           <Link href="#portfolio" className="text-gray-600 hover:text-blue-600">
//             Portfolio
//           </Link>
//           <Link href="#blog" className="text-gray-600 hover:text-blue-600">
//             Blog
//           </Link>
//           <Link href="#contact" className="text-gray-600 hover:text-blue-600">
//             Message Us
//           </Link>
//           <Link
//             href="#contact"
//             className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
//           >
//             Contact Now
//           </Link>
//         </nav>
//         <button
//           className="md:hidden"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           Menu
//         </button>
//       </div>
//       {isMenuOpen && (
//         <nav className="md:hidden bg-white py-2">
//           <Link
//             href="#top"
//             className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//           >
//             Home
//           </Link>
//           <Link
//             href="#about"
//             className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//           >
//             About Us
//           </Link>
//           <Link
//             href="#services"
//             className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//           >
//             Services
//           </Link>
//           <Link
//             href="#portfolio"
//             className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//           >
//             Portfolio
//           </Link>
//           <Link
//             href="#blog"
//             className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//           >
//             Blog
//           </Link>
//           <Link
//             href="#contact"
//             className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//           >
//             Message Us
//           </Link>
//           <Link
//             href="#contact"
//             className="block px-4 py-2 bg-red-600 text-white hover:bg-red-700"
//           >
//             Contact Now
//           </Link>
//         </nav>
//       )}
//     </header>
//   );
// }
