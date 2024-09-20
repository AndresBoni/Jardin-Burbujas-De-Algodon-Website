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
        <div className="col-10 col-auto d-flex align-items-center flex-column gap-3">
          <span className="text-brand">Playground</span>
          <span className="text-slogan text-center -text-lg-start">
            Nurturing today, shaping a brighter future for tomorrow
          </span>
          <div className="row d-flex col-12 col-lg-10 col-xl-8 text-xl-center">
            <div className="text text-wrap">
              Welcome to our lovely Preschool, where we provide warmth and
              quality education, supporting each child&apos;s learning journey
              at their own pace.
            </div>
          </div>
          <button className="btn btn-orange rounded-pill d-flex justify-content-center my-4">
            Contact us
          </button>
        </div>
      </div>
      <div className="d-flex col-12 col-lg-6 justify-content-center align-items-end p-0 img-container">
        <img src={imgNinios} alt="Imagen niña" className="img-header " />
      </div>
    </div>
  );
};

export default Header;
