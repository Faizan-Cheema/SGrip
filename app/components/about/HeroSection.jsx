export default function HeroSection() {
    return (
        <div className="bg-[#F7F8F8] rounded-[60px] mx-auto max-w-7xl px-4 sm:px-6 py-2 my-4">
            <div className="pt-4 sm:pt-6 pb-4">
                <div className="relative rounded-3xl overflow-hidden h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-gradient-to-r from-black/80 to-transparent">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/Rectangle 782 (2).png')" }}
                    ></div>

                    {/* Content Overlay */}
                    <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20">
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6">About Us</h1>
                        <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-xl leading-relaxed">
                            Strong Grip is a trusted name in tile adhesives, known for delivering
                            dependable strength, durability, and long-lasting performance. Our products
                            are designed to help builders, contractors, and homeowners achieve solid,
                            professional tile installations without complications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
