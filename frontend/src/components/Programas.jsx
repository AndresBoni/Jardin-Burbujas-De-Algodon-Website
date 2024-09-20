import React from "react";
import "./styles/Programas.css";
import actividadesCurriculares from "../assets/actividadesCurriculares.png";
import actividadesExtracurriculares from "../assets/actividadesExtracurriculares.png";
import talleresOptativos from "../assets/talleresOptativos.png";

const Programas = () => {
  return (
    <div className="container section" id="programs">
      <div className="row d-flex justify-content-center">
        <div className="col-auto title text-center">Programs</div>
      </div>
      <div className="row d-flex gap-4 px-2">
        <div
          className="col-12 col-lg d-flex flex-column p-4 gap-3 card-programas justify-content-center"
          id="curriculares"
        >
          <div className="row px-4 p-2">
            <div className="col-auto icon-programas-div">
              <img
                src={actividadesCurriculares}
                className="icon-programas"
                alt=""
              />
            </div>
          </div>
          <div className="row px-4 px-2">Curricular Activities</div>
          <div className="row px-4 px-2">
            We offer essential or mandatory activities: Mathematics, Language
            Practice, Values and Emotional Intelligence, English, Music, and
            Physical Education.
          </div>
        </div>
        <div
          className="col-12 col-lg d-flex flex-column card-programas p-4 gap-2"
          id="extracurriculares"
        >
          <div className="row px-4 p-2">
            <div className="col-auto icon-programas-div">
              <img
                src={actividadesExtracurriculares}
                className="icon-programas"
                alt=""
              />
            </div>
          </div>
          <div className="row px-4 p-2">Extracurricular Activities</div>
          <div className="row px-4 p-2">
            We have Cultural Workshops! We offer cultural activities such as:
            Arts and Crafts, Storytelling and Theater.
          </div>
        </div>
        <div
          className="col-12 col-lg d-flex flex-column card-programas  p-4 gap-2 "
          id="opcionales"
        >
          <div className="row px-4 p-2">
            <div className="col-auto icon-programas-div">
              <img src={talleresOptativos} className="icon-programas" alt="" />
            </div>
          </div>
          <div className="row px-4 p-2">After-Hours Workshops</div>
          <div className="row px-4 p-2">
            Discover the activities we have prepared: Healthy Cooking, Robotics
            and/or Programming, and Gardening.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programas;
