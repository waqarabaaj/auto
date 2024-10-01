import {React, useEffect} from 'react'
import ContactHome from './Contact/ContactHome'
import ContactForm from './Contact/ContactForm'
import { useLocation } from 'react-router-dom'

function ContactPage() {
  const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Add smooth scrolling
        });
    }, [pathname]);
  return (
    <>
    <ContactHome/>
    <ContactForm/>
    </>
  )
}

export default ContactPage