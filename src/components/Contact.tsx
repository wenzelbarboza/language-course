"use client";

import Aos from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { useLanguage } from "@/context/LanguageContext";
// import { is } from "drizzle-orm";

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
  });

  const { t } = useLanguage();

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [warnings, setWarnings] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    console.log(formData);
    console.log("clicked");

    if (isSubmitting) {
      return;
    }

    if (
      !formData.name ||
      !formData.surname ||
      !formData.email ||
      !formData.message
    ) {
      setWarnings(true);
      return;
    }

    if (warnings) {
      setWarnings(false);
    }

    setIsSubmitting(true);
    try {
      // Send the POST request to the API
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Data submitted successfully",
        });
        setFormData({
          name: "",
          surname: "",
          email: "",
          message: "",
        });
      } else {
        setSubmitStatus({ type: "error", message: "Error uploading data" });
      }
    } catch (error) {
      setSubmitStatus({ type: "error", message: "An error occurred" });
      console.error("Submit error:", error);
    } finally {
      setIsSubmitting(false);
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
          <div className="lg:w-1/2 lg:pl-12" data-aos="fade-left">
            <form className="bg-white lg:p-14 md:p-8 p-4 rounded-3xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 rounded-3xl border  focus:outline-none   bg-customBlue-inp border-none"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className="w-full px-4 py-2 rounded-3xl border  focus:outline-none   bg-customBlue-inp border-none"
                  required
                  value={formData.surname}
                  onChange={(e) =>
                    setFormData({ ...formData, surname: e.target.value })
                  }
                />
              </div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-3xl border  focus:outline-none   mb-4 bg-customBlue-inp border-none"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 rounded-2xl border  focus:outline-none focus:ring-4  mb-4 bg-customBlue-inp border-none"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
              {isSubmitting && (
                <div className="text-center text-blue-700">
                  submitting the data...
                </div>
              )}
              <button
                onClick={handleSubmit}
                className="w-full bg-customBlue-button text-white px-6 py-3 rounded-3xl hover:bg-customOrange transition duration-300"
                disabled={isSubmitting}
              >
                {t("header.messageUs")}
              </button>
              {submitStatus.type === "success" && (
                <div className="text-center text-green-700 mt-4">
                  {submitStatus.message}
                </div>
              )}
              {submitStatus.type === "error" && (
                <div className="text-center text-red-700 mt-4">
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
