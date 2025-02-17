import Banner from "@/components/Banner";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import PricingTable from "@/components/pricing";
import Faq from "@/components/Faq";
import Why from "@/components/Why";
import Review from "@/components/Review";
import CardContainer from "@/components/CardContainer";

export default function Home() {
  return (
    <main className="relative">
      <Banner />
      <About />
      <Why />
      <Review />
      {/* <Services /> */}
      {/* <Portfolio /> */}
      {/* <Blog /> */}
      {/* <Pricing2 /> */}
      <PricingTable />
      <CardContainer />
      <Faq />
      <Contact />
    </main>
  );
}
