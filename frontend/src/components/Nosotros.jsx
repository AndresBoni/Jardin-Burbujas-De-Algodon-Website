import React from "react";
import nosotros from "../assets/nosotros.png";
import brain from "../assets/brain.png";
import chat from "../assets/chat.png";
import health from "../assets/health.png";
const Nosotros = () => {
  return (
    <div className="container section d-flex flex-column flex-lg-row p-0 gap-4 justify-content-center">
      <div className="col-sm-12 col-lg d-flex justify-content-center align-items-center">
        <img src={nosotros} className="img-fluid my-4 py-4" alt="Imagen de nosotros" />
      </div>
      <div className="col-sm-12 col-lg order-first order-lg-last d-flex flex-grow gap-4 justify-content-center">
        <div className="col-11 d-flex flex-column gap-4">
          <div className="row d-flex title m-0">¿Quiénes somos?</div>
          <div className="row">
            Nuestra institución se propone facilitar la maduración personal,
            emocional y social de cada estudiante.
          </div>
          <div className="row gap-2 d-flex align-items-center">
            <div className="col-auto">
              <img src={brain} className="w-100" alt="Imagen de nosotros" />
            </div>
            <div className="col">
              Desarrollar su pensamiento crítico y capacidad de utilizar
              tecnología para aprender de manera permanente.
            </div>
          </div>
          <div className="row gap-2 d-flex align-items-center">
            <div className="col-auto">
              <img src={chat} className="w-100" alt="Imagen de nosotros" />
            </div>
            <div className="col">
              Comunicarse de manera bilingüe a través de la producción e
              intercambio de mensajes orales y escritos.
            </div>
          </div>
          <div className="row gap-2 d-flex align-items-center">
            <div className="col-auto">
              <img src={health} className="w-100" alt="Imagen de nosotros" />
            </div>
            <div className="col ">
              Promover su desarrollo físico, salud y compromiso con el cuidado
              del medio ambiente.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
