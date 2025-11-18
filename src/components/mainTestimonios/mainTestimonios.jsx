import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import './mainTestimonios.css';


function MainTestimonios() {
const testimonios = [
  {
    nombre: "Andrea R.",
    testimonio: "La claridad y empatía de Nicolae fueron claves para mi proceso. Me ayudó a entender mis emociones y a desarrollar estrategias efectivas. Un apoyo fundamental.",
    imagen: "/userTestimonio.jpg"
  },
  {
    nombre: "Felipe V.",
    testimonio: "Nicolae me ofreció un espacio seguro y sin juicios. Pude abordar mis ansiedades con su guía experta. El enfoque fue muy profesional y humano a la vez.",
    imagen: "/userTestimonio.jpg"
  },
  {
    nombre: "Sofía G.",
    testimonio: "Gracias a la asesoría de Nicolae, he notado una mejora significativa en mi bienestar emocional. Sus herramientas y perspectivas me cambiaron la vida. Lo recomiendo 100%.",
    imagen: "/userTestimonio.jpg"
  },
  {
    nombre: "Gabriel C.",
    testimonio: "Necesitaba ayuda para manejar el estrés laboral y Nicolae fue excepcional. Sus sesiones online fueron muy cómodas y me brindaron la paz mental que buscaba.",
    imagen: "/userTestimonio.jpg"
  },
  {
    nombre: "Elena M.",
    testimonio: "Después de probar varios enfoques, la metodología de Nicolae fue la que realmente resonó conmigo. Es un profesional muy dedicado y perceptivo. Me siento mucho más fuerte emocionalmente.",
    imagen: "/userTestimonio.jpg"
  },
  {
    nombre: "Ricardo P.",
    testimonio: "Es mi primera experiencia con asesoría de salud mental y estoy muy satisfecho. Nicolae hizo que la terapia fuera accesible y me dio las herramientas para seguir creciendo.",
    imagen: "/userTestimonio.jpg"
  }
];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="testimoniosSection">
      <h2 className="testimoniosTitle">Opiniones</h2>
  
      <Slider {...settings} className="testimonioSlider">
        {testimonios.map((testimonio, index) => (
          <div key={index}> 
            <div className="testimonioCard">
              <img src={testimonio.imagen} alt={testimonio.nombre} className="testimonioImagen" />
              <p className="testimonioTexto">"{testimonio.testimonio}"</p>
              <h3 className="testimonioNombre">- {testimonio.nombre}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default MainTestimonios;
