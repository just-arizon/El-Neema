import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import Landing from './components/landing';
import Info from './components/info';
import About from './components/AboutUs';
import Footer from './components/Footer';
import Donation from './components/Donation';
function App() {

  return (
    <>
    <Info />
    <Navbar />
    <Landing />
    <Donation />
    <About />
    <Footer />

    </>
  )
}

export default App
