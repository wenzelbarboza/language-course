"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Why() {
  const { t } = useLanguage();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="container mx-auto sm:my-52 my-32 px-2 sm:px-4">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-4/12" data-aos="fade-right">
          <div className="image-wrapper relative inline-block">
            <Image
              src="/why.png"
              width={400}
              height={400}
              alt="Why choose Portuguese A2"
            />
          </div>
        </div>

        {/* Text Content */}
        <div
          className="md:w-8/12 flex flex-col justify-between gap-8 sm:gap-0"
          data-aos="fade-left"
        >
          <h2 className="text-5xl font-medium mb-4 md:mb-9">
            {t("about.whyChoose")}{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              {t("about.portugueseA2")}
            </span>
          </h2>
          <p className="mb-4 md:mb-9 text-lg  font-normal">
            {t("about.description")}
          </p>

          {/* Features List */}
          <div
            className="flex gap-6 text-base font-light sm:flex-row flex-col"
            data-aos="fade-up"
          >
            <span className="flex gap-2">
              <Image
                src="/Forward.png"
                width={20}
                height={20}
                alt={t("about.intensiveLearning")}
                className="w-5 h-5 object-contain flex-shrink-0"
              />
              {t("about.intensiveLearning")}
            </span>
            <span className="flex gap-2">
              <Image
                src="/Laptop.png"
                width={20}
                height={20}
                alt={t("about.online")}
                className="w-5 h-5 object-contain flex-shrink-0"
              />
              {t("about.online")}
            </span>
            <span className="flex gap-2 items-center">
              <Image
                src="/Paper.png"
                width={20}
                height={20}
                alt={t("about.noExams")}
                className="w-5 h-5 object-contain flex-shrink-0"
              />
              {t("about.noExams")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
// import Image from "next/image";

// export default function Why() {
//   return (
//     <>
//       <section className="container mx-auto my-28 px-2 sm:px-0">
//         <div className="flex flex-col md:flex-row items-center ">
//           <div className="md:w-4/12">
//             <div className="image-wrapper relative inline-block ">
//               <Image
//                 src="/why.png"
//                 width={300}
//                 height={300}
//                 alt="Picture of the author"
//                 // className="min-w-[200px] min-h-[200px] object-contain flex-shrink-0"
//               />
//             </div>
//           </div>
//           <div className="md:w-8/12  ">
//             <h2 className="text-2xl font-medium mb-4 md:mb-8">
//               Why choose portuges A2
//             </h2>
//             <p className="mb-4 md:mb-8 text-sm font-light">
//               Our A2-Level Portuguese Course is designed for beginners who want
//               to master the fundamentals of the Portuguese language and speak
//               with confidence in just 30 days. With a structured curriculum,
//               expert guidance, and practical exercises, you'll gain real-world
//               communication skills and cultural insights.
//             </p>
//             <div className="flex gap-6 text-sm font-light  sm:flex-row flex-col">
//               <span className="flex gap-2">
//                 <Image
//                   src="/Forward.png"
//                   width={20}
//                   height={20}
//                   alt="Picture of the author"
//                   className="w-5 h-5 object-contain flex-shrink-0"
//                 />{" "}
//                 30-Day Intensive Learning
//               </span>
//               <span className="flex gap-2">
//                 <Image
//                   src="/Laptop.png"
//                   width={20}
//                   height={20}
//                   alt="Picture of the author"
//                   className="w-5 h-5 object-contain flex-shrink-0"
//                 />{" "}
//                 100 % ONLINE
//               </span>
//               <span className="flex gap-2 items-center">
//                 {" "}
//                 <Image
//                   src="/Paper.png"
//                   width={20}
//                   height={20}
//                   alt="Picture of the author"
//                   className="w-5 h-5 object-contain flex-shrink-0"
//                 />{" "}
//                 NO EXAMS
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";

// export default function Why() {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <section className="container mx-auto my-28 px-2 sm:px-0">
//       <div className="flex flex-col md:flex-row items-center">
//         {/* Image Section */}
//         <div className="md:w-4/12" data-aos="fade-right">
//           <div className="image-wrapper relative inline-block">
//             <Image
//               src="/why.png"
//               width={350}
//               height={350}
//               alt="Why choose Portuguese A2"
//             />
//           </div>
//         </div>

//         {/* Text Content */}
//         <div className="md:w-8/12" data-aos="fade-left">
//           <h2 className="text-3xl font-medium mb-4 md:mb-8">
//             Why choose Portuguese A2
//           </h2>
//           <p className="mb-4 md:mb-8 text-base font-normal">
//             Our A2-Level Portuguese Course is designed for beginners who want to
//             master the fundamentals of the Portuguese language and speak with
//             confidence in just 30 days. With a structured curriculum, expert
//             guidance, and practical exercises, you'll gain real-world
//             communication skills and cultural insights.
//           </p>

//           {/* Features List */}
//           <div
//             className="flex gap-6 text-sm font-light sm:flex-row flex-col"
//             data-aos="fade-up"
//           >
//             <span className="flex gap-2">
//               <Image
//                 src="/Forward.png"
//                 width={20}
//                 height={20}
//                 alt="30-Day Intensive Learning"
//                 className="w-5 h-5 object-contain flex-shrink-0"
//               />
//               30-Day Intensive Learning
//             </span>
//             <span className="flex gap-2">
//               <Image
//                 src="/Laptop.png"
//                 width={20}
//                 height={20}
//                 alt="100% ONLINE"
//                 className="w-5 h-5 object-contain flex-shrink-0"
//               />
//               100% ONLINE
//             </span>
//             <span className="flex gap-2 items-center">
//               <Image
//                 src="/Paper.png"
//                 width={20}
//                 height={20}
//                 alt="NO EXAMS"
//                 className="w-5 h-5 object-contain flex-shrink-0"
//               />
//               NO EXAMS
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
