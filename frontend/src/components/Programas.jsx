import React from "react";
import "./styles/Programas.css";
import actividadesCurriculares from '../assets/actividadesCurriculares.png'
import actividadesExtracurriculares from '../assets/actividadesExtracurriculares.png'
import talleresOptativos from '../assets/talleresOptativos.png'

const Programas = () => {
  return (
    <div className="container section" id="programas">
      <div className="row d-flex justify-content-center">
        <div className="col-auto title text-center">Programas Educativos</div>
      </div>
      <div className="row d-flex gap-4 px-2">
        <div
          className="col-12 col-lg d-flex flex-column p-4 gap-3 card-programas justify-content-center"
          id="curriculares"
        >
          <div className="row px-4 p-2">
          <div className="col-auto icon-programas-div"><img src={actividadesCurriculares} className="icon-programas" alt="" /></div>
          </div>
          <div className="row px-4 px-2">Actividades Curriculares </div>
          <div className="row px-4 px-2">
            Disponemos de actividades esenciales u obligatorias: Matemáticas,
            Prácticas del lenguaje, Valores e inteligencia emocional, Inglés,
            Música, Educación física.
          </div>
        </div>
        <div
          className="col-12 col-lg d-flex flex-column card-programas p-4 gap-2"
          id="extracurriculares"
        >
          <div className="row px-4 p-2">
          <div className="col-auto icon-programas-div"><img src={actividadesExtracurriculares} className="icon-programas" alt="" /></div>
          </div>
          <div className="row px-4 p-2">Actividades Extracurriculares</div>
          <div className="row px-4 p-2">
            ¡Habemus Talleres Culturales! Te presentamos nuestra área cultural
            con actividades como: Plástica y arte, Cuentos y literatura, Teatro,
          </div>
        </div>
        <div
          className="col-12 col-lg d-flex flex-column card-programas  p-4 gap-2 "
          id="opcionales"
        >
          <div className="row px-4 p-2">
            <div className="col-auto icon-programas-div"><img src={talleresOptativos} className="icon-programas" alt="" /></div>
          </div>
          <div className="row px-4 p-2">Talleres optativos</div>
          <div className="row px-4 p-2">
            Conocé las actividades que tenemos preparadas: Cocina y alimentación
            saludable, Robótica y/o Programación, Huerta.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programas;
