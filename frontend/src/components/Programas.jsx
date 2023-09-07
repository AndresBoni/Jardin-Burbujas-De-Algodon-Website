import React from "react";
import "./styles/Programas.css";
import imgRectangleTeal from "../assets/img/imgRectangleTeal.png";
import imgRectanglePink from "../assets/img/imgRectanglePink.png";
import imgRectangleYellow from "../assets/img/imgRectangleYellow.png";

const Programas = () => {
  return (
    <div className="container section" id="programas">
      <div className="row d-flex justify-content-center">
        <div className="col-auto title">Programas Educativos</div>
      </div>
      <div class="row d-flex">
        <div class="col-md-3 d-flex flex-column justify-content-evenly ">
          <span className="encabezado-texto-programas text-center text-md-start">
            Mira nuestros Programas
          </span>
          <p className="texto-programas">
            ¡Bienvenidos a nuestro cálido y estimulante jardín de infantes!
            Aquí, cada niño es una semilla lista para crecer y florecer en un
            ambiente educativo lleno de alegría y descubrimiento.
          </p>
        </div>
        <div class="col-md-9 d-flex justify-content-evenly">
          <div className="col-3">
            <img src={imgRectangleTeal} className="img-fluid" alt="" />
          </div>
          <div className="col-3">
            <img src={imgRectanglePink} className="img-fluid" alt="" />
          </div>
          <div className="col-3">
            <img src={imgRectangleYellow} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programas;
