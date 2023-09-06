import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from '../assets/logo.png'
import './styles/Menu.css'

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="fixed-top menu">
      <Container >
        <Navbar.Brand onClick={()=> window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
          <img
                src={logo}
                alt="Logo"
                className="logo-img"
                width={'53px'}
                height={'52px'}
              />
          <span className="ms-3 logo-font" id="logo">
              <span>Burbujas</span>
              <span> de </span>
              <span>algodón</span>
            </span>
        </Navbar.Brand>
        <Nav className="align-items-center order-lg-last d-none d-xl-block">
            <Nav.Link href="#contacto">
            <button
                  type="button"
                  className="btn btn-outline-success rounded-pill btn-whatsapp"
                >
                  <i className="bi bi-whatsapp text-nowrap"> 11-12345678</i> 
                </button> 
            </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto text-nowrap align-items-center">
            <Nav.Link className="p-4"  onClick={()=> window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>Home</Nav.Link>
            <Nav.Link href="#programas" className="p-4">Programas</Nav.Link>
            <Nav.Link href="#instalaciones" className="p-4">Instalaciones</Nav.Link>
            <Nav.Link href="#equipo" className="p-4">Equipo Docente</Nav.Link>
            <Nav.Link href="#noticias" className="p-4">Noticias</Nav.Link>
          </Nav>
          <Nav className="align-items-center d-block d-md-none">
            <Nav.Link href="#contacto" className="d-flex justify-content-center">
            <button
                  type="button"
                  className="btn btn-outline-success rounded-pill btn-whatsapp "
                >
                  <i className="bi bi-whatsapp text-nowrap"> 11-12345678</i> 
                </button> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
