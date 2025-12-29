import Image from "next/image";

export default function OurMission() {
    return (
        <div className="bg-[#F7F8F8] rounded-[60px] mx-auto max-w-7xl px-4 sm:px-6 py-2 my-4">
            <div className="pt-4 sm:pt-6 pb-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                    {/* Left Image with Decorative Elements */}
                    <div className="relative mx-auto lg:mx-0 py-6 sm:py-8 md:py-12 lg:py-16 px-6 sm:px-8 md:px-12 lg:px-16 w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] order-2 lg:order-1">
                        <div className="relative">
                            {/* Decorative Rectangles */}
                            <Image
                                src="/Rectangle 784.png"
                                alt="Decorative"
                                width={80}
                                height={80}
                                className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 md:-top-12 md:-left-12 object-contain z-0 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"
                            />
                            <Image
                                src="/Rectangle 786.png"
                                alt="Decorative"
                                width={80}
                                height={80}
                                className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 md:-bottom-12 md:-right-12 object-contain z-0 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32"
                            />

                            {/* Main Image Container */}
                            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[180px] sm:h-[200px] md:h-[250px] lg:h-[280px] w-full bg-gray-200 z-10">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: "url('/cont.jpg')" }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="order-1 lg:order-2 px-2">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 md:mb-8">
                            Our Mission
                        </h2>

                        <div className="space-y-3 sm:space-y-4 md:space-y-6 text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                            <p>
                                Our mission is to provide Pakistan with the highest quality packaged
                                building products backed by the reliability of the Strong Grip name. We
                                offer a complete range of tile installation materials and grouts designed
                                to perform better, work efficiently, and deliver long-term value.
                            </p>

                            <p>
                                We are committed to developing innovative, easy-to-use solutions that
                                support tradesmen, builders, and DIY users in achieving strong, durable,
                                and professional results. Whenever you need dependable tile installation
                                products, you can always trust Strong Grip.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
