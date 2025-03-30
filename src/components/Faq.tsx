"use client";
import { useLanguage } from "@/context/LanguageContext";
import Aos from "aos";
import { useEffect } from "react";

export default function Faq() {
  const { t } = useLanguage();
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  // Create FAQ data array using translation keys
  const faqData = [
    {
      question: t("faq.question1"),
      answer: t("faq.answer1"),
    },
    {
      question: t("faq.question2"),
      answer: t("faq.answer2"),
    },
    {
      question: t("faq.question3"),
      answer: t("faq.answer3"),
    },
    {
      question: t("faq.question4"),
      answer: t("faq.answer4"),
    },
    {
      question: t("faq.question5"),
      answer: t("faq.answer5"),
    },
    {
      question: t("faq.question6"),
      answer: t("faq.answer6"),
    },
    {
      question: t("faq.question7"),
      answer: t("faq.answer7"),
    },
    {
      question: t("faq.question8"),
      answer: t("faq.answer8"),
    },
    {
      question: t("faq.question9"),
      answer: t("faq.answer9"),
    },
  ];

  return (
    <section className="container mx-auto py-20" data-aos="fade-down">
      <h1 className="text-3xl font-bold text-center mb-10">{t("faq.title")}</h1>
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
