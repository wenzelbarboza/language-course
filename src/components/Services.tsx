import Image from "next/image";

export default function Services() {
  const skills = [
    { name: "Website Analysis", percentage: 84 },
    { name: "SEO Reports", percentage: 88 },
    { name: "Page Optimizations", percentage: 94 },
  ];

  return <section id="services" className="py-20 bg-gray-50"></section>;
}
