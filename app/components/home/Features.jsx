"use client";

import Image from "next/image";

export default function Features() {
  return (
    <div className="bg-[#F7F8F8] rounded-[60px] mx-auto  px-4 sm:px-6 py-2 my-4">
      <div className="pt-4 sm:pt-6 pb-4">
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Heading */}
          <div className="text-left px-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              Features
            </h2>
          </div>

          {/* Feature Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Image
              src="/redc.png"
              alt="Feature 1"
              width={400}
              height={400}
              className="w-full h-auto object-contain rounded-3xl"
            />

            <Image
              src="/whitec.png"
              alt="Feature 2"
              width={400}
              height={400}
              className="w-full h-auto object-contain rounded-3xl"
            />

            <Image
              src="/blackc.png"
              alt="Feature 3"
              width={400}
              height={400}
              className="w-full h-auto object-contain rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
