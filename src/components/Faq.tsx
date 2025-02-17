"use client";
import Aos from "aos";
import { useEffect } from "react";

export default function Faq() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="container mx-auto py-20 " data-aos="fade-down">
      <h1 className="text-3xl font-bold text-center mb-10">FAQs</h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <details
            key={index}
            className="group [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
              <h2 className="font-medium">{item.question}</h2>
              <svg
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <p className="mt-4 px-4 leading-relaxed text-gray-700 whitespace-pre-line">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

const faqData = [
  {
    question: "What is the legal framework for the A2 certificate?",
    answer: `According to Article 25(2)(d)(e)(f) of Decree-Law No. 237-A/2006 of December 14, 2006 (which approves the Portuguese Nationality Law), as amended by Decree-Law No. 26/2022 of March 18, 2022, Portuguese language proficiency can be demonstrated by the following means:\n\n• A certificate of Portuguese proficiency at A2 level or above, issued by public schools, employment and training centers, and accredited centers of the Institute for Employment and Vocational Training (IEFP, I.P.), in accordance with Decree No. 1262/2009 of October 15, 2009 (as amended by Decree No. 216-B/2012 of July 18, 2012).\n• A Portuguese Host Language (PLH) course certificate at A2 level or above, issued by public schools, IEFP, I.P. centers (directly managed or affiliated), and Qualifica centers, in accordance with Decree No. 183/2020 of August 5, 2020 (as amended by Decree No. 184/2022 of July 21, 2022).\n• A Portuguese language training certificate, proving that the holder has completed a Portuguese language skills module/unit included in the National Qualifications Catalogue (which is part of the school training component), through the National Qualifications System’s dual certification training model, with a total learning duration of at least 100 hours, in accordance with Article 9 of Decree No. 396/2007 of December 31, 2007 (latest revised version).`,
  },
  {
    question:
      "Can the A2 certificate be used to apply for permanent residency in Portugal?",
    answer: "Yes.",
  },
  {
    question:
      "Can the A2 certificate be used to apply for Portuguese nationality?",
    answer: "Yes.",
  },
  {
    question:
      "Can people with no prior knowledge of Portuguese take this course?",
    answer: "Yes, our course starts from absolute beginner level (A1).",
  },
  {
    question: "Is the course online or in-person?",
    answer: "The course is ONLINE.",
  },
  {
    question:
      "If I am not in Portugal, how will the time difference be handled?",
    answer:
      "After registration, our customer support team will contact you directly to arrange a suitable class schedule.",
  },
  {
    question: "What languages are used in teaching?",
    answer: "English and Portuguese.",
  },
  {
    question: "How long does it take to complete the A2 course?",
    answer: `We offer three options:\n\n• Intensive Course: 30 days, 5 hours of study per day\n• Intermediate Course: 75 days, 2 hours of study per day\n• Regular Course: 120 days, 1 hour of study per day`,
  },
  {
    question:
      "How long does it take to receive the A2 certificate after completing the course?",
    answer:
      "Within 2 weeks, we will send a scanned copy to your registered email, and the original certificate will be mailed to a designated address in Portugal.",
  },
];

// export default function Faq() {
//   return (
//     <section className="container mx-auto py-20">
//       <div className="space-y-4">
//         <details className="group [&_summary::-webkit-details-marker]:hidden">
//           <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
//             <h2 className="font-medium">
//               Lorem ipsum dolor sit amet consectetur adipisicing?
//             </h2>

//             <svg
//               className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </summary>

//           <p className="mt-4 px-4 leading-relaxed text-gray-700">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
//             veritatis molestias culpa in, recusandae laboriosam neque aliquid
//             libero nesciunt voluptate dicta quo officiis explicabo consequuntur
//             distinctio corporis earum similique!
//           </p>
//         </details>

//         <details className="group [&_summary::-webkit-details-marker]:hidden">
//           <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
//             <h2 className="font-medium">
//               Lorem ipsum dolor sit amet consectetur adipisicing?
//             </h2>

//             <svg
//               className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </summary>

//           <p className="mt-4 px-4 leading-relaxed text-gray-700">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
//             veritatis molestias culpa in, recusandae laboriosam neque aliquid
//             libero nesciunt voluptate dicta quo officiis explicabo consequuntur
//             distinctio corporis earum similique!
//           </p>
//         </details>
//       </div>
//     </section>
//   );
// }
