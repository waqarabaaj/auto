import {React, useEffect} from "react";
import HomeSection from "./Home/HomeSection";
import AboutSection from "./Home/AboutSection";
import WhyChooseUs from "./Home/WhyChooseUs";
import FAQ from "./Home/FAQ";
import { useLocation } from "react-router-dom";

function HomePage() {
  const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Add smooth scrolling
        });
    }, [pathname]);

  return (
    <>
      <HomeSection />
      <AboutSection />
      <WhyChooseUs />
      <FAQ />
    </>
  );
}

export default HomePage;
