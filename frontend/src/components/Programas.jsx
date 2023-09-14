import React from "react";
import "./styles/Programas.css";
import imgRectangleTeal from "../assets/img/imgRectangleTeal.png";
import imgRectanglePink from "../assets/img/imgRectanglePink.png";
import imgRectangleYellow from "../assets/img/imgRectangleYellow.png";

const Programas = () => {
  return (
    <div className="container section" id="programas">
      <div className="row d-flex justify-content-center">
        <div className="col-auto title text-center">Programas Educativos</div>
      </div>
      <div className="row d-flex">
        <div className="col-lg-4 d-flex flex-column justify-content-evenly ">
          <p>
            Nuestra institución se propone facilitar la maduración personal,
            emocional y social de cada alumno/a; desarrollar su pensamiento
            crítico y capacidad de utilizar tecnología para aprender de manera
            permanente; comunicarse de manera bilingüe a través de la producción
            e intercambio de mensajes orales y escritos; aplicar su pensamiento
            matemático en la solución de problemas de la vida cotidiana;
            explorar, conocer y apreciar el mundo natural y social; desarrollar
            su capacidad de expresión y apreciación artística; así como promover
            su desarrollo físico, salud y compromiso con el cuidado del medio
            ambiente, como base fundamental para su educación permanente.
          </p>
          <p>
            El horario de las actividades curriculares obligatorias del Jardín
            es de 8:30 a 12:45hs. La institución ofrece además servicios de
            comedor y talleres hasta las 15:30 hs., favoreciendo así a las
            familias con jornadas laborales extensas.
          </p>
        </div>
        <div className="col-lg-8 d-flex justify-content-evenly">
          <div className="col-3">
            <img src={imgRectangleTeal} className="img-fluid mb-2" alt="" />
            <b>Actividades Curriculares Obligatorias</b>
            <br />
            Matemáticas <br />
            Prácticas del lenguaje <br />
            Valores e inteligencia emocional<br />
            Inglés <br />
            Música <br />
            Educación física<br />
            <br />
          </div>
          <div className="col-3">
            <img src={imgRectanglePink} className="img-fluid mb-2" alt="" />
            <b>Actividades Extracurriculares</b>
            <br />
            Talleres culturales:<br />
            Plástica y arte <br />
            Cuentos y literatura<br />
            
          </div>
          <div className="col-3">
            <img src={imgRectangleYellow} className="img-fluid mb-2" alt="" />
            <br />
            Cocina y alimentación saludable<br />
            Robótica y/o Programación<br />
            Huerta<br />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programas;
