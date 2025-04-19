import React, { useEffect } from 'react'
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './component/Pages/Hero'
import Location from './component/Pages/Location'
import Services from './component/Pages/Services'
import Portfolio from './component/Pages/Portfolio'
import Contact from './component/Pages/Contact'
import Slider from './component/Pages/Slider'
import Footer from './component/Footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'


const App = () => {
  
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  })

  return (
    <div>
      <Navbar />
      <Hero/>
      <Location/>
      <Slider/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App



 {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/" element={<Location/>} />
        </Routes>
      </BrowserRouter> */}