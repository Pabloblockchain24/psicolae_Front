import React from 'react';
import PsicologosCard from '../../components/psicologosCard/psicologosCard';
import './psicologos.css'; // Archivo CSS para los estilos

const psicologos = [
  {
    nombre: 'Ps. Michelle Marchant',
    especialidad: 'Psicología Infanto Juvenil',
    descripcion: 'La profesional Michelle Marchant ha dedicado su carrera a trabajar con adolescentes que enfrentan problemas de identidad, presión social y dificultades emocionales propias de esta etapa de la vida. Con un enfoque comprensivo y de apoyo, Miguel ha ayudado a muchos jóvenes a mejorar su autoestima, gestionar sus emociones y prepararse para enfrentar los desafíos de la vida adulta. También trabaja en proyectos de prevención de conductas de riesgo en adolescentes y es colaborador activo en asociaciones juveniles de salud mental.',
    universidad: 'Universidad Santo Tomás',
    imagen: '/imgMichelle.jpg'
  },
  {
    nombre: 'Dra. Ana Martínez',
    especialidad: 'Psicología Infantil',
    descripcion: 'Con una profunda experiencia en el tratamiento de trastornos de conducta en niños y adolescentes, la Dra. Ana Martínez se especializa en trabajar con niños que presentan dificultades emocionales, problemas de conducta y trastornos del desarrollo. Su enfoque integrador y lúdico le permite conectarse con sus jóvenes pacientes de manera efectiva, ayudándoles a enfrentar sus desafíos con confianza. Además, es autora de varios artículos sobre el impacto de la tecnología en la salud mental infantil y colabora en programas educativos para la mejora del bienestar emocional en escuelas.',
    universidad: 'Pontificia Universidad Católica de Chile',
    imagen: '/imgIaMujer.jpg'
  },
  {
    nombre: 'Lic. Carla López',
    especialidad: 'Psicología Familiar',
    descripcion: 'La Lic. Carla López es una psicóloga comprometida con el bienestar familiar y se especializa en terapias que promuevan la sana convivencia entre los miembros de la familia. Con su experiencia en la resolución de conflictos familiares, trabaja con padres, hijos y parejas para desarrollar una comunicación efectiva y mejorar las dinámicas familiares. Carla también es consultora en programas de intervención familiar y ha dictado conferencias sobre el impacto de las dinámicas familiares en el desarrollo emocional de los niños.',
    universidad: 'Universidad de Valparaíso',
    imagen: '/imgIaMujer.jpg'
  },
  {
    nombre: 'Lic. Miguel Rodríguez',
    especialidad: 'Psicología Adolescente',
    descripcion: 'El Lic. Miguel Rodríguez ha dedicado su carrera a trabajar con adolescentes que enfrentan problemas de identidad, presión social y dificultades emocionales propias de esta etapa de la vida. Con un enfoque comprensivo y de apoyo, Miguel ha ayudado a muchos jóvenes a mejorar su autoestima, gestionar sus emociones y prepararse para enfrentar los desafíos de la vida adulta. También trabaja en proyectos de prevención de conductas de riesgo en adolescentes y es colaborador activo en asociaciones juveniles de salud mental.',
    universidad: 'Universidad de Concepción',
    imagen: '/imgIaHombre.jpg'
  },
  {
    nombre: 'Dra. Sofía González',
    especialidad: 'Psicología del Duelo',
    descripcion: 'La Dra. Sofía González es una reconocida especialista en el manejo del duelo y la pérdida. Su enfoque terapéutico está orientado a ayudar a las personas a transitar por los procesos de duelo de manera saludable, brindándoles herramientas para afrontar la pérdida y encontrar un nuevo equilibrio emocional. Con más de 15 años de experiencia, ha colaborado en centros de atención al duelo y ha participado en investigaciones sobre la resiliencia emocional tras la pérdida de seres queridos. También ofrece charlas sobre la importancia del cuidado emocional durante el duelo.',
    universidad: 'Universidad de Santiago de Chile',
    imagen: '/imgIaMujer.jpg'
  }
];

function Psicologos() {
  return (
    <div className="psicologosContainer">
      <h1 className="psicologosTitle">NUESTRO EQUIPO DE PROFESIONALES</h1>
      <div className="psicologosGrid">
        {psicologos.map((psicologo, index) => (
          <PsicologosCard 
            key={index}
            nombre={psicologo.nombre}
            especialidad={psicologo.especialidad}
            descripcion={psicologo.descripcion}
            universidad={psicologo.universidad}
            imagen={psicologo.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default Psicologos;
