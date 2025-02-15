// pages/index.js
// import Preloader from "../components/Preloader";
// import Header from "../components/Header";
// import Banner from "../components/Banner";
// import About from "../components/About";
// import Services from "../components/Services";
// import Portfolio from "../components/Portfolio";
// import Blog from "../components/Blog";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";
// import Head from "next/head";

import About from "@/components/About";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Portfolio from "@/components/Portfolio";
// import Preloader from "@/components/Preloader";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      {/* <Preloader /> */}
      <Header />
      <main>
        <Banner />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

// <Head>
//   <title>Space Dynamic - SEO HTML5 Template</title>
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   {/* Add any other meta tags or fonts */}
//   <link rel="preconnect" href="https://fonts.gstatic.com" />
//   <link
//     href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
//     rel="stylesheet"
//   />
// </Head>
