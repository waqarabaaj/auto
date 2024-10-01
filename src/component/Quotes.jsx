import {React, useEffect} from 'react'
import QuoteHome from './Quotes/QuoteHome'
import GetQuoteForm from './Quotes/GetQuoteForm'
import { useLocation } from 'react-router-dom'

function Quotes() {
  const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Add smooth scrolling
        });
    }, [pathname]);
  return (
    <>
    <QuoteHome/>
    <GetQuoteForm/>
    </>
  )
}

export default Quotes