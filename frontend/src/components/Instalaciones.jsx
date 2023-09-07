import React from "react";
import "./styles/Instalaciones.css";
import foto1 from "../assets/img/imgInstalaciones1.png";
import foto2 from "../assets/img/imgInstalaciones2.png";
import foto3 from "../assets/img/imgInstalaciones3.png";
import foto4 from "../assets/img/imgInstalaciones4.png";
import foto5 from "../assets/img/imgInstalaciones5.png";
import foto6 from "../assets/img/imgInstalaciones6.png";
import foto7 from "../assets/img/imgInstalaciones7.png";
import foto8 from "../assets/img/imgInstalaciones8.png";
import foto9 from "../assets/img/imgInstalaciones9.png";
import foto10 from "../assets/img/imgInstalaciones10.png";
import foto11 from "../assets/img/imgInstalaciones11.png";
import foto12 from "../assets/img/imgInstalaciones12.png";

const Instalaciones = () => {
  return (
    <div className="container section" id="instalaciones">
      <div className="row d-flex justify-content-center">
        <div className="col-auto title">Instalaciones</div>
      </div>
      <div class="row">
        <div class="col text-center">
          Te mostramos fotografías de las aulas, áreas de juego y otros espacios
          recreativos para que puedan disfrutar aprendiendo al máximo
        </div>
      </div>
      <div className="row row-cols-2 row-cols-sm-4 row-cols-md-6">
        <img
          src={foto1}
          className="img-fluid p-3"
          alt="imagen nuestras instalaciones"
        />
        <img
          src={foto2}
          className="img-fluid p-3"
          alt="imagen nuestras instalaciones"
        />
        <img
          src={foto3}
          className="img-fluid p-3"
          alt="imagen nuestras instalaciones"
        />
        <img
          src={foto4}
          className="img-fluid p-3"
          alt="imagen nuestras instalaciones"
        />
        <img
          src={foto5}
          className="img-fluid p-3 d-none d-md-block"
          alt="imagen nuestras instalaciones"
        />
        <img
          src={foto6}
          className="img-fluid p-3 d-none d-md-block"
          alt="imagen nuestras instalaciones"
        />
        <img
          src={foto7}
          className="img-fluid p-3 d-none d-md-block"
          alt="imagen nuestras instalaciones"
        />
        <img
          src={foto8}
          className="img-fluid p-3 d-none d-md-block"
          alt="imagen nuestras instalaciones"
        />
        <img
          src={foto9}
          className="img-fluid p-3 d-none d-md-block"
          alt="imagen nuestras instalaciones"
        />
        <img
          src={foto10}
          className="img-fluid p-3 d-none d-md-block"
          alt="imagen nuestras instalaciones"
        />
        <img
          src={foto11}
          className="img-fluid p-3 d-none d-md-block"
          alt="imagen nuestras instalaciones"
        />
        <img
          src={foto12}
          className="img-fluid p-3 d-none d-md-block"
          alt="imagen nuestras instalaciones"
        />
      </div>
    </div>
  );
};

export default Instalaciones;
