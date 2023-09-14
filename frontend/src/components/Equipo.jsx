import React, { useState, useEffect } from "react";
import imgCircle1 from "../assets/img/imgCircle1.png";
import imgCircle2 from "../assets/img/imgCircle2.png";
import imgCircle3 from "../assets/img/imgCircle3.png";
import imgCircle4 from "../assets/img/imgCircle4.png";
import imgCircle5 from "../assets/img/imgCircle5.png";
import imgCircle6 from "../assets/img/imgCircle6.png";
import imgCircle7 from "../assets/img/imgCircle7.png";
import imgCircle8 from "../assets/img/imgCircle8.png";
import EquipoCard from "./EquipoCard";
import Carousel from "react-grid-carousel";

const Equipo = () => {
  const [showDots, setShowDots] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth <= 1200);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const equipo = [
    {
      nombre: "Nombre del integrante",
      rol: "Rol desempeñado",
      img: imgCircle1,
    },
    {
      nombre: "Nombre del integrante",
      rol: "Rol desempeñado",
      img: imgCircle2,
    },
    {
      nombre: "Nombre del integrante",
      rol: "Rol desempeñado",
      img: imgCircle3,
    },
    {
      nombre: "Nombre del integrante",
      rol: "Rol desempeñado",
      img: imgCircle4,
    },
    {
      nombre: "Nombre del integrante",
      rol: "Rol desempeñado",
      img: imgCircle5,
    },
    {
      nombre: "Nombre del integrante",
      rol: "Rol desempeñado",
      img: imgCircle6,
    },
    {
      nombre: "Nombre del integrante",
      rol: "Rol desempeñado",
      img: imgCircle7,
    },
    {
      nombre: "Nombre del integrante",
      rol: "Rol desempeñado",
      img: imgCircle8,
    },
  ];

  return (
    <div className="container section" id="equipo">
      <div className="row d-flex justify-content-center">
        <div className="col-auto title">Equipo Docente</div>
      </div>
      <div className="row justify-content-center">
        {showDots ? (
          <Carousel
            cols={4}
            gap={11}
            loop
            showDots={showDots}
            hideArrow
            responsiveLayout={[
              {
                breakpoint: 1200,
                cols: 3,
                rows: 2,
              },
              {
                breakpoint: 990,
                cols: 2,
                rows: 2,
              },
            ]}
            mobileBreakpoint={0}
          >
            {equipo.map((docente, index) => (
              <Carousel.Item key={index}>
                <EquipoCard
                  img={docente.img}
                  nombre={docente.nombre}
                  rol={docente.rol}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          // Si showDots es falso, muestra las tarjetas sin el carrusel
          equipo.map((docente, index) => (
            <div key={index} className="col-md-3 mb-4">
              <EquipoCard
                img={docente.img}
                nombre={docente.nombre}
                rol={docente.rol}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Equipo;
