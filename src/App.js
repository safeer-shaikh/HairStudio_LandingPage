import React from 'react'
import Header from './Components/Header/Header'
import Feature from './Components/Features/Features'
import Services from './Components/Services/Services'
import Testimonial from './Components/Testimonial/Testimonial'
import Footer from './Components/Footer/Footer'
import './Assets/fontawesome-pro-5.15.1-web/css/all.css'
export default function App() {
  return (
    <div>
      <Header />
      <Feature />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  )
}