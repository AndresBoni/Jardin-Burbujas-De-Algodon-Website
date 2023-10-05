import React from "react";
import "./styles/Testimonios.css";

const TestimoniosCard = ({ img, review, author }) => {
  return (
    <div className="col d-flex flex-column h-100">
      <div className="col d-flex flex-column flex-lg-row align-items-center card-testimonios">
        <div className="col-4">
          <img src={img} alt="imagen testimonio" className="w-100 mb-4" />
        </div>
        <div className="col d-flex flex-column mx-2 px-2 gap-4 justify-content-between">
          <span>{review}</span>
          <span className="purple d-block text-end">{author}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimoniosCard;