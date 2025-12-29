"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/product", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-[#F7F8F8] rounded-[60px] mx-auto  px-4 sm:px-6 py-2 my-4 relative">
      <div className="flex items-center justify-between lg:pr-[140px]">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image
            src="/logoscg.png"
            alt="Strong Grip Logo"
            width={45}
            height={45}
            className="object-contain"
          />
          <span className="hidden lg:inline-block text-black font-bold text-xl">
            Strong Grip
          </span>
        </div>

        {/* Desktop Navigation Links - Centered */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-black font-semibold text-[15px] tracking-wide transition-all duration-200 ${
                isActive(link.href)
                  ? "underline decoration-2 underline-offset-4 font-bold"
                  : "hover:text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Contact Us Button */}
        <Link
          href="/contact"
          className="hidden lg:flex bg-black text-white px-6 absolute top-0 bottom-0 right-0 items-center rounded-r-full font-semibold hover:bg-gray-800 transition-colors text-[15px]"
        >
          Contact Us
        </Link>

        {/* Mobile/Tablet Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 pb-4 border-t border-gray-300 mt-2 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-black font-semibold text-base tracking-wide transition-all duration-200 py-2 ${
                isActive(link.href)
                  ? "underline decoration-2 underline-offset-4 font-bold"
                  : "hover:text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
