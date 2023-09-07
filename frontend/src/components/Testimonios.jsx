import React from "react";
import "./styles/Testimonios.css";
import imgTestimonio1 from "../assets/imgTestimonio1.png";
import imgTestimonio2 from "../assets/imgTestimonio2.png";

const Testimonios = () => {
  return (
    <div className="container section" id="testimonios">
      <div className="row d-flex justify-content-center">
        <div className="col-auto title">Testimonios</div>
      </div>
      <div className="row d-flex justify-content-evenly align-items-center my-4">
        <div className="col-auto order-2 order-md-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="106"
            height="114"
            viewBox="0 0 106 114"
            fill="none"
          >
            <path
              d="M61.8333 33.25L39.75 57L61.8333 80.75"
              stroke="#F8911E"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="col-12 col-md-6 col-lg-8 d-flex justify-content-center align-items-strench order-1">
          <div className="col col-md-12 col-lg-6 d-flex flex-row mx-md-4 card-testimonios">
            <div className="col-4 d-flex align-items-start">
              <img
                src={imgTestimonio1}
                alt="imagen testimonio"
                className="w-100"
              />
            </div>
            <div className="col d-flex flex-column mx-2 px-2 gap-4 justify-content-between">
              <span>
                “No podríamos estar más felices con la experiencia de nuestro
                hijo en este maravilloso jardín de infantes. <br />
                <br />
                Desde el primer día, quedamos impresionados por el ambiente
                cálido y acogedor que se respira en cada rincón.”
              </span>
              <span className="purple d-block text-end">
                Clara Rodríguez - Mamá
              </span>
            </div>
          </div>

          <div className="d-none d-lg-flex col-lg-6 flex-column card-testimonios">
            <div className="d-flex">
              <div className="col-4 d-flex align-items-start">
                <img
                  src={imgTestimonio2}
                  alt="imagen testimonio"
                  className="w-100"
                />
              </div>
              <div className="col d-flex flex-column mx-2 px-2 gap-4 justify-content-between">
                <span>
                  “La experiencia de nuestro hijo en este jardín de infantes ha
                  sido simplemente excepcional. <br />
                  <br />
                  Como padres, nos preocupaba encontrar un entorno donde nuestro
                  hijo pudiera crecer y desarrollarse de manera saludable, y
                  esta institución superó con creces nuestras expectativas.”
                </span>
                <span className="purple d-block text-end">
                  Isabella García - Mamá
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-auto order-3 order-md-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="106"
            height="114"
            viewBox="0 0 106 114"
            fill="none"
          >
            <path
              d="M44.1667 80.75L66.25 57L44.1667 33.25"
              stroke="#F8911E"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
