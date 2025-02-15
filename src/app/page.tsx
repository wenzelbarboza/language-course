import Banner from "@/components/Banner";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import PricingTable from "@/components/pricing";

export default function Home() {
  return (
    <main className="relative">
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      {/* <Pricing2 /> */}
      <PricingTable />
      <Contact />
    </main>
  );
}
