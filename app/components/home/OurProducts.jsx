"use client";

import Image from "next/image";
import { useState } from "react";

export default function OurProducts() {
  const [quantities, setQuantities] = useState({
    green: 1,
    red: 1,
    blue: 1,
  });

  const updateQuantity = (product, change) => {
    setQuantities((prev) => ({
      ...prev,
      [product]: Math.max(1, prev[product] + change),
    }));
  };

  const products = [
    {
      id: "green",
      image: "/green.png",
      price: 550,
      name: "Strong Grip Grey A Quality Green Pack",
      description:
        "A reliable cement based tile adhesive designed for strong grip and smooth application. Ideal for ceramic and basic floor/ wall tiles. Best for standard indoor installations.",
    },
    {
      id: "red",
      image: "/red.png",
      price: 650,
      name: "Strong Grip Grey A+ Quality Red Pack",
      description:
        "A high-performance adhesive offering improved bonding strength & durability. Suitable for ceramic, porcelain, & medium weight tiles. Works well for both indoor and outdoor use.",
    },
    {
      id: "blue",
      image: "/blue.png",
      price: 1000,
      name: "Strong Grip Grey A++ Quality White Pack",
      description:
        "A premium white adhesive with superior strength & finish. Perfect for marble, granite, glass tiles, & high end installations where clean aesthetics matter. Provides excellent adhesion.",
    },
  ];

  return (
    <div className="bg-[#F7F8F8] rounded-[60px] mx-auto  px-4 sm:px-6 py-2 my-4">
      <div className="pt-4 sm:pt-6 pb-4">
        <div className="flex flex-col gap-4 sm:gap-6 w-full">
          {/* Header */}
          <div className="text-center px-2">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-2">
              Our Products
            </h2>
            <p className="text-black text-base sm:text-lg">
              Professional-grade adhesives for every construction challenge
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-full lg:max-w-[90%] mx-auto items-stretch">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl p-3 sm:p-4 flex flex-col w-full h-full"
                >
                  {/* Product Image */}
                  <div className="flex items-center justify-center mb-3 sm:mb-4 h-64 sm:h-72 lg:h-80">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={350}
                      height={400}
                      className="w-auto h-full object-contain"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="px-1 sm:px-2 flex flex-col flex-grow">
                    {/* Price */}
                    <div className="mb-2">
                      <span className="text-xl sm:text-2xl font-bold text-black">
                        Rs. {product.price.toLocaleString()}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xs sm:text-sm font-bold text-black mb-2 leading-tight">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-black mb-3 sm:mb-4 flex-grow leading-relaxed">
                      {product.description}
                    </p>

                    {/* Quantity Selector and Buy Now */}
                    <div className="mt-auto">
                      <div className="flex items-center gap-2">
                        {/* Quantity Selector - Left Side */}
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <button
                            onClick={() => updateQuantity(product.id, -1)}
                            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white text-black hover:bg-gray-50 transition-colors font-medium text-base sm:text-lg rounded-full shadow-sm border border-gray-200"
                          >
                            −
                          </button>
                          <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xs sm:text-sm font-medium text-black bg-white rounded-full shadow-sm border border-gray-200">
                            {String(quantities[product.id]).padStart(2, "0")}
                          </span>
                          <button
                            onClick={() => updateQuantity(product.id, 1)}
                            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white text-black hover:bg-gray-50 transition-colors font-medium text-base sm:text-lg rounded-full shadow-sm border border-gray-200"
                          >
                            +
                          </button>
                        </div>
                        {/* Buy Now Button - Right Side */}
                        <button className="flex-1 bg-black text-white py-2 rounded-lg font-semibold text-xs sm:text-sm hover:bg-gray-800 transition-colors">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
