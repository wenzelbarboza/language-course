import Banner from "@/components/Banner";
import About from "@/components/About";
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
      <CardContainer />
      <Review />
      <PricingTable />
      <Faq />
      <Contact />
    </main>
  );
}
