// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { useEffect } from "react";
// import Aos from "aos";

// export default function Review() {
//   useEffect(() => {
//     Aos.init({ duration: 1000, once: true });
//   }, []);
//   return (
//     <section className="bg-review bg-cover bg-top bg-no-repeat  relative">
//       <div className="w-full h-full items-end  bg-white bg-opacity-80 py-20  relative px-2 sm:px-0">
//         <div className="container mx-auto flex flex-col items-center">
//           <h2 className="text-2xl font-medium mb-6 text-center w-full">
//             What our students say
//           </h2>

//           {/* Swiper Carousel */}
//           <Swiper
//             modules={[Pagination]}
//             spaceBetween={30}
//             slidesPerView={1}
//             pagination={{ clickable: true, el: ".swiper-pagination" }}
//             breakpoints={{
//               768: { slidesPerView: 2 }, // Show 2 cards on tablets and larger
//             }}
//             className="w-full max-w-full"
//           >
//             {[
//               {
//                 name: "Peter Parker",
//                 img: "/peter.png",
//                 review:
//                   "Incidunt Odit Rerum Tenetur Alias Architecto Asperiores Omnis Cumque Doloribus Aperiam Numquam! Eligendi Corrupti, Molestias Laborum Dolores Quod Nisi Vitae Voluptate",
//               },
//               {
//                 name: "Lily Jonas",
//                 img: "/lily.png",
//                 review:
//                   "Incidunt Odit Rerum Tenetur Alias Architecto Asperiores Omnis Cumque Doloribus Aperiam Numquam! Eligendi Corrupti, Molestias Laborum Dolores Quod Nisi Vitae Voluptate",
//               },
//               {
//                 name: "kkk Jonas",
//                 img: "/lily.png",
//                 review:
//                   "Incidunt Odit Rerum Tenetur Alias Architecto Asperiores Omnis Cumque Doloribus Aperiam Numquam! Eligendi Corrupti, Molestias Laborum Dolores Quod Nisi Vitae Voluptate",
//               },
//             ].map((student, index) => (
//               <SwiperSlide key={index} className="flex justify-center">
//                 <div
//                   className="relative bg-white p-6 rounded-xl shadow-xl border border-gray-200 max-w-md text-center flex flex-col items-center transition-all duration-300 hover:shadow-2xl before:absolute before:inset-0 before:rounded-xl before:shadow-[0_0_20px_5px_rgba(255,0,0,0.3)] before:z-[-1] m-8 mt-16"
//                   data-aos="fade-right"
//                 >
//                   {/* Profile Image - FIXED */}
//                   <div className="absolute -top-14 left-3">
//                     <img
//                       src={student.img}
//                       alt={student.name}
//                       className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md"
//                     />
//                   </div>

//                   {/* Content - FIXED SPACING */}
//                   <div className="mt-6">
//                     <h3 className="text-lg font-bold">{student.name}</h3>
//                     <p className="text-gray-600 text-sm mt-2">
//                       {student.review}
//                     </p>
//                   </div>

//                   {/* Quote Icon */}
//                   <div className="absolute top-6 right-6 text-blue-400 text-2xl">
//                     &#10077;
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Pagination Dots - FIXED */}
//           <div className="mt-6 swiper-pagination !static"></div>
//         </div>
//       </div>
//     </section>
//   );
// }

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

export default function Review() {
  // Initialize AOS for scroll animation
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  // Example set of random testimonials
  const testimonials = [
    {
      name: "Jane Doe",
      img: "/lily.png", // Reuse any image you like
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, beatae.",
    },
    {
      name: "John Smith",
      img: "/lily.png",
      review:
        "Consequatur quis porro, vero distinctio molestiae fugiat. Reprehenderit, inventore?",
    },
    {
      name: "Alice Johnson",
      img: "/lily.png",
      review:
        "Labore fuga ipsa, saepe nostrum obcaecati sint, iste voluptas debitis!",
    },
    {
      name: "Bob Williams",
      img: "/lily.png",
      review:
        "Minima recusandae nisi esse. Repellendus id dolorem atque magnam veniam!",
    },
    {
      name: "Emily Brown",
      img: "/lily.png",
      review:
        "Consequatur consequatur accusamus ipsum minus asperiores. Quisquam at aspernatur!",
    },
    {
      name: "Kevin Turner",
      img: "/lily.png",
      review:
        "Molestiae, ab! Quis pariatur, vel nobis amet fuga voluptatum veritatis.",
    },
    {
      name: "Rachel Davis",
      img: "/lily.png",
      review:
        "Quam maxime nihil quia minus. Doloribus saepe nihil, laboriosam perferendis?",
    },
  ];

  return (
    <section className="relative bg-review bg-cover bg-top bg-no-repeat">
      <div className="w-full h-full bg-white bg-opacity-80 py-20 relative px-4 sm:px-0">
        <div className="container mx-auto flex flex-col items-center">
          {/* Section Header */}

          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What our{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              students
            </span>{" "}
            say
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
                  {/* Profile Image */}
                  <div className="absolute -top-14 left-3">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md"
                    />
                  </div>

                  {/* Optional Star Rating */}
                  <div className="mt-6">
                    <div className="flex items-center justify-center mb-4 gap-2 text-amber-500">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 18 17"
                        fill="currentColor"
                      >
                        <path d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699..." />
                      </svg>
                      <span className="text-base font-semibold text-indigo-600">
                        4.9
                      </span>
                    </div>

                    {/* Name & Review Text */}
                    <h3 className="text-lg font-bold">{item.name}</h3>
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
