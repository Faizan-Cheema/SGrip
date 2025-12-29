"use client";

import Image from "next/image";

/**
 * HeroProduct Component
 * 
 * Displays the hero section for the products page with the main heading
 * and product showcase image.
 * 
 * @returns {JSX.Element} Hero section component
 */
export default function HeroProduct() {
  return (
    <div className="bg-[#F7F8F8] rounded-[60px] mx-auto  px-4 sm:px-6 py-2 my-4">
      <div className="pt-4 sm:pt-6 pb-4">
        <div className="h-auto md:h-[600px] lg:h-[700px] relative rounded-3xl overflow-hidden" 
             style={{ backgroundColor: "#F4F5F5" }}>
          <div className="h-full flex flex-col md:flex-row items-center justify-between py-6 sm:py-8 md:py-0 px-4 sm:px-6 md:px-8 lg:px-12">
            {/* Left Side - Text Content */}
            <div className="flex-1 w-full md:w-auto text-center md:text-left mb-4 sm:mb-6 md:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black leading-tight">
                Precision<br />Grip, Solid<br />Strength
              </h1>
            </div>

            {/* Right Side - Product Image */}
            <div className="flex-1 w-full md:w-auto flex items-center justify-center">
              <Image
                src="/Group 1000004706.png"
                alt="Strong Grip Products"
                width={700}
                height={500}
                className="object-contain w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] 2xl:max-w-[1000px] h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

