import React from "react";
import "./styles/Instalaciones.css";
import foto1 from "../assets/img/frame 10.jpg";
import foto2 from "../assets/img/frame 11.jpg";
import foto3 from "../assets/img/frame 12.jpg";
import foto4 from "../assets/img/frame 13.jpg";
import foto5 from "../assets/img/frame 14.jpg";
import foto6 from "../assets/img/frame 15.jpg";

const Instalaciones = () => {
  return (
    <>
      <div className="container" id="instalaciones">
        <div className="row d-flex justify-content-center">
          <div className="col-auto title">Instalaciones</div>
        </div>
        {/* PARRAFO */}
        <div class="row">
          <div class="col align-self-center">
            <p>
              Te mostramos fotografías de las aulas, áreas de juego y otros
              espacios recreativos para que puedan disfrutar aprendiendo al
              máximo
            </p>
          </div>
        </div>
      </div>

      {/* CARD DE IMAGENES */}

      <div className="container py-4 img-fluid">
        <div className="row">
          <div className="d-flex">
            <div className="mx-3">
              <img src={foto1} className="mx-3 my-5 img-fluid" alt="" />
            </div>
            <div className="mx-3">
              <img src={foto2} className="mx-3 my-5 img-fluid" alt="" />
            </div>
            <div className="mx-3">
              <img src={foto3} className="mx-3 my-5 img-fluid" alt="" />
            </div>
            <div className="mx-3">
              <img src={foto4} className="mx-3 my-5 img-fluid" alt="" />
            </div>
            <div className="mx-3">
              <img src={foto5} className="mx-3 my-5 img-fluid" alt="" />
            </div>
            <div className="mx-3">
              <img src={foto6} className="mx-3 my-5 img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instalaciones;
