import React from "react";
import "./styles/Testimonios.css";

const TestimoniosCard = ({ img, review, author }) => {
  console.log(img, review, author);
  return (
    <div className="col d-flex flex-column h-100">
      <div className="col d-flex flex-row card-testimonios">
        <div className="col-4 d-flex align-items-start">
          <img src={img} alt="imagen testimonio" className="w-100" />
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