import React from 'react'
import "./styles/Footer.css"
import mapa from "../assets/img/mapa.jpg"
import logo1 from "../assets/img/logofooter.jpg"
import logoprincipal from "../assets/logo.png"
import iconinsta from "../assets/img/iconinsta.png"
import iconface from "../assets/img/iconface.png"



const Footer = () => {
  return (
    <div className='container-fluid bg-primary text-center Footer'>
      <div className="container mt-5 ">
        <div className='row'>

                   
                   <div className='col-lg-4 col-md-8 col-sm-12 mt-3 col-xs-12'>
                     <img src={mapa} alt="mapa" className='mapa  w-100' />                    
                    <div className="row justify-content-center ">
                                
                                <div className='col-6 align-item-center  '>
                                  <img src={logoprincipal} alt="" className='logofooter ' />
                                </div>


                                <div className='col-6  '>
                                  <p className='letrafooter'>© 2023 Burbujas de algodón</p>
                                </div>





                    </div>
                   </div>




                   <div className='col-lg-4  col-md-8  col-xs-12 mt-3'>
                    <h1 className='fuente-footer'>Acercate a nuestro instituto</h1>

                    <p >direccion Calle falsa 123</p>

                    <p>Horarios de atencin: 9:00 a 18:00</p>

                    <p></p>
                   </div>

                    




                   <div className='col-lg-4 col-md-8 mt-4 col-xs-12'>
                    <p>¿Queres conocernos mas?</p>

                       <div className="row justify-content-center">

                              <a href=""></a><img src={iconinsta} alt="" className='icon' />
                              <img src={iconface} alt="" className='icon' />

                       </div>



                    
                   </div>










        </div>
      </div>
    </div>
  )
}

export default Footer