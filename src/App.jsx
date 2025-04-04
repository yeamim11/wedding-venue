import React from 'react'
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './component/Pages/Hero'
import Location from './component/Pages/Location'
import Services from './component/Pages/Services'
import Portfolio from './component/Pages/Portfolio'
import Contact from './component/Pages/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Location/>
      <Services/>
      <Portfolio/>
      <Contact/>
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