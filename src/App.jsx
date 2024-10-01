import { Outlet } from "react-router-dom"
import Footer from "./component/Footer"
import Navbar from "./component/Header"

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
