import React from "react";
import "./styles/Contacto.css";
import { handleChange, handleEmail } from "../scripts/send";

const Contacto = () => {
  const basePath = "/Jardin-Burbujas-De-Algodon-Website";
  return (
    <div className="container section" id="noticias">
      <div className="row d-flex justify-content-center">
        <div className="col-auto title">Contacto</div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-lg-8">
          <form className="d-flex flex-column gap-4">
            <input
              onChange={handleChange}
              type="name"
              className="form-control formulario"
              id="nameInput"
              placeholder="* Nombre y apellido"
            />
            <input
              onChange={handleChange}
              type="tel"
              className="form-control formulario"
              id="telInput"
              placeholder="Telefono"
            />
            <input
              onChange={handleChange}
              type="email"
              className="form-control formulario"
              id="emailInput"
              placeholder="* Email"
            />
            <textarea
              onChange={handleChange}
              name="comment"
              id="commentInput"
              className="form-control formulario"
              placeholder="* ¿Cómo te podemos ayudar?"
              rows={4}
            >
            </textarea>
            <button 
              className="form-control btn-enviar" onClick={handleEmail}>
              Enviar consulta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
