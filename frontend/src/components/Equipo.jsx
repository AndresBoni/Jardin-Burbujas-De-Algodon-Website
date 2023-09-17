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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";
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
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Grid, Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              }
              
            }}
          >
            {equipo.map((docente, index) => (
              <SwiperSlide key={index}>
                <EquipoCard
                  img={docente.img}
                  nombre={docente.nombre}
                  rol={docente.rol}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
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
