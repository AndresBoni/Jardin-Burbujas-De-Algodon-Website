import React from 'react'
import "./styles/Programas.css"
import rectangleazul from '../assets/img/Rectangle 7.jpg'
import rectangleverde from '../assets/img/Rectangle 9.jpg'
import rectanglerosa from '../assets/img/Rectangle 8.jpg'



const Programas = () => {
  return (
  
  <>
   
   <div className='container section' id='Programas'>
      <div className='row d-flex justify-content-center'>
        <div className='tittle-shape1'>
          <div className='tittle d-flex text-nowrap'>
            Programas
          </div>
        </div>
      </div>

    </div>




     
     
    
    <div class="row centrado mt-5 ms-5">
    <div class="col-md-4 texto-fuente ">

    <h2>Mira nuestros Programas</h2>
    <p>¡Bienvenidos a nuestro cálido y estimulante jardín de infantes! Aquí, cada niño es una semilla lista para crecer y florecer en un ambiente educativo lleno de alegría y descubrimiento.</p>




    </div>
    <div class="col-md-4 offset-md-4 imagenes-colores">
       

      <div className='separacion-imagen tamaño-imagen'>
                           <img src={rectangleverde} className='rounded float-start x ms-4 ' alt="" />
                           <img src={rectangleazul} className='rounded float-start x ms-4' alt="" />
                           <img src={rectanglerosa} className='rounded float-start x ms-4' alt="" />
      </div>
      
      
      
      
    

      </div>
    </div>












    
    

    </>
  )
}

export default Programas