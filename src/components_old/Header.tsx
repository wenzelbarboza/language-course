// components/Header.js
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-40">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Spac<span className="text-blue-500">Dyna</span>
          </Link>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link href="#top" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:text-blue-500">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#blog" className="hover:text-blue-500">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-500">
                Message Us
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <span className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Contact Now
                </span>
              </Link>
            </li>
          </ul>
          {/* Mobile Menu Trigger (optional) */}
          <button className="md:hidden text-gray-700">Menu</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
