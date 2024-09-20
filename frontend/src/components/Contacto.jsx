import React from "react";
import "./styles/Contacto.css";

const Contacto = () => {
  const basePath = "/Jardin-Burbujas-De-Algodon-Website";
  return (
    <div className="container section" id="contact">
      <div className="row d-flex justify-content-center">
        <div className="col-auto title">Contact us</div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-lg-8">
          <form className="d-flex flex-column gap-4">
            <input
              type="name"
              className="form-control formulario"
              id="nameInput"
              placeholder="* Name and family name"
            />
            <input
              type="tel"
              className="form-control formulario"
              id="telInput"
              placeholder="Phone number"
            />
            <input
              type="email"
              className="form-control formulario"
              id="emailInput"
              placeholder="* Email"
            />
            <textarea
              name="comment"
              id="commentInput"
              className="form-control formulario"
              placeholder="* What can we do for you?"
              rows={4}
            ></textarea>
            <button className="form-control btn-enviar">Send inquiry</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
