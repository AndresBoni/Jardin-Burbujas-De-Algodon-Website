import React from "react";
import "./styles/Header.css";

const Header = () => {
  return (
    <div className="container-fluid header navbar-margin" id="header">
      <div className="container-header container d-flex gap-2">
        <div className="col-6 d-flex flex-column justify-content-center ps-1 gap-2">
          <span className="text-brand">Playground</span>
          <span className="text-slogan">Donde los niños son nuestro futuro</span>
          <div className="text">
            ¡Bienvenidos a nuestro cálido y estimulante <b>Instituto Playground!</b><br />
            Aquí, cada niño es una semilla lista para crecer y florecer en un
            ambiente educativo lleno de alegría y descubrimiento.
          </div>
          <button className="btn btn-orange rounded-pill d-flex justify-content-center">Contáctanos</button>
        </div>
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default Header;
