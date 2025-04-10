import "./globals.css";
import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type React from "react"; // Added import for React
import { LanguageProvider } from "@/context/LanguageContext";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Portuguese A2",
  description: "Poruguese Language Learning Platform",
  generator: "v0.dev",
  icons: {
    icon: "fav_ic.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={merriweather.className}>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

import "./globals.css";
