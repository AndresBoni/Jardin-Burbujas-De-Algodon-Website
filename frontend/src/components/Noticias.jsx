import React from "react";
import noticias1 from "../assets/img/noticias1.png";
import noticias2 from "../assets/img/noticias2.jpg";
import noticias3 from "../assets/img/noticias3.png";
import NoticiasCard from "./NoticiasCard";
import SliderNavigation from "./Slider";

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
        <SliderNavigation
          slides={noticias.map((noticia, index) => (
            <NoticiasCard
              key={index}
              title={noticia.title}
              img={noticia.img}
              text={noticia.text}
            />
          ))}
          swiperProps={{
            breakpoints: {
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            },
            id: "noticias",
          }}
        />
      </div>
    </div>
  );
};

export default Noticias;
