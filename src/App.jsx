import { FaFacebook, FaInstagram, FaInstagramSquare, FaPhoneAlt } from 'react-icons/fa';
import './App.css'
import Nav from "./Component/Nav.jsx";
import Hero from "./Component/Home.jsx";
import About from "./Component/About.jsx";
import Services from "./Component/Services.jsx";
import Portfolio from "./Component/Portfolio.jsx";
import Choose from "./Component/Whyus.jsx";
import Testimonials from "./Component/Testimonials.jsx";
import Team from "./Component/Team.jsx";
import Contact from "./Component/Contact.jsx";
import Footer from "./Component/Footer.jsx";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from 'react-icons/md';
import { HiBuildingOffice } from 'react-icons/hi2';
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Choose />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default App




