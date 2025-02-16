"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

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
    <header className="bg-white  sticky top-0 z-50 px-2 sm:px-0 py-4">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold">
          Spac<span className="text-blue-600">Dyna</span>
        </Link>
        <nav className="hidden md:flex space-x-4 items-center">
          <Link href="#top" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-600">
            About Us
          </Link>
          <Link href="#services" className="text-gray-600 hover:text-blue-600">
            Services
          </Link>
          <Link href="#portfolio" className="text-gray-600 hover:text-blue-600">
            Portfolio
          </Link>
          <Link href="#blog" className="text-gray-600 hover:text-blue-600">
            Blog
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600">
            Message Us
          </Link>
          <Link
            href="#contact"
            className="bg-customOrange hover:bg-customBlue-button text-white px-4 py-2 rounded-full "
          >
            Contact Now
          </Link>
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
        } fixed top-24 left-0 w-full bg-white py-2 shadow-md z-50`}
      >
        <nav>
          {[
            "Home",
            "About Us",
            "Services",
            "Portfolio",
            "Blog",
            "Message Us",
            "Contact Now",
          ].map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
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
