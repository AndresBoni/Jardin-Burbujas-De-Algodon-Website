import React from "react";
import nosotros from "../assets/nosotros.png";
import brain from "../assets/brain.png";
import chat from "../assets/chat.png";
import health from "../assets/health.png";
const Nosotros = () => {
  return (
    <div
      className="container section d-flex flex-column flex-lg-row p-0 gap-4 justify-content-center"
      id="team"
    >
      <div className="col-sm-12 col-lg d-flex justify-content-center align-items-center">
        <img
          src={nosotros}
          className="img-fluid my-4 py-4"
          alt="Imagen de nosotros"
        />
      </div>
      <div className="col-sm-12 col-lg order-first order-lg-last d-flex flex-grow gap-4 justify-content-center">
        <div className="col-11 d-flex flex-column gap-4">
          <div className="row d-flex title m-0">About Playground</div>
          <div className="row">
            Our centre offers a holistic approach to education and care,
            fostering the academic, emotional, and social development of each
            student.
          </div>
          <div className="row gap-2 d-flex align-items-center">
            <div className="col-auto">
              <img src={brain} className="w-100" />
            </div>
            <div className="col">
              Fostering critical thinking and the ability to use technology for
              lifelong learning.
            </div>
          </div>
          <div className="row gap-2 d-flex align-items-center">
            <div className="col-auto">
              <img src={chat} className="w-100" />
            </div>
            <div className="col">
              Promoting bilingual communication through engaging activities and
              meaningful contexts.
            </div>
          </div>
          <div className="row gap-2 d-flex align-items-center">
            <div className="col-auto">
              <img src={health} className="w-100" />
            </div>
            <div className="col ">
              Encouraging physical development through the promotion of healthy
              habits and a commitment to environmental stewardship.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
