import React from "react";
import "./styles/Header.css";
import imgNinios from "../assets/img-ninos.png";


const Header = () => {
  return (
    <div className="container-fluid header navbar-margin d-flex p-0" id="header">
  <div className="row p-0 m-0 d-flex justify-content-end ">
    <div className="col-12 col-lg-5 d-flex flex-column justify-content-center align-items-center align-items-lg-start gap-4 text-center text-lg-start">
      <span className="text-brand">Playground</span>
      <span className="text-slogan">Donde los niños son nuestro futuro</span>
      <div className="row d-flex col-12 col-sm-10 col-md-10 col-lg-12">
      <div className="text">
        ¡Bienvenidos a nuestro cálido y estimulante <b>Instituto Playground!</b><br />
        Aquí, cada niño es una semilla lista para crecer y florecer en un
        ambiente educativo lleno de alegría y descubrimiento.
      </div>
      </div>  
      <button className="btn btn-orange rounded-pill d-flex justify-content-center">Contáctanos</button>
    </div>
    <div className="col-12 col-lg-6 justify-content-center p-0">
      {/* Imagen */}
      <img src={imgNinios} alt="Imagen niña" className="img-header " />
    </div>
  </div>
</div>


  );
};

export default Header;
