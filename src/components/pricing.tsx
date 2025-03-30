"use client";
import Aos from "aos";
import { useEffect, useState } from "react";

const plans = [
  {
    name: "Essential",
    price: 35,
    features: [
      "Unlimited placeholder texts",
      "Consectetur adipiscing elit",
      "Excepteur sint occaecat cupidatat",
      "Officia deserunt mollit anim",
    ],
  },
  {
    name: "Perform",
    price: 55,
    features: [
      "Unlimited placeholder texts",
      "Consectetur adipiscing elit",
      "Excepteur sint occaecat cupidatat",
      "Officia deserunt mollit anim",
      "Predefined chunks as necessary",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 85,
    features: [
      "Unlimited placeholder texts",
      "Consectetur adipiscing elit",
      "Excepteur sint occaecat cupidatat",
      "Officia deserunt mollit anim",
      "Predefined chunks as necessary",
      "Duis aute irure dolor in reprehenderit",
    ],
  },
];

export default function PricingTable() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="courses"
      className="container mx-auto relative z-0"
      data-aos="fade-up"
    >
      <div className="relative font-inter antialiased min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden p-10">
        <div className="w-full max-w-6xl mx-auto ">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Choose Your{" "}
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Plan
            </span>{" "}
          </h2>
          <div className="grid gap-6 lg:grid-cols-3 items-start max-w-sm mx-auto lg:max-w-none">
            {plans.map((plan, index) => (
              <div key={index} className="h-full">
                <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow">
                  {plan.popular && (
                    <div className="absolute top-0 right-0 mr-6 -mt-4">
                      <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="mb-5">
                    <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">
                      {plan.name}
                    </div>
                    <div className="inline-flex items-baseline mb-2">
                      <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">
                        $
                      </span>
                      <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">
                        {plan.price}
                      </span>
                      <span className="text-slate-500 font-medium">/mo</span>
                    </div>
                    <div className="text-sm text-slate-500 mb-5">
                      Get the best features with our {plan.name} plan.
                    </div>
                    <a
                      className="w-full inline-flex justify-center rounded-lg px-3.5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors duration-150"
                      href="#0"
                      style={{
                        background:
                          "linear-gradient(to right, rgb(232,88,55), rgb(234,70,102))",
                      }}
                    >
                      Purchase Plan
                    </a>
                  </div>
                  <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">
                    Includes:
                  </div>
                  <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <svg
                          className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";
// import { useState } from "react";

// const plans = [
//   {
//     name: "Essential",
//     priceMonthly: 35,
//     priceYearly: 29,
//     features: [
//       "Unlimited placeholder texts",
//       "Consectetur adipiscing elit",
//       "Excepteur sint occaecat cupidatat",
//       "Officia deserunt mollit anim",
//     ],
//   },
//   {
//     name: "Perform",
//     priceMonthly: 55,
//     priceYearly: 49,
//     features: [
//       "Unlimited placeholder texts",
//       "Consectetur adipiscing elit",
//       "Excepteur sint occaecat cupidatat",
//       "Officia deserunt mollit anim",
//       "Predefined chunks as necessary",
//     ],
//     popular: true,
//   },
//   {
//     name: "Enterprise",
//     priceMonthly: 85,
//     priceYearly: 79,
//     features: [
//       "Unlimited placeholder texts",
//       "Consectetur adipiscing elit",
//       "Excepteur sint occaecat cupidatat",
//       "Officia deserunt mollit anim",
//       "Predefined chunks as necessary",
//       "Duis aute irure dolor in reprehenderit",
//     ],
//   },
// ];

// export default function PricingTable() {
//   const [isAnnual, setIsAnnual] = useState(true);

//   return (
//     <section className="container mx-auto relative z-0">
//       <div className="relative font-inter antialiased min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden p-10">
//         <div className="w-full max-w-6xl mx-auto">
//           <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
//             <div className="relative flex w-full p-1 bg-white dark:bg-slate-900 rounded-full">
//               <span
//                 className={`absolute inset-0 m-1 w-1/2 bg-indigo-500 rounded-full shadow-sm transition-transform duration-150 ease-in-out ${
//                   isAnnual ? "translate-x-0" : "translate-x-full"
//                 }`}
//               ></span>
//               <button
//                 className={`relative flex-1 text-sm font-medium h-8 rounded-full transition-colors duration-150 ${
//                   isAnnual ? "text-white" : "text-slate-500 dark:text-slate-400"
//                 }`}
//                 onClick={() => setIsAnnual(true)}
//               >
//                 Yearly <span className="text-indigo-200">-20%</span>
//               </button>
//               <button
//                 className={`relative flex-1 text-sm font-medium h-8 rounded-full transition-colors duration-150 ${
//                   !isAnnual
//                     ? "text-white"
//                     : "text-slate-500 dark:text-slate-400"
//                 }`}
//                 onClick={() => setIsAnnual(false)}
//               >
//                 Monthly
//               </button>
//             </div>
//           </div>

//           <div className="grid gap-6 lg:grid-cols-3 items-start max-w-sm mx-auto lg:max-w-none">
//             {plans.map((plan, index) => (
//               <div key={index} className="h-full">
//                 <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow">
//                   {plan.popular && (
//                     <div className="absolute top-0 right-0 mr-6 -mt-4">
//                       <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm">
//                         Most Popular
//                       </div>
//                     </div>
//                   )}
//                   <div className="mb-5">
//                     <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">
//                       {plan.name}
//                     </div>
//                     <div className="inline-flex items-baseline mb-2">
//                       <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">
//                         $
//                       </span>
//                       <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">
//                         {isAnnual ? plan.priceYearly : plan.priceMonthly}
//                       </span>
//                       <span className="text-slate-500 font-medium">/mo</span>
//                     </div>
//                     <div className="text-sm text-slate-500 mb-5">
//                       There are many variations available, but the majority have
//                       suffered.
//                     </div>
//                     <a
//                       className="w-full inline-flex justify-center rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-600 transition-colors duration-150"
//                       href="#0"
//                     >
//                       Purchase Plan
//                     </a>
//                   </div>
//                   <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">
//                     Includes:
//                   </div>
//                   <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
//                     {plan.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center">
//                         <svg
//                           className="w-3 h-3 fill-emerald-500 mr-3 shrink-0"
//                           viewBox="0 0 12 12"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
//                         </svg>
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
