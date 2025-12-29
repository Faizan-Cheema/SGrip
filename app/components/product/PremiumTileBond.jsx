"use client";

/**
 * PremiumTileBond Component
 * 
 * Displays information about premium tile bond products with a heading
 * and descriptive text about the company's tile adhesive solutions.
 * 
 * @returns {JSX.Element} Premium tile bond information section
 */
export default function PremiumTileBond() {
  return (
    <div className="bg-[#F7F8F8] rounded-[60px] mx-auto  px-4 sm:px-6 py-2 my-4">
      <div className="pt-4 sm:pt-6 pb-4">
        <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 md:mb-6">
            Premium Tile Bond Products in Pakistan
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
            Our cement-based tile adhesives are designed for strength and durability. From waterproof and heat-resistant to insulation and acoustic tile bonds, we provide reliable dry premix solutions for every tiling need.
          </p>
        </div>
      </div>
    </div>
  );
}

