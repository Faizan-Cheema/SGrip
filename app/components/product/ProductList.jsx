"use client";

import Image from "next/image";

/**
 * Products Data
 * 
 * Product information array containing details for all available products.
 */
const products = [
  {
    id: "green",
    image: "/Group 1000004707 (2).png",
    price: 550,
    name: "Strong Grip Grey A Quality Green Pack",
    description:
      "A reliable cement based tile adhesive designed for strong grip and smooth application. Ideal for ceramic and basic floor/ wall tiles. Best for standard indoor installations.",
  },
  {
    id: "red",
    image: "/Group 1000004707.png",
    price: 650,
    name: "Strong Grip Grey A+ Quality Red Pack",
    description:
      "A high-performance adhesive offering improved bonding strength & durability. Suitable for ceramic, porcelain, & medium weight tiles. Works well for both indoor and outdoor use.",
  },
  {
    id: "blue",
    image: "/Group 1000004707 (1).png",
    price: 1000,
    name: "Strong Grip Grey A++ Quality White Pack",
    description:
      "A premium white adhesive with superior strength & finish. Perfect for marble, granite, glass tiles, & high end installations where clean aesthetics matter. Provides excellent adhesion.",
  },
];

/**
 * ProductList Component
 * 
 * Displays a list of products with detailed information, images, and action buttons.
 * Each product card features a responsive layout with product images positioned
 * outside the card boundaries for a modern design.
 * 
 * @returns {JSX.Element} Product list component
 */
export default function ProductList() {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="bg-[#F7F8F8] rounded-[60px] mx-auto  px-4 sm:px-6 py-2 my-4">
      <div className="pt-4 sm:pt-6 pb-4">
        <div className="py-8 sm:py-12 md:py-16 lg:py-20 overflow-visible">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 px-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 md:mb-6">
              Our Products
            </h2>
            <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-satoshi">
              Powerful tile bonding solution for firm and reliable fixing. Keeps tiles securely in place, even under heavy use and moisture.
            </p>
          </div>

      {/* Product Grid */}
      <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20  mx-auto mt-6 sm:mt-8">
        {products.map((product, index) => {
          const FIRST_CARD_IMAGE_SIZE = 500;
          const IMAGE_SIZE = index === 1 ? 550 : index === 2 ? 600 : 500;
          const isReversed = index === 1;
          
          return (
            <div
              key={product.id}
              className={`relative bg-white rounded-2xl shadow-md border border-gray-100 px-2 sm:px-4 md:px-6 ${
                index === 2 
                  ? 'min-h-[280px] sm:min-h-[300px] md:min-h-[320px]' 
                  : 'min-h-[240px] sm:min-h-[260px]'
              } flex flex-col md:flex-row items-center overflow-visible ${
                isReversed ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Product Image Container - Responsive */}
              <div 
                className={`relative md:absolute ${
                  isReversed 
                    ? 'md:right-0 md:translate-x-15' 
                    : 'md:left-0 md:-translate-x-15'
                } top-0 ${
                  index === 0 
                    ? 'md:-translate-y-28' 
                    : index === 1 
                    ? 'md:-translate-y-36' 
                    : 'md:-translate-y-60'
                } z-10 drop-shadow-lg mb-4 md:mb-0 ${
                  index === 0 
                    ? 'w-[160px] sm:w-[200px] md:w-[280px] lg:w-[370px] xl:w-[460px]' 
                    : 'w-[180px] sm:w-[220px] md:w-[300px] lg:w-[400px] xl:w-[500px]'
                } ${
                  index === 1 ? 'xl:w-[550px]' : ''
                } ${
                  index === 2 ? 'xl:w-[600px] xl:h-[720px]' : ''
                } h-auto ${
                  index === 2 ? 'md:aspect-[5/6]' : 'aspect-square'
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={IMAGE_SIZE}
                  height={index === 2 ? IMAGE_SIZE + 120 : IMAGE_SIZE}
                  className="object-contain w-full h-full"
                  priority={index === 0}
                />
              </div>

              {/* Product Details */}
              <div 
                className={`flex-1 w-full py-7 md:py-12 px-4 sm:px-6 ${
                  isReversed 
                    ? 'md:mr-[320px] lg:mr-[420px] xl:mr-[570px] md:pr-16' 
                    : 'md:ml-[320px] lg:ml-[420px] xl:ml-[570px] md:pl-16'
                } pr-4 sm:pr-6`}
              >
                {/* Price */}
                <div className="mb-3">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                    Rs. {product.price}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-sm sm:text-base font-bold text-black mb-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p 
                  className="text-xs sm:text-sm text-black mb-5 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: product.description }} 
                />

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    className="bg-black text-white px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-normal hover:bg-gray-800 transition-colors whitespace-nowrap text-center"
                    aria-label={`Buy ${product.name} now`}
                  >
                    Buy Now
                  </button>
                  <button 
                    className="bg-white text-black px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-normal border border-gray-300 hover:bg-gray-50 transition-colors whitespace-nowrap text-center"
                    aria-label={`View technical datasheet for ${product.name}`}
                  >
                    Technical Datasheet
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
        </div>
      </div>
    </div>
  );
}


