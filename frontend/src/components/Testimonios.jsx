import React from 'react'
import './styles/Testimonios.css'
import imgTestimonio1 from '../assets/imgTestimonio1.png'
import imgTestimonio2 from '../assets/imgTestimonio2.png'

const Testimonios = () => {
  return (
    <div className='container my-4' id='testimonios'>
      <div className="row d-flex justify-content-center">
        <div className="title-shape my-4">
          <div className="title d-flex text-nowrap">
            Testimonios
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-evenly ">
          <div className="col-md-8 col-lg-4 d-flex card-testimonios justify-content-between">
              <img src={imgTestimonio1} alt="img testmonio" className='img-testimonios-flotante d-none d-md-block' />
              <img src={imgTestimonio1} alt="img testmonio" className='img-testimonios- d-block d-md-none w-25 align-self-center' />
              <span>“No podríamos estar más felices con la experiencia de nuestro hijo en este maravilloso jardín de infantes.<br /> <br />
                Desde el primer día, quedamos impresionados por el ambiente cálido y acogedor que se respira en cada rincón.”</span>
            <span className='text-success'>Clara Rodríguez - Mamá</span>
          </div>
          <div className="col-md-8 col-lg-4 d-flex card-testimonios justify-content-between">
              <img src={imgTestimonio2} alt="img testmonio" className='img-testimonios-flotante d-none d-md-block' />
              <img src={imgTestimonio2} alt="img testmonio" className='img-testimonios- d-block d-md-none w-25 align-self-center' />
              <span>“La experiencia de nuestro hijo en este jardín de infantes ha sido simplemente excepcional. 
                Como padres, nos preocupaba encontrar un entorno donde nuestro hijo pudiera crecer y desarrollarse de manera saludable, y esta institución superó con creces nuestras expectativas.”</span>
            <span className='text-success'>Isabella García - Mamá</span>
          </div>
      </div>
    </div>
  )
}

export default Testimonios