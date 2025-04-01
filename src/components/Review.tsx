"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";

// AOS for animation (optional)
import Aos from "aos";
import "aos/dist/aos.css";
import { useLanguage } from "@/context/LanguageContext";

export default function Review() {
  // Initialize AOS for scroll animation
  const { t } = useLanguage();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  // Use testimonials from language files
  const testimonials = [
    {
      name: t("testimonials.student1.name"),
      review: t("testimonials.student1"),
    },
    {
      name: t("testimonials.student2.name"),
      review: t("testimonials.student2"),
    },
    {
      name: t("testimonials.student3.name"),
      review: t("testimonials.student3"),
    },
    {
      name: t("testimonials.student4.name"),
      review: t("testimonials.student4"),
    },
  ];

  return (
    <section className="relative bg-review bg-cover bg-top bg-no-repeat">
      <div className="w-full h-full bg-white bg-opacity-80 py-20 relative px-4 sm:px-0">
        <div className="container mx-auto flex flex-col items-center">
          {/* Section Header */}
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            <span className="bg-text-gradient bg-clip-text text-transparent">
              {t("testimonials.heading")}
            </span>
          </h2>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            centeredSlides={true}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // Show 1 on mobile, 2 on medium (≥768px), 3 on large (≥1024px)
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 32 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="mySwiper w-full flex justify-center"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <div
                  className="group relative bg-white p-6 rounded-xl shadow-xl border 
                             border-gray-200 max-w-md text-center flex flex-col 
                             items-center transition-all duration-300 hover:shadow-2xl 
                             m-8 mt-16 slide_active:border-indigo-600"
                  data-aos="fade-up"
                >
                  {/* Optional Star Rating */}
                  <div className="mt-4">
                    <div className="flex items-center justify-center mb-4 gap-2 text-amber-500">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 18 17"
                        fill="currentColor"
                      >
                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699..." />
                      </svg>
                      <span className="text-base font-semibold text-indigo-600">
                        {item.name}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-600 text-sm mt-3 group-hover:text-gray-800 slide_active:text-gray-800">
                      {item.review}
                    </p>
                  </div>

                  {/* Decorative Quote Icon (optional) */}
                  <div className="absolute top-6 right-6 text-blue-400 text-2xl">
                    &#10077;
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots */}
          <div className="mt-6 swiper-pagination !static"></div>
        </div>
      </div>
    </section>
  );
}
