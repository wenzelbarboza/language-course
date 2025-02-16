"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Review() {
  return (
    <section className="relative">
      <div className="w-full h-full bg-white bg-opacity-80 py-20 relative px-2 sm:px-0">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-2xl font-medium mb-6 text-center w-full">
            What your students say
          </h2>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            breakpoints={{
              768: { slidesPerView: 2 }, // Show 2 cards on tablets and larger
            }}
            className="w-full max-w-4xl"
          >
            {[
              {
                name: "Peter Parker",
                img: "/peter.png",
                review:
                  "Incidunt Odit Rerum Tenetur Alias Architecto Asperiores Omnis Cumque Doloribus Aperiam Numquam! Eligendi Corrupti, Molestias Laborum Dolores Quod Nisi Vitae Voluptate",
              },
              {
                name: "Lily Jonas",
                img: "/lily.png",
                review:
                  "Incidunt Odit Rerum Tenetur Alias Architecto Asperiores Omnis Cumque Doloribus Aperiam Numquam! Eligendi Corrupti, Molestias Laborum Dolores Quod Nisi Vitae Voluptate",
              },
              {
                name: "kkk Jonas",
                img: "/lily.png",
                review:
                  "Incidunt Odit Rerum Tenetur Alias Architecto Asperiores Omnis Cumque Doloribus Aperiam Numquam! Eligendi Corrupti, Molestias Laborum Dolores Quod Nisi Vitae Voluptate",
              },
            ].map((student, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="relative bg-white p-6 rounded-xl shadow-xl border border-gray-200 max-w-md text-center flex flex-col items-center transition-all duration-300 hover:shadow-2xl before:absolute before:inset-0 before:rounded-xl before:shadow-[0_0_20px_5px_rgba(255,0,0,0.3)] before:z-[-1] m-8 mt-16">
                  {/* Profile Image - FIXED */}
                  <div className="absolute -top-14 left-3">
                    <img
                      src={student.img}
                      alt={student.name}
                      className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md"
                    />
                  </div>

                  {/* Content - FIXED SPACING */}
                  <div className="mt-12">
                    <h3 className="text-lg font-bold">{student.name}</h3>
                    <p className="text-gray-600 text-sm mt-2">
                      {student.review}
                    </p>
                  </div>

                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-blue-400 text-2xl">
                    &#10077;
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots - FIXED */}
          <div className="mt-6 swiper-pagination !static"></div>
        </div>
      </div>
    </section>
  );
}
