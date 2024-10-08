import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./styles/Instalaciones.css";
import foto1 from "../assets/img/imgInstalaciones1.png";
import foto2 from "../assets/img/imgInstalaciones2.png";
import foto3 from "../assets/img/imgInstalaciones3.png";
import foto4 from "../assets/img/imgInstalaciones4.png";
import foto5 from "../assets/img/imgInstalaciones5.png";
import foto6 from "../assets/img/imgInstalaciones6.png";
import foto7 from "../assets/img/imgInstalaciones7.png";
import foto8 from "../assets/img/imgInstalaciones8.png";
import foto9 from "../assets/img/imgInstalaciones9.png";
import foto10 from "../assets/img/imgInstalaciones10.png";
import foto11 from "../assets/img/imgInstalaciones11.png";
import foto12 from "../assets/img/imgInstalaciones12.png";

const Instalaciones = () => {
  const [showModalInstalaciones, setShowModalInstalaciones] = useState(false);
  const [selectedPhotoSrc, setSelectedPhotoSrc] = useState("");

  const handlePhotoClick = (src) => {
    setSelectedPhotoSrc(src);
    setShowModalInstalaciones(true);
  };

  return (
    <div className="container section" id="centre">
      <div className="row d-flex justify-content-center">
        <div className="col-auto title">Our Centre</div>
      </div>
      <div className="row">
        <div className="col text-center">
          Explore the various spaces in our Preschool, equipped with materials
          specifically designed for the motor, psychological, and emotional
          development of each child.
        </div>
      </div>
      <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6">
        <div className="image-container">
          <img
            src={foto1}
            className="img-fluid p-3"
            alt="imagen nuestras instalaciones"
            onClick={() => handlePhotoClick(foto1)}
          />
        </div>
        <div className="image-container">
          <img
            src={foto2}
            className="img-fluid p-3"
            alt="imagen nuestras instalaciones"
            onClick={() => handlePhotoClick(foto2)}
          />
        </div>
        <div className="image-container">
          <img
            src={foto3}
            className="img-fluid p-3"
            alt="imagen nuestras instalaciones"
            onClick={() => handlePhotoClick(foto3)}
          />
        </div>
        <div className="image-container">
          <img
            src={foto4}
            className="img-fluid imgInstalaciones p-3"
            alt="imagen nuestras instalaciones"
            onClick={() => handlePhotoClick(foto4)}
          />
        </div>
        <div className="image-container">
          <img
            src={foto5}
            className="img-fluid imgInstalaciones p-3 d-none d-md-block"
            alt="imagen nuestras instalaciones"
            onClick={() => handlePhotoClick(foto5)}
          />
        </div>
        <div className="image-container">
          <img
            src={foto6}
            className="img-fluid imgInstalaciones p-3 d-none d-md-block"
            alt="imagen nuestras instalaciones"
            onClick={() => handlePhotoClick(foto6)}
          />
        </div>
        <div className="image-container">
          <img
            src={foto7}
            className="img-fluid imgInstalaciones p-3 d-none d-md-block"
            alt="imagen nuestras instalaciones"
            onClick={() => handlePhotoClick(foto7)}
          />
        </div>
        <div className="image-container">
          <img
            src={foto8}
            className="img-fluid imgInstalaciones p-3 d-none d-md-block"
            alt="imagen nuestras instalaciones"
            onClick={() => handlePhotoClick(foto8)}
          />
        </div>
        <div className="image-container">
          <img
            src={foto9}
            className="img-fluid imgInstalaciones p-3 d-none d-md-block"
            alt="imagen nuestras instalaciones"
            onClick={() => handlePhotoClick(foto9)}
          />
        </div>
        <div className="image-container">
          <img
            src={foto10}
            className="img-fluid imgInstalaciones p-3 d-none d-md-block"
            alt="imagen nuestras instalaciones"
            onClick={() => handlePhotoClick(foto10)}
          />
        </div>
        <div className="image-container">
          <img
            src={foto11}
            className="img-fluid imgInstalaciones p-3 d-none d-md-block"
            alt="imagen nuestras instalaciones"
            onClick={() => handlePhotoClick(foto11)}
          />
        </div>
        <div className="image-container">
          <img
            src={foto12}
            className="img-fluid imgInstalaciones p-3 d-none d-md-block"
            alt="imagen nuestras instalaciones"
            onClick={() => handlePhotoClick(foto12)}
          />
        </div>
      </div>
      <Modal
        show={showModalInstalaciones}
        onHide={() => setShowModalInstalaciones(false)}
        dialogClassName="modal-90w"
        aria-labelledby="images-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="images-modal">Nuestras instalaciones</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedPhotoSrc} // Utiliza la fuente seleccionada aquí
            className="img-fluid "
            alt="imagen nuestras instalaciones"
            onClick={() => setShowModalInstalaciones(true)}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Instalaciones;
