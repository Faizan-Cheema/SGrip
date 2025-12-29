import Image from "next/image";

export default function Introduction() {
    return (
        <div className="bg-[#F7F8F8] rounded-[60px] mx-auto max-w-7xl px-4 sm:px-6 py-2 my-4">
            <div className="pt-4 sm:pt-6 pb-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                    {/* Left Content */}
                    <div className="px-2">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 md:mb-8">
                            Introduction
                        </h2>

                        <div className="space-y-3 sm:space-y-4 md:space-y-6 text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                            <p>
                                Strong Grip is an independent, family-owned company and a trusted
                                supplier of packaged building products in Pakistan. We offer a growing
                                range of consistently packaged solutions designed for professional
                                tradesmen, home improvement users, and DIY customers.
                            </p>

                            <p>
                                Our product line includes tile adhesives, flexible grouts, and
                                architectural grouts, all crafted to deliver durability and long-lasting
                                performance. With a strong network of stockists and a wide distribution
                                system covering metropolitan, regional, and remote areas across Pakistan,
                                we ensure high-quality building products are delivered on time, wherever
                                you are.
                            </p>
                        </div>
                    </div>

                    {/* Right Image with Decorative Elements */}
                    <div className="relative mx-auto lg:mx-0 py-6 sm:py-8 md:py-12 lg:py-16 px-6 sm:px-8 md:px-12 lg:px-16 w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]">
                        <div className="relative">
                            {/* Decorative Circle */}
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
                                    style={{ backgroundImage: "url('/constract.png')" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
