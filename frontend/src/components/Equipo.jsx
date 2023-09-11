import React from "react";
import imgCircle1 from "../assets/img/imgCircle1.png";
import imgCircle2 from "../assets/img/imgCircle2.png";
import imgCircle3 from "../assets/img/imgCircle3.png";
import imgCircle4 from "../assets/img/imgCircle4.png";
import imgCircle5 from "../assets/img/imgCircle5.png";
import imgCircle6 from "../assets/img/imgCircle6.png";
import imgCircle7 from "../assets/img/imgCircle7.png";
import imgCircle8 from "../assets/img/imgCircle8.png";

const Equipo = () => {
  return (
    <div className="container section" id="equipo">
      <div className="row d-flex justify-content-center">
        <div className="col-auto title">Equipo Docente</div>
      </div>
      <div className="row row-cols-2 row-cols-md-4 text-center">
        <div className="col d-flex flex-column p-4">
          <img
            src={imgCircle1}
            className="img-fluid rounded-circle p-4"
            alt="imagen nuestros docentes"
          />
          <span>Nombre del integrante</span>
          <span>Rol desempeñado</span>
        </div>
        <div className="col d-flex flex-column p-4">
          <img
            src={imgCircle2}
            className="img-fluid rounded-circle p-4"
            alt="imagen nuestros docentes"
          />
          <span>Nombre del integrante</span>
          <span>Rol desempeñado</span>
        </div>
        <div className="col d-flex flex-column p-4">
          <img
            src={imgCircle3}
            className="img-fluid rounded-circle p-4"
            alt="imagen nuestros docentes"
          />
          <span>Nombre del integrante</span>
          <span>Rol desempeñado</span>
        </div>
        <div className="col d-flex flex-column p-4">
          <img
            src={imgCircle4}
            className="img-fluid rounded-circle p-4"
            alt="imagen nuestros docentes"
          />
          <span>Nombre del integrante</span>
          <span>Rol desempeñado</span>
        </div>
        <div className="col d-flex flex-column p-4 d-none d-md-block">
          <img
            src={imgCircle5}
            className="img-fluid rounded-circle p-4 d-none d-md-block"
            alt="imagen nuestros docentes"
          />
          <span>Nombre del integrante</span>
          <span>Rol desempeñado</span>
        </div>
        <div className="col d-flex flex-column p-4 d-none d-md-block">
          <img
            src={imgCircle6}
            className="img-fluid rounded-circle p-4 d-none d-md-block"
            alt="imagen nuestros docentes"
          />
          <span>Nombre del integrante</span>
          <span>Rol desempeñado</span>
        </div>
        <div className="col d-flex flex-column p-4 d-none d-md-block">
          <img
            src={imgCircle7}
            className="img-fluid rounded-circle p-4 d-none d-md-block"
            alt="imagen nuestros docentes"
          />
          <span>Nombre del integrante</span>
          <span>Rol desempeñado</span>
        </div>
        <div className="col d-flex flex-column p-4 d-none d-md-block">
          <img
            src={imgCircle8}
            className="img-fluid rounded-circle p-4 d-none d-md-block"
            alt="imagen nuestros docentes"
          />
          <span>Nombre del integrante</span>
          <span>Rol desempeñado</span>
        </div>
      </div>
    </div>
  );
};

export default Equipo;
