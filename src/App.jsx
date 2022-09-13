import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Work from './Pages/Work'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" >
            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="skills" element={<Skills />}/>
            <Route path="work" element={<Work />}/>
            <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App