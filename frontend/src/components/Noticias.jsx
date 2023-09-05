import React from "react";
import './styles/Noticias.css'
import noticias1 from "../assets/img/noticias1.png";
import noticias2 from "../assets/img/noticias2.jpg";
import noticias3 from "../assets/img/noticias3.png";

const Noticias = () => {
  return (
    <div className="container mt-5" id="Noticias">
      <div className="row d-flex justify-content-center">
        <div className="col-auto title">
          Noticias
        </div>
      </div>
      <div className="row d-flex justify-content-evenly align-items-center my-4">
        <div className="col-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="106" height="114" viewBox="0 0 106 114" fill="none">
          <path d="M61.8333 33.25L39.75 57L61.8333 80.75" stroke="#F8911E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
        <div className="col d-flex justify-content-center align-items-strench p-4">
          <div className="col-12 col-md-6 col-lg-4 mx-md-4 card-noticia">
            <img src={noticias2} alt="imagen noticia 1" className="w-100" />
            <span className="d-flex justify-self-center">Jardín de Infantes: Construyendo sonrisas y acompañando el crecimiento en Cada Paso.</span>
          </div>
          <div className="d-none d-md-block col-md-6 col-lg-4 mx-md-4 card-noticia">
          <img src={noticias1} alt="imagen noticia 1" className="w-100" />
            <span className="d-flex justify-self-center">¡Abiertas las Inscripciones! Únete a Nuestra Familia en el Jardín de Infantes</span>  
          </div>
          <div className="d-none col-md-none d-lg-block col-lg-4 mx-md-4 card-noticia">
          <img src={noticias3} alt="imagen noticia 1" className="w-100" />
            <span className="d-flex justify-self-center">¡Prepárate para las Vacaciones Invernales! Diversión y aprendizaje continúan en...</span>  
          </div>
        </div>
        <div className="col-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="106" height="114" viewBox="0 0 106 114" fill="none">
          <path d="M44.1667 80.75L66.25 57L44.1667 33.25" stroke="#F8911E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
      </div>
    </div>
  );
};

export default Noticias;
