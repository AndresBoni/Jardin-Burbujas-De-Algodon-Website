import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const basePath = "/Jardin-Burbujas-De-Algodon-Website";

  return (
    <div className="container section" id="login">
      <div className="row d-flex justify-content-center ">
        <div className="col-auto title">Login</div>
      </div>
      <div className="row d-flex flex-column align-items-center justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="d-flex flex-column gap-4">
            <input
              type="email"
              className="form-control formulario"
              id="emailInput"
              placeholder="Email"
            />
            <input
              type="password"
              className="form-control formulario"
              id="passwordInput"
              placeholder="Contraseña"
            />
            <Link to={`${basePath}/dashboard`}>
              <button className="form-control btn-enviar">Ingresar</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
