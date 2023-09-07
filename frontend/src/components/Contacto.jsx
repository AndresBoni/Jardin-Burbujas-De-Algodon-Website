import React from 'react'
import "./styles/Contacto.css"

const Contacto = () => {
  return (


    <>
   
   <div className='container section mt-5' id='Noticias'>
      <div className='row d-flex justify-content-center'>
        <div className='tittle-shape4'>
          <div className='tittle d-flex text-nowrap'>
            Contacto
          </div>
        </div>
      </div>
    </div>
  



    {/* formulario */}
   
          <div className="container">
            <form className="row g-3  ">
                        
                        <div className='col-6 '>
                          <input type="name" className='form-control formulario' id='nameInput' placeholder='Nombre y apellido' />
                        </div>

                        
                        <div className="col-6 ">
                            <input type="number" className='form-control formulario' id='numberInput' placeholder='Numero'/>
                        </div>


                        <div className="col-12">
                          <input type="email" className='form-control formulario' id='emailInput'  placeholder='email' />
                        </div>


                        
                        <div className='col-12'>
                          <textarea name="comentId" id="Comentarios" className='form-control formulario' placeholder='comentarios:'>sfa</textarea>
                        </div>

                        <div className="col-12">
                          <button className='form-control formulario-enviar'>Enviar Consulta</button>
                        </div>

            </form>
          </div>














    


    {/* formulario */}

    
    







   </>

  )
}

export default Contacto;
