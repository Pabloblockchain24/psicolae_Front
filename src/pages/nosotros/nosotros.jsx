/*Import styles*/
import './nosotros.css';

function Nosotros() {
  return (
    <main className="nosotrosContainer">
      <section className="nosotrosImageContainer">
        <img 
          src="../../nosotros.jpg" 
          alt="Imagen de nosotros" 
          className="nosotrosImage"
        />
      </section>
      <section className="nosotrosContentContainer">
        <h1 className="nosotrosTitle">SOBRE NOSOTROS </h1>
        <p className="nosotrosDescription">
          En nuestra clínica de salud mental, estamos comprometidos con brindar atención psicológica de calidad, accesible y completamente online. Nos especializamos en atender a pacientes de San Antonio, Chile, ofreciendo un espacio seguro y confidencial donde nuestros psicólogos están disponibles para ayudarte a superar cualquier desafío emocional o mental que enfrentes.
        </p>
        <h2 className="nosotrosSubtitle">Misión</h2>
        <p className="nosotrosDescription">
          Nuestra misión es acompañar a nuestros pacientes en su camino hacia el bienestar emocional, proporcionando herramientas y un enfoque terapéutico personalizado a través de consultas en línea. Nos dedicamos a promover la salud mental en nuestra comunidad, creando un ambiente de apoyo y confianza.
        </p>
        <h2 className="nosotrosSubtitle">¿Por qué Elegirnos?</h2>
        <ul className="nosotrosList">
          <li><strong>Profesionales Certificados:</strong> Psicólogos titulados con vasta experiencia en áreas de la psicología clínica adulta e infantojuvenil.</li>
          <li><strong>Atención Online:</strong> Servicio completamente digital, accesible desde cualquier lugar.</li>
          <li><strong>Confidencialidad y Seguridad:</strong> Protección de datos con altos estándares de seguridad.</li>
        </ul>
      </section>
    </main>
  );
}

export default Nosotros;
