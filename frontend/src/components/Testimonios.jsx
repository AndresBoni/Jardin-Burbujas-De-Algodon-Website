import React from "react";
import imgTestimonio1 from "../assets/imgTestimonio1.png";
import imgTestimonio2 from "../assets/imgTestimonio2.png";
import TestimoniosCard from "./TestimoniosCard";
import SliderNavigation from "./Slider";

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
        <SliderNavigation
          slides={testimonios.map((testimonio, index) => (
            <TestimoniosCard
              key={index}
              img={testimonio.img}
              review={testimonio.review}
              author={testimonio.author}
            />
          ))}
          swiperProps={{
            breakpoints: {
              980: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1600: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            },
            id: "testimonios",
          }}
        />
      </div>
    </div>
  );
};

export default Testimonios;
