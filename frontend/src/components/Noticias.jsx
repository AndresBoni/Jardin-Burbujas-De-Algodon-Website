import React from 'react'
import "./styles/Noticias.css"
import noticias1 from "../assets/img/noticias1.png"
import noticias2 from "../assets/img/noticias2.jpg"
import noticias3 from "../assets/img/noticias3.png"




const Noticias = () => {
  return (
    
  <>
  
  {/* titulo fondo */}

  <div className='container section mt-5' id='Noticias'>
      <div className='row d-flex justify-content-center'>
        <div className='tittle-shape3'>
          <div className='tittle d-flex text-nowrap'>
            Noticias
          </div>
        </div>
      </div>

    </div>
   


   
   {/* CARD DE NOTICIAS */}

   <div className='container'>

     <div className='row'>
                  
              <div className='card  col-lg-6 ' >
               <img src={noticias1} alt="" />
               <div className='card-body'>
                <h4>jardin de infantes:</h4>
                <p className='card-text'>Construeno sonrisas y acomàñando el crecimiento a cada paso</p>
               </div>
               </div>   


               <div className='card  col-lg-6 ' >
               <img src={noticias2} alt="" />
               <div className='card-body'>
                <h4>¡Abierto las inscripciones:</h4>
                <p className='card-text'> Unete a Nuestra Familia en el jardin de infantes</p>
               </div>
               </div>   



               <div className='card  col-lg-6 ' >
               <img src={noticias3} alt="" />
               <div className='card-body'>
                <h4>Prpárate para las vacaciones invernales!</h4>
                <p className='card-text'>Diversion y aprendisaje continúan en...</p>
               </div>
               </div>   







     </div>


   </div>

   

  
  
  
  
  
  
  </>





  )
}

export default Noticias