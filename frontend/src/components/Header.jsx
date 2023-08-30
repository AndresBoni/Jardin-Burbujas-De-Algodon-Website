import React from 'react'
import './styles/Header.css'
import imgJirafa from '../assets/hero_Img.png'

const Header = () => {
  return (
    <div className='container-fluid p-0 navbar-margin header d-flex flex-column flex-grow-1' id='header'>
      <div className="container d-flex flex-column flex-grow-1 p-0">
        <div className="row d-flex flex-grow-1 ps-4">
          <div className="col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center pb-4 pt-4 gap-3 mb-4">
            <span className='text-header-1 pb-2'>Educación y crecimiento: donde los niños son nuestro futuro</span>
            <span className='text-header-2 py-2'>&lt;&lt;Burbujas de algodón&gt;&gt;</span>
            <span className='text-header-3 pt-2'>¡Bienvenidos a nuestro cálido y estimulante jardín de infantes! Aquí, cada niño es una semilla lista para crecer y florecer en un ambiente educativo lleno de alegría y descubrimiento.</span>
            <a href='#contacto' className='d-flex pb-4 mb-4'>
              <button type="button" class="btn btn-outline-secondary rounded-pill mt-4 px-4 py-2 ">Contáctanos</button>
            </a>
          </div>  
          <div className="col-12 col-md-6 col-lg-8 d-flex flex-column justify-content-center pb-4">
            <img src={imgJirafa} alt="Imagen Jirafa" className="img-fluid" />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Header