import React from "react";
import imgTestimonio1 from "../assets/imgTestimonio1.png";
import imgTestimonio2 from "../assets/imgTestimonio2.png";
import Carousel from "react-grid-carousel";
import TestimoniosCard from "./TestimoniosCard";
const Testimonios = () => {
  const testimonios = [
    {
      img: imgTestimonio1,
      review:
        "“No podríamos estar más felices con la experiencia de nuestro hijo en este maravilloso jardín de infantes. Desde el primer día, quedamos impresionados por el ambiente cálido y acogedor que se respira en cada rincón.”",
      author: "Clara Rodríguez - Mamá",
    },
    {
      img: imgTestimonio2,
      review:
        "“La experiencia de nuestro hijo en este jardín de infantes ha sido simplemente excepcional. Como padres, nos preocupaba encontrar un entorno donde nuestro hijo pudiera crecer y desarrollarse de manera saludable, y esta institución superó con creces nuestras expectativas.”",
      author: "Isabella García - Mamá",
    },
    {
      img: imgTestimonio1,
      review:
        "“No podríamos estar más felices con la experiencia de nuestro hijo en este maravilloso jardín de infantes. Desde el primer día, quedamos impresionados por el ambiente cálido y acogedor que se respira en cada rincón.”",
      author: "Clara Rodríguez - Mamá",
    },
    {
      img: imgTestimonio2,
      review:
        "“La experiencia de nuestro hijo en este jardín de infantes ha sido simplemente excepcional. Como padres, nos preocupaba encontrar un entorno donde nuestro hijo pudiera crecer y desarrollarse de manera saludable, y esta institución superó con creces nuestras expectativas.”",
      author: "Isabella García - Mamá",
    },
  ];

  return (
    <div className="container section" id="testimonios">
      <div className="row d-flex justify-content-center">
        <div className="col-auto title">Testimonios</div>
      </div>
      <div className="col my-4">
        <Carousel
          cols={2}
          rows={1}
          gap={11}
          loop
          autoplay={6000}
          responsiveLayout={[
            {
              breakpoint: 1200,
              cols: 2,
            },
            {
              breakpoint: 990,
              cols: 1,
            },
          ]}
          mobileBreakpoint={670}
        >
          {testimonios.map((testimonio) => (
            <Carousel.Item>
              <TestimoniosCard
                img={testimonio.img}
                review={testimonio.review}
                author={testimonio.author}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonios;
