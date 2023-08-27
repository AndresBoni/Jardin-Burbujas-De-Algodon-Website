import React from "react";
import './styles/Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-transparent p-0">
        <div className="container d-flex">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              className="logo-img"
              width={'50px'}
              height={'50px'}
            />
            <span className="ms-2 logo-font" id="logo">
              <span>Burbujas</span>
              <span> de </span>
              <span>Algodón</span>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link p-4" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-4" href="#programas">
                  Programas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-4" href="#instalaciones">
                  Instalaciones
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-4" href="#equipo">
                  Equipo Docente
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-4" href="#noticias">
                  Noticias
                </a>
              </li>
              <li className="nav-item p-3">
                <button
                  type="button"
                  className="btn btn-outline-success rounded btn-whatsapp"
                >
                  <i className="bi bi-whatsapp "></i>
                  <span className="ps-2">11-12345678</span>  
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
