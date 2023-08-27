import React from 'react'
import './styles/Header.css'
import imgJirafa from '../assets/hero_Img.png'

const Header = () => {
  return (
    <div className='container-fluid p-0 navbar-margin header flex-grow-1' id='header'>
      <div className="container d-flex flex-column flex-grow-1">
        <div className="row d-flex">
          <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
            <span className='text-header-1 py-2'>Educación y crecimiento: donde los niños son nuestro futuro</span>
            <span className='text-header-2 py-2'>&lt;&lt;Burbujas de algodón&gt;&gt;</span>
            <span className='text-header-3 py-2'>¡Bienvenidos a nuestro cálido y estimulante jardín de infantes! Aquí, cada niño es una semilla lista para crecer y florecer en un ambiente educativo lleno de alegría y descubrimiento.</span>
            <a href='#contacto' className='d-flex align-self-center'>
              <button type="button" class="btn btn-outline-success rounded mt-4 ">Contáctanos</button>
            </a>
          </div>
          <div className="col-12 col-md-8">
            <img src={imgJirafa} alt="Imagen Jirafa" class="img-fluid" />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Header