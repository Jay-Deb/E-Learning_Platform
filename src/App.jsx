import React from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Menu from './components/Menu'
import Home from './components/Home'
import About from './components/About'
import Courses from './components/Courses'
import Contest from './components/Contest'
import Admission from './components/Admission'
import ContactUs from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/About' element={<About />}></Route>
            <Route exact path='/Courses' element={<Courses />}></Route>
            <Route exact path='/Contest' element={<Contest />}></Route>
            <Route exact path='/Admission' element={<Admission />}></Route>
            <Route exact path='/Contact' element={<ContactUs />}></Route>
            <Route exact path='/' element={<Footer />}></Route>
          </Routes>
        </Router>
    </>
  )
}


export default App