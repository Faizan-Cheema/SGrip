"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function WeWorkWith() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            name: "Al Jalil Garden",
            description: "This tile bond stands out for its reliable hold and long durability. It performs well on ceramics, porcelain, and other tile types with no issues. Their customer support is very supportive and always ready to solve any questions. I strongly recommend it.",
            image: "/1.png"
        },
        {
            name: "Kingcrete Builders",
            description: "This tile bond stands out for its reliable hold and long durability. It performs well on ceramics, porcelain, and other tile types with no issues. Their customer support is very supportive and always ready to solve any questions. I strongly recommend it.",
            image: "/2.png"
        },
        {
            name: "Omega Residencia",
            description: "This tile bond stands out for its reliable hold and long durability. It performs well on ceramics, porcelain, and other tile types with no issues. Their customer support is very supportive and always ready to solve any questions. I strongly recommend it.",
            image: "/3.png"
        },
        {
            name: "Al Noor Orchard",
            description: "This tile bond stands out for its reliable hold and long durability. It performs well on ceramics, porcelain, and other tile types with no issues. Their customer support is very supportive and always ready to solve any questions. I strongly recommend it.",
            image: "/4.png"
        }
    ];

    // Responsive items per slide
    const getItemsPerSlide = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 1; // mobile
            if (window.innerWidth < 1024) return 2; // tablet
            return 4; // desktop
        }
        return 4;
    };

    const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
    const totalSlides = Math.ceil(projects.length / itemsPerSlide);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setItemsPerSlide(getItemsPerSlide());
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="bg-[#F7F8F8] rounded-[60px] mx-auto max-w-7xl px-4 sm:px-6 py-2 my-4">
            <div className="pt-4 sm:pt-6 pb-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-6 sm:mb-8 md:mb-12 px-2">
                    We Work With
                </h2>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div key={slideIndex} className="min-w-full flex gap-3 sm:gap-4 md:gap-6">
                                    {projects
                                        .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                                        .map((project, index) => (
                                            <div
                                                key={index}
                                                className="flex-1 bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden"
                                            >
                                                <div className="h-28 sm:h-32 md:h-40 lg:h-48 bg-gray-300">
                                                    <div
                                                        className="w-full h-full bg-cover bg-center"
                                                        style={{ backgroundImage: `url('${project.image}')` }}
                                                    />
                                                </div>
                                                <div className="p-3 sm:p-4 md:p-6">
                                                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-2 sm:mb-2 md:mb-3">
                                                        {project.name}
                                                    </h3>
                                                    <p className="text-gray-600 text-xs sm:text-xs md:text-sm mb-2 sm:mb-3 md:mb-4 line-clamp-3 md:line-clamp-4">
                                                        {project.description}
                                                    </p>
                                                    <button className="w-full bg-black text-white py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors">
                                                        Read More
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 mt-4 sm:mt-6 md:mt-8">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${currentSlide === index ? "bg-black" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
