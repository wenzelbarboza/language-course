import Banner from "@/components/Banner";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Why from "@/components/Why";
import Review from "@/components/Review";
import CardContainer from "@/components/CardContainer";
import LearningPlans from "@/components/LearningPlans";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Banner />
      <About />
      <Why />
      <CardContainer />
      <Review />
      <LearningPlans />
      {/* <EnrollNow /> */}
      {/* <PricingTable /> */}
      <Faq />
      <Contact />
      <Toaster />
    </main>
  );
}
