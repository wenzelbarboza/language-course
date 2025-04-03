"use client";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { useLanguage } from "@/context/LanguageContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

// Define the form schema with Zod
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const contactFormSchema = (t: any) =>
  z.object({
    name: z.string().min(1, { message: t("contact.validation.nameRequired") }),
    surname: z
      .string()
      .min(1, { message: t("contact.validation.surnameRequired") }),
    email: z.string().email({ message: t("contact.validation.emailInvalid") }),
    message: z.string().min(5, { message: t("contact.validation.messageMin") }),
  });

// Type for the form data
type ContactFormData = z.infer<ReturnType<typeof contactFormSchema>>;

export default function Contact() {
  const { t } = useLanguage();

  // Initialize react-hook-form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema(t)),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Send the POST request to the API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        reset(); // Reset form after successful submission
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
      console.error("Submit error:", error);
    }
  };

  return (
    <section
      id="contact"
      className="contact-section py-20 lg:py-40 relative z-10 sm:px-4 p-2 mb-10 sm:mb-60 lg:mb-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div
            className="lg:w-1/2 mb-10 lg:mb-0 text-white"
            data-aos="fade-right"
          >
            <h2 className="text-3xl font-medium mb-8">
              {t("contact.questions")}
            </h2>
            <p className=" mb-8 font-extralight">{t("contact.reachOut")}</p>
            <div className="flex items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6  mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg> */}
              {/* <span className="font-semibold">{t("contact.enquiry")} </span>
              <a href="tel:010-020-0340" className=" hover:underline ml-2">
                {t("contact.phone")}
              </a> */}
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-12 w-full" data-aos="fade-left">
            <form
              className="bg-white lg:p-14 md:p-8 p-4 rounded-3xl shadow-lg w-full max-w-none"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder={t("contact.name") || "姓名"}
                    className={`w-full px-4 py-2 rounded-3xl border focus:outline-none bg-customBlue-inp border-none ${
                      errors.name ? "border-red-500 border-2" : ""
                    }`}
                    {...register("name")}
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm mt-1 ml-2">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    placeholder={t("contact.surname") || "姓氏"}
                    className={`w-full px-4 py-2 rounded-3xl border focus:outline-none bg-customBlue-inp border-none ${
                      errors.surname ? "border-red-500 border-2" : ""
                    }`}
                    {...register("surname")}
                  />
                  {errors.surname && (
                    <span className="text-red-500 text-sm mt-1 ml-2">
                      {errors.surname.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <input
                  type="email"
                  placeholder={t("contact.email") || "电子邮箱"}
                  className={`w-full px-4 py-2 rounded-3xl border focus:outline-none bg-customBlue-inp border-none ${
                    errors.email ? "border-red-500 border-2" : ""
                  }`}
                  {...register("email")}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1 ml-2">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col mb-4">
                <textarea
                  placeholder={t("contact.message") || "留言内容"}
                  rows={4}
                  className={`w-full px-4 py-2 rounded-2xl border focus:outline-none bg-customBlue-inp border-none ${
                    errors.message ? "border-red-500 border-2" : ""
                  }`}
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1 ml-2">
                    {errors.message.message}
                  </span>
                )}
              </div>
              {isSubmitting && (
                <div className="text-center text-blue-700 mb-4">
                  {t("contact.submitting") || "正在提交您的留言..."}
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-customBlue-button text-white px-6 py-3 rounded-3xl hover:bg-customOrange transition duration-300"
                disabled={isSubmitting}
              >
                {t("header.messageUs")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
