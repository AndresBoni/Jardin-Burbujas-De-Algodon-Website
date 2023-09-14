import React, { useState } from "react";
import "./styles/Noticias.css";
import Modal from "react-bootstrap/Modal";

const NoticiasCard = ({ img, title, text }) => {
    const [showModalNoticias, setShowModalNoticias] = useState(false);
  
    return (
        <>
        <div className="card-noticia" onClick={() => setShowModalNoticias(true)}>
        <img src={img} alt={title} className="w-100" />
        <span className="d-flex justify-self-center">{title}</span>
      </div>
        <Modal
          show={showModalNoticias}
          onHide={() => setShowModalNoticias(false)}
          dialogClassName="modal-100w"
          aria-labelledby="noticias-modal"
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="noticias-modal">{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex flex-column">
              <img src={img} className="img-fluid mb-4" alt={title} />
              {text}
            </div>
          </Modal.Body>
        </Modal>
        </>
      

    );
  };
  
export default NoticiasCard;
