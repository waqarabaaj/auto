import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './component/HomePage.jsx'
import AboutPage from './component/AboutPage.jsx'
import ContactPage from './component/ContactPage.jsx'
import Quotes from './component/Quotes.jsx'
import TermsAndConditions from './component/TermsAndConditions.jsx'
import PrivacyPolicy from './component/PrivacyPolicy.jsx'
import Partners from './component/Parters.jsx'
import ResponsePage from './component/Response.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'insurance',
        element: <Quotes/>
      },
      {
        path: 'contact',
        element: <ContactPage/>

      },
      {
        path: '/terms',
        element: <TermsAndConditions />
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy />
      },
      {
        path: '/partners',
        element: <Partners />
      },
      {
        path: '/response',
        element: <ResponsePage />

      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
