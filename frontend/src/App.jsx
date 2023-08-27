import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Programas from './components/Programas'
import Instalaciones from './components/Instalaciones'
import Equipo from './components/Equipo'
import Testimonios from './components/Testimonios'
import Noticias from './components/Noticias'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Programas />
      <Instalaciones />
      <Equipo />
      <Testimonios />
      <Noticias />
      <Contacto />
      <Footer />
    </>
  )
}

export default App