import React from "react";
import "./styles/Header.css";
import imgNinios from "../assets/img-ninos.png";

const Header = () => {
  return (
    <div
      className="container-fluid header navbar-margin d-flex flex-column flex-lg-row justify-content-between p-0"
      id="header"
    >
        <div className="col-12 col-lg-6 d-flex flex-grow-1 align-items-center justify-content-center justify-content-lg-end p-4 p-lg-0">
          <div className="col-10 d-flex flex-column">
          <span className="text-brand">Playground</span>
          <span className="text-slogan">
            Donde los niños son nuestro futuro
          </span>
          <div className="row d-flex col-12 col-sm-10">
            <div className="text text-wrap p-3 ">
              ¡Bienvenidos a nuestro cálido y estimulante{" "}
              <b>Instituto Playground!</b>
              <br />
              Aquí, cada niño es una semilla lista para crecer y florecer en un
              ambiente educativo lleno de alegría y descubrimiento.
            </div>
          </div>
          <button className="btn btn-orange rounded-pill d-flex justify-content-center my-4">
            Contáctanos
          </button>
          </div>
        </div>
        <div className="col-12 col-lg-6 justify-content-center p-0">
          <img src={imgNinios} alt="Imagen niña" className="img-header " />
        </div>
      </div>
   
  );
};

export default Header;
