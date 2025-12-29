import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[#F7F8F8] rounded-[60px] mx-auto  px-4 sm:px-6 py-2 my-4">
      {/* Hero Section Container */}
      <div className="pt-4 sm:pt-6 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-[378px_1fr] gap-4 sm:gap-6 lg:gap-8 items-start">
          
          {/* Left Section */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full bg-white">
            
            {/* 500+ Projects Card */}
            <div className="bg-[#F7F8F8] p-4 sm:p-6 w-full max-w-[378px] mx-auto lg:mx-0 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-3">
                  500+
                </h2>
                <p className="text-black text-xs sm:text-sm lg:text-base leading-relaxed">
                  Projects. Strong Grip tile bond has been used in major projects including Al Noor, Al Rehman, Jaleel, Omega, and many other locations delivering strong and reliable results every time.
                </p>
              </div>
              <button className="bg-black text-white px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 rounded-full font-medium hover:bg-gray-800 transition-colors w-full mt-4 lg:mt-auto text-xs sm:text-sm lg:text-base">
                Explore
              </button>
            </div>

            {/* Special Offer Card */}
            <div className="lg:mr-8">
              <div className="bg-[#F7F8F8] rounded-tr-2xl p-4 sm:p-5 w-full max-w-[378px] mx-auto lg:mx-0 lg:h-[350px] flex flex-col justify-between">
                <div className="flex flex-col gap-2 sm:gap-3">
                  <p className="text-black text-xs lg:text-sm">Special Offer</p>
                  <h3 className="text-black font-bold text-xl sm:text-2xl lg:text-3xl leading-tight font-satoshi">
                    Unlock 10% off on all products for a limited time.
                  </h3>
                </div>
                <button className="bg-black text-white px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 rounded-full font-medium hover:bg-gray-800 transition-colors w-full mt-4 lg:mt-auto text-xs sm:text-sm lg:text-base">
                  Grab Offer
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full">
            
            {/* Heading */}
            <div className="w-full px-4 sm:px-6 lg:px-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                Strong Grip,
                <br />
                Bonds Like Steel
              </h1>
            </div>

            {/* Image Card */}
            <div className="rounded-2xl p-4 sm:p-6 lg:p-10 w-full">
              <Image
                src="/Rectangle 750.png"
                alt="Strong Grip tile bond illustration"
                width={1200}
                height={900}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
