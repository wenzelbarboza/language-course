import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins, Merriweather } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type React from "react"; // Added import for React

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portuges A2",
  description: "Poruguese Language Learning Platform",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={merriweather.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
