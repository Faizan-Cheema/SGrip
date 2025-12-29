"use client";

import { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <div className="bg-[#F7F8F8] rounded-[60px] mx-auto max-w-7xl px-4 sm:px-6 py-2 my-4">
            <div className="pt-4 sm:pt-6 pb-4">
                <div className="bg-[#F5F5F5] rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-start">
                        {/* Left Side - Contact Information */}
                        <div className="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16">
                            {/* Heading */}
                            <div className="px-2">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black mb-3 sm:mb-4 md:mb-6">Contact us</h1>
                                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                                    Get in touch for inquiries or support.<br />
                                    We&apos;re here to help!
                                </p>
                            </div>

                        {/* Contact Details */}
                        <div className="space-y-3 sm:space-y-4 md:space-y-6">
                            {/* Phone */}
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                                    </svg>
                                </div>
                                <span className="text-gray-800 text-xs sm:text-sm">+92 320 0186231</span>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </div>
                                <span className="text-gray-800 text-xs sm:text-sm">Support@stronggrip.com</span>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5">
                                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>
                                <span className="text-gray-800 text-xs sm:text-sm leading-relaxed">
                                    17J, Sunflower Society, Johar Town, Lahore
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 md:space-y-8">
                            {/* Name Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                                <div>
                                    <label className="block text-xs text-gray-700 mb-2 sm:mb-3 font-medium">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Faizan"
                                        className="w-full bg-transparent border-b border-gray-400 pb-2 text-xs sm:text-sm focus:outline-none focus:border-black transition-colors placeholder:text-gray-400"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-gray-700 mb-2 sm:mb-3 font-medium">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Artyum"
                                        className="w-full bg-transparent border-b border-gray-400 pb-2 text-xs sm:text-sm focus:outline-none focus:border-black transition-colors placeholder:text-gray-400"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Email and Phone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                                <div>
                                    <label className="block text-xs text-gray-700 mb-2 sm:mb-3 font-medium">Email</label>
                                    <input
                                        type="email"
                                        placeholder="faizanartyum55@gmail.com"
                                        className="w-full bg-transparent border-b border-gray-400 pb-2 text-xs sm:text-sm focus:outline-none focus:border-black transition-colors placeholder:text-gray-400"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs text-gray-700 mb-2 sm:mb-3 font-medium">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="0320-04290494"
                                        className="w-full bg-transparent border-b border-gray-400 pb-2 text-xs sm:text-sm focus:outline-none focus:border-black transition-colors placeholder:text-gray-400"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-xs text-gray-700 mb-2 sm:mb-3 font-medium">Message</label>
                                <textarea
                                    rows={3}
                                    placeholder="Write your message..."
                                    className="w-full bg-transparent border-b border-gray-400 pb-2 text-xs sm:text-sm focus:outline-none focus:border-black resize-none transition-colors placeholder:text-gray-400"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2 sm:pt-4">
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto bg-black text-white px-8 sm:px-10 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}