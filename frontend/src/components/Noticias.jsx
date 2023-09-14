import React from "react";
import Carousel from "react-grid-carousel";

import "./styles/Carousel.css";
import noticias1 from "../assets/img/noticias1.png";
import noticias2 from "../assets/img/noticias2.jpg";
import noticias3 from "../assets/img/noticias3.png";
import NoticiasCard from "./NoticiasCard";

const Noticias = () => {
  const noticias = [
    {
      title:
        " Jardín de Infantes: Construyendo sonrisas y acompañando el crecimiento en Cada Paso.",
      img: noticias2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam necessitatibus aperiam dolor quisquam quaerat laborum officia, commodi reprehenderit quam minima voluptatum labore maiores possimus sed ipsa nam natus rerum in atque doloremque quas rem, reiciendis unde? Atque veniam quibusdam nemo eum necessitatibus explicabo? Modi animi maiores veritatis doloremque corrupti?",
    },
    {
      title:
        "¡Abiertas las Inscripciones! Únete a Nuestra Familia en el Jardín de Infantes",
      img: noticias1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam necessitatibus aperiam dolor quisquam quaerat laborum officia, commodi reprehenderit quam minima voluptatum labore maiores possimus sed ipsa nam natus rerum in atque doloremque quas rem, reiciendis unde? Atque veniam quibusdam nemo eum necessitatibus explicabo? Modi animi maiores veritatis doloremque corrupti?",
    },
    {
      title:
        "¡Prepárate para las Vacaciones Invernales! Diversión y aprendizaje continúan en...",
      img: noticias3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam necessitatibus aperiam dolor quisquam quaerat laborum officia, commodi reprehenderit quam minima voluptatum labore maiores possimus sed ipsa nam natus rerum in atque doloremque quas rem, reiciendis unde? Atque veniam quibusdam nemo eum necessitatibus explicabo? Modi animi maiores veritatis doloremque corrupti?",
    },
    {
      title:
        " Jardín de Infantes: Construyendo sonrisas y acompañando el crecimiento en Cada Paso.",
      img: noticias2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam necessitatibus aperiam dolor quisquam quaerat laborum officia, commodi reprehenderit quam minima voluptatum labore maiores possimus sed ipsa nam natus rerum in atque doloremque quas rem, reiciendis unde? Atque veniam quibusdam nemo eum necessitatibus explicabo? Modi animi maiores veritatis doloremque corrupti?",
    },
    {
      title:
        "¡Abiertas las Inscripciones! Únete a Nuestra Familia en el Jardín de Infantes",
      img: noticias1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam necessitatibus aperiam dolor quisquam quaerat laborum officia, commodi reprehenderit quam minima voluptatum labore maiores possimus sed ipsa nam natus rerum in atque doloremque quas rem, reiciendis unde? Atque veniam quibusdam nemo eum necessitatibus explicabo? Modi animi maiores veritatis doloremque corrupti?",
    },
    {
      title:
        "¡Prepárate para las Vacaciones Invernales! Diversión y aprendizaje continúan en...",
      img: noticias3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ullam necessitatibus aperiam dolor quisquam quaerat laborum officia, commodi reprehenderit quam minima voluptatum labore maiores possimus sed ipsa nam natus rerum in atque doloremque quas rem, reiciendis unde? Atque veniam quibusdam nemo eum necessitatibus explicabo? Modi animi maiores veritatis doloremque corrupti?",
    },
  ];

  return (
    <div className="container section" id="noticias">
      <div className="row d-flex justify-content-center">
        <div className="col-auto title">Noticias</div>
      </div>
      <div className="row d-flex align-items-center my-4">
        <Carousel
          cols={3}
          rows={1}
          gap={11}
          loop
          autoplay={6000}
          responsiveLayout={[
            {
              breakpoint: 1200,
              cols: 3,
            },
            {
              breakpoint: 990,
              cols: 2,
            },
          ]}
          mobileBreakpoint={670}
        >
          {noticias.map((noticia) => (
            <Carousel.Item>
              <NoticiasCard
                title={noticia.title}
                img={noticia.img}
                text={noticia.text}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Noticias;
