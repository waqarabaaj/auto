import {React, useEffect} from 'react'
import AboutHome from './About/AboutHome'
import WhyChooseUs from './Home/WhyChooseUs'
import AwardsSection from './About/AwardsSection'
import OperationalSection from './About/OperationalSection'
import HowCarInsuranceWorks from './About/HowCarInsuranceWorks'
import { useLocation } from 'react-router-dom'

function AboutPage() {
  const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Add smooth scrolling
        });
    }, [pathname]);
  return (
    <>
    <AboutHome/>
    <WhyChooseUs />
    <AwardsSection/>
    <OperationalSection/>
    <HowCarInsuranceWorks/>
    </>
    
  )
}

export default AboutPage