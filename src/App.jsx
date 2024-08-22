import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import Landing from './components/landing';
import Info from './components/info';

function App() {

  return (
    <>
    <Info />
    <Navbar />
    <Landing />
    </>
  )
}

export default App
