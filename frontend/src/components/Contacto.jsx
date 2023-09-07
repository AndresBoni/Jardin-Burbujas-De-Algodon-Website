import React from "react";
import "./styles/Contacto.css";

const Contacto = () => {
  return (
    <div className="container section" id="noticias">
      <div className="row d-flex justify-content-center">
        <div className="col-auto title">Contacto</div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-lg-6">
          <form className="d-flex flex-column gap-4">
            <input
              type="name"
              className="form-control formulario"
              id="nameInput"
              placeholder="Nombre y apellido"
            />
            <input
              type="tel"
              className="form-control formulario"
              id="telInput"
              placeholder="Numero"
            />
            <input
              type="email"
              className="form-control formulario"
              id="emailInput"
              placeholder="email"
            />
            <textarea
              name="comment"
              id="commentInput"
              className="form-control formulario"
              placeholder="comentarios:"
              rows={4}
            >
            </textarea>
            <button 
              className="form-control btn-enviar">
              Enviar Consulta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
