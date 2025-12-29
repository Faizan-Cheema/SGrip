"use client";

// Testimonials data - static configuration
const testimonials = [
  {
    id: 1,
    text: "Strong Grip makes tile installation smooth and dependable with a strong, long-lasting bond. It works consistently well on all tile types and gives reliable results. Their support team is quick, friendly, and always ready to help, making the whole process easier. I fully recommend Strong Grip for quality tiling.",
    customer: "Al Jalil Developers",
    rating: 5,
  },
  {
    id: 2,
    text: "This adhesive is very easy to mix and apply, offering a solid grip that holds tiles firmly in place. It speeds up the installation process and delivers clean results. The customer service team is responsive and genuinely helpful whenever you need guidance. I confidently recommend this product.",
    customer: "Al Noor Developers",
    rating: 5,
  },
  {
    id: 3,
    text: "Strong Grip delivers excellent strength and smooth application, making it perfect for both professionals and DIY users. The results are neat, durable, and consistent every time. Their support team is polite, knowledgeable, and quick to assist. I highly recommend Strong Grip Tile Bond.",
    customer: "Al Rehman Developers",
    rating: 5,
  },
  {
    id: 4,
    text: "This tile bond stands out for its reliable hold and easy usability. It performs well on ceramic, porcelain, and other tile types with no issues. Their customer support is very supportive and always ready to solve any questions. I strongly endorse Strong Grip for any tiling project.",
    customer: "Ashley Cooper",
    rating: 5,
  },
];

export default function OurCustomers() {
  // First testimonial for top right card
  const firstTestimonial = testimonials[0];
  // Remaining 3 testimonials - 2 for left bottom, 1 for right bottom
  const leftBottomTestimonials = testimonials.slice(1, 3);
  const rightBottomTestimonial = testimonials[3];

  return (
    <div className="bg-[#F7F8F8] rounded-[60px] mx-auto  px-4 sm:px-6 py-2 my-4">
      <div className="pt-4 sm:pt-6 pb-4">
        <div className="flex flex-col gap-4 sm:gap-6">
            {/* Top Row - Heading and Right Card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Left Side - Heading (spans 2 columns, same height as right card) */}
              <div className="lg:col-span-2 flex items-center justify-center h-full px-2">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center lg:text-left">
                  What our customers say
                </h2>
              </div>

              {/* Right Side - Top Card (same size as bottom cards) */}
              <div className="bg-white rounded-3xl p-4 sm:p-6 flex flex-col shadow-sm border border-gray-100 h-full">
                {/* Testimonial Text */}
                <p className="text-xs sm:text-sm text-black mb-3 sm:mb-4 flex-grow leading-relaxed font-satoshi">
                  {firstTestimonial.text}
                </p>

                {/* Customer Name and Stars */}
                <div className="mt-auto flex flex-col items-end">
                  <p className="text-sm sm:text-base font-semibold text-black mb-2">
                    {firstTestimonial.customer}
                  </p>
                  {/* Rating Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(firstTestimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - 2 Left Cards and 1 Right Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Left 2 Cards */}
              {leftBottomTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-3xl p-4 sm:p-6 flex flex-col shadow-sm border border-gray-100 h-full"
                >
                  {/* Testimonial Text */}
                  <p className="text-xs sm:text-sm text-black mb-3 sm:mb-4 flex-grow leading-relaxed font-satoshi">
                    {testimonial.text}
                  </p>

                  {/* Customer Name and Stars */}
                  <div className="mt-auto flex flex-col items-end">
                    <p className="text-sm sm:text-base font-semibold text-black mb-2">
                      {testimonial.customer}
                    </p>
                    {/* Rating Stars */}
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Right Bottom Card */}
              <div className="bg-white rounded-3xl p-4 sm:p-6 flex flex-col shadow-sm border border-gray-100 h-full sm:col-span-2 lg:col-span-1">
                {/* Testimonial Text */}
                <p className="text-xs sm:text-sm text-black mb-3 sm:mb-4 flex-grow leading-relaxed font-satoshi">
                  {rightBottomTestimonial.text}
                </p>

                {/* Customer Name and Stars */}
                <div className="mt-auto flex flex-col items-end">
                  <p className="text-sm sm:text-base font-semibold text-black mb-2">
                    {rightBottomTestimonial.customer}
                  </p>
                  {/* Rating Stars */}
                  <div className="flex gap-0.5">
                    {[...Array(rightBottomTestimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

