import React, {useState} from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../assets/logo.png";
import "./styles/Menu.css";
import { HashLink as Link } from "react-router-hash-link";

const Menu = () => {
  const basePath = "/Jardin-Burbujas-De-Algodon-Website";
  const [expanded, setExpanded] = useState(false); // Estado para el menú desplegable

  const closeMenu = () => {
    setExpanded(false); // Cierra el menú desplegable al hacer clic en un enlace
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="fixed-top menu"
    >
      <Container>
        <Navbar.Brand
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className="navbar-brand"
        >
          <img
            src={logo}
            alt="Logo"
            className="logo-img"
            width={"53px"}
            height={"52px"}
          />
          <span className="ms-3 logo-font" id="logo">
            Playground
          </span>
        </Navbar.Brand>
        <Nav className="align-items-center order-lg-last d-none d-xl-block">
          <Nav.Link href={`${basePath}/#contacto`}>
            <button
              type="button"
              className="btn btn-outline-success rounded-pill btn-whatsapp d-flex align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-whatsapp m-2"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>{" "}
              11-12345678
            </button>
          </Nav.Link>
        </Nav>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
          in={expanded}
        >
          <Nav className="ml-auto text-nowrap align-items-center">
            <Nav.Link
              as={Link}
              to={`${basePath}/`}
              onClick={() => {
                closeMenu(); // Cierra el menú al hacer clic en un enlace
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="p-4"
            >
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={`${basePath}/#programas`} className="p-4">
              Programas
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={`${basePath}/#instalaciones`}
              onClick={closeMenu}
              className="p-4"
            >
              Instalaciones
            </Nav.Link>
            <Nav.Link as={Link} to={`${basePath}/#equipo`} onClick={closeMenu} className="p-4">
              Equipo Docente
            </Nav.Link>
            <Nav.Link as={Link} to={`${basePath}/#noticias`} onClick={closeMenu} className="p-4">
              Noticias
            </Nav.Link>
          </Nav>
          <Nav className="align-items-center d-block d-md-none">
            <Nav.Link
              as={Link}
              to={`${basePath}/#contacto`}
              onClick={closeMenu}
              className="d-flex justify-content-center"
            >
              <button
                type="button"
                className="btn btn-outline-success rounded-pill btn-whatsapp d-flex align-items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  className="bi bi-whatsapp m-2"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>{" "}
                11-12345678
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
