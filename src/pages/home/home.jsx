/*import dependencies*/
import { NavLink } from "react-router-dom"

/*import styles*/
import './home.css'
import { FaArrowDown } from "react-icons/fa";

/*Import components*/
import MainInfo from '../../components/mainInfo/mainInfo'
import MainTestimonios from '../../components/mainTestimonios/mainTestimonios'

function Home() {

  const scrollToInfo = () => {
    const infoSection = document.getElementById('info');
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <section className="hero-container">
        <div className="homeImage-container">
          <img src="/hero.png" alt="Imagen de bienvenida" className="homeImage" />
        </div>

        <div className="homeContainer">
          <div className="homeTextContainer">
            <h1 className="homeTitle">Asesoria en salud mental</h1>
            <p className="homeSubtitleQuestion"> ¿Sientes que la Terapia Tradicional no es para ti? Descubre un Enfoque Directo y Práctico. </p>
            <p className="homeSubtitle">
            En un mundo donde la "terapia" está de moda, es fácil sentirse confundido o abrumado. Si buscas resultados concretos y un camino claro sin rodeos, has llegado al lugar correcto.
            Soy Nicolae Carrasco, psicólogo clínico con 5 años de experiencia dedicado a la psicología clínica, y ofrezco Asesoría Psicológica—un modelo diseñado para la vida actual.</p>

            <NavLink to="/reservarHora" className="homeButtonReserva"> Reserva tu hora </NavLink>
          </div>
          {/* <button className="scrollDownButton" onClick={scrollToInfo}>
            <FaArrowDown className="scrollDownIcon" />
          </button> */}
        </div>
      </section>

      <MainInfo />
      <MainTestimonios />

    </main>
  )
}

export default Home