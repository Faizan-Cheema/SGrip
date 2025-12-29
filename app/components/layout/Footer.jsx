"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#514F4F] rounded-[60px] mx-auto  px-4 sm:px-6 py-2 my-4">
      <div className="pt-4 sm:pt-6 pb-4">
        {/* Main Dark Gray Container */}
        <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: "#514F4F" }}>
          <div className="flex flex-col gap-6 sm:gap-8 p-4 sm:p-6 lg:p-8 xl:p-12">
            
            {/* Top Section - Call to Action */}
            <div className="flex flex-col items-center gap-4 sm:gap-6 text-center px-2">
              {/* Slogan */}
              <p className="text-gray-300 uppercase text-xs sm:text-sm lg:text-base tracking-wider">
                BUILD STRONG. LAST LONG.
              </p>
              
              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Request Product Information
              </h2>
              
              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed">
                Strong Grip is a high performance tile adhesive brand, engineered for superior bonding, durability, and long term reliability for residential and commercial construction projects.
              </p>
              
              {/* Contact Us Button */}
              <Link
                href="/contact"
                className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors mt-2 text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-300 text-xs sm:text-sm">
                ©2025 Strong Grip. All Rights Reserved.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-400"></div>

            {/* Footer Navigation and Social Media */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
              {/* Left Side - Brand Logo */}
              <div className="flex items-center gap-2 sm:gap-3">
                <Image
                  src="/logoscg.png"
                  alt="Strong Grip Logo"
                  width={45}
                  height={45}
                  className="object-contain w-10 h-10 sm:w-[45px] sm:h-[45px]"
                />
                <span className="text-white font-bold text-lg sm:text-xl">Strong Grip</span>
              </div>

              {/* Center - Navigation Links */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
                <Link href="/" className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base">
                  Home
                </Link>
                <Link href="/product" className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base">
                  Product
                </Link>
                <Link href="/about" className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base">
                  About Us
                </Link>
                <Link href="/contact" className="text-white hover:text-gray-300 transition-colors font-medium text-sm sm:text-base">
                  Contact Us
                </Link>
              </div>

              {/* Right Side - Social Media Icons */}
              <div className="flex items-center gap-3 sm:gap-4">
                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  <span className="text-white font-bold text-[10px] sm:text-xs">in</span>
                </a>
                
                {/* Facebook */}
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  <span className="text-white font-bold text-[10px] sm:text-xs">f</span>
                </a>
                
                {/* Instagram */}
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* YouTube */}
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
