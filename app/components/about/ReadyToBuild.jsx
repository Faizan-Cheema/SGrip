export default function ReadyToBuild() {
    return (
        <div className="bg-[#F7F8F8] rounded-[60px] mx-auto max-w-7xl px-4 sm:px-6 py-2 my-4">
            <div className="pt-4 sm:pt-6 pb-4">
                <div className="bg-gray-100 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="relative z-10 px-2">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 md:mb-6">
                                Ready to Build With Strong Grip?
                            </h2>
                            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg mb-2 sm:mb-3 md:mb-4">
                                Discover reliable tile adhesives and grouts designed for strength,
                                durability, and long-lasting performance.
                            </p>
                            <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-6 md:mb-8">
                                Get the right product for your next project delivered anywhere in
                                Pakistan.
                            </p>
                            <button className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 md:py-4 rounded-full text-xs sm:text-sm md:text-base font-medium hover:bg-gray-800 transition-colors">
                                Explore Our Products
                            </button>
                        </div>

                        {/* Right Images */}
                        <div className="relative flex gap-3 sm:gap-4 md:gap-6 justify-center lg:justify-end items-center h-full min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] pr-0 lg:pr-8">
                            {/* First Image - Tiles (Flat top, rounded bottom) */}
                            <div
                                className="relative w-24 h-36 sm:w-32 sm:h-48 md:w-40 md:h-60 lg:w-48 lg:h-72 overflow-hidden bg-gray-300"
                                style={{ borderRadius: "0 0 50% 50% / 0 0 50% 50%" }}
                            >
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: "url('/5.png')" }}
                                ></div>
                            </div>

                            {/* Second Image - Hand with Trowel (Rounded top, flat bottom) */}
                            <div
                                className="relative w-28 h-32 sm:w-36 sm:h-40 md:w-48 md:h-56 lg:w-56 lg:h-64 overflow-hidden bg-gray-300 mt-6 sm:mt-8 md:mt-12 lg:mt-16"
                                style={{ borderRadius: "50% 50% 0 0 / 50% 50% 0 0" }}
                            >
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: "url('/6.jpg')" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
