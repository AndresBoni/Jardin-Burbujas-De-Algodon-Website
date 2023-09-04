import React from 'react'
import "./styles/Equipo.css"
import circulo1 from "../assets/img/circulo1.png"
import circulo2 from "../assets/img/circulo2.png"
import circulo3 from "../assets/img/circulo3.jpg"
import circulo4 from "../assets/img/circulo4.png"
import circulo5 from "../assets/img/circulo5.jpg"
import circulo6 from "../assets/img/circulo6.jpg"
import circulo7 from "../assets/img/circulo7.jpg"


const Equipo = () => {
  return (
    
    
    
    <>
    {/* titulo con fondo */}
    
    <div className='container section mt-5' id='Equipo'>
      <div className='row d-flex justify-content-center'>
        <div className='tittle-shape2'>
          <div className='tittle d-flex text-nowrap'>
            Equipo
          </div>
        </div>
      </div>
    </div>

    {/* card de profesores */}

   <div className='container'>
       
    <div className='row'>

       div

       <div className='card border-0 col-lg-6 ' >
      <img src={circulo1} alt="" />
      <p className='text-center'>profesor</p>
      </div>   
    

      <div className='card border-0 col-lg-6' >
      <img src={circulo2} alt="" />
      <p className='text-center'>profesor</p>
      </div> 


     <div className='card border-0 col-lg-6' >
      <img src={circulo3} alt="" />
      <p className='text-center'>profesor</p>
      </div>   
       
      <div className='card border-0 col-lg-6' >
      <img src={circulo4} alt="" />
      <p className='text-center'>profesor</p>
      </div>   

       
     </div>

     <div className='row'>


     <div className='card border-0 col-lg-6' >
      <img src={circulo5} alt="" />
      <p className='text-center'>profesor</p>
      </div>   
    
      <div className='card border-0 col-lg-6' >
      <img src={circulo6} alt="" />
      <p className='text-center'>profesor</p>
      </div>   
    
      <div className='card border-0 col-lg-6' >
      <img src={circulo7} alt="" />
      <p className='text-center'>profesor</p>
      </div>   
    
      <div className='card border-0 col-lg-6' >
      <img src={circulo7} alt="" />
      <p className='text-center'>profesor</p>
      </div>   


     




     </div>




   </div>
   
    
      

  </>



  )
}

export default Equipo