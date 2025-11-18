/*Import styles */
import './footer.css';

/*Import icons */
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footerContainer">
      <section className="footerSection">

        <article className="footerAbout">
          <img src="/logonicolae.jpg" alt="Logo Clinica" className="footerLogo" />
        </article>

        <article className="footerContact">
          <h3>Contáctanos</h3>
          <div className='footerContactItem'> <FaPhone /> <p>+56 9 2606 1550</p> </div>
          <div className='footerContactItem'> <MdEmail /> <p>ps.nicolaecarrasco@gmail.com</p> </div>
          <div className='footerContactItem'> <FaLocationDot /> <p>San Antonio, Chile</p> </div>
        </article>

        <article className="footerSocial">
          <h3>Sígueme</h3>
          <div className="footerSocialIcons">
            <a href="https://www.linkedin.com/in/nicolae-ignacio-carrasco-c-82200916a?utm_source=share_via&utm_content=profile&utm_medium=member_ios">  <FaLinkedin /> </a>
          </div>
        </article>

      </section>

      <aside className="footerBottom">
        <p>&copy; {new Date().getFullYear()} ps.nicolaecarrasco | Todos los derechos reservados</p>
      </aside>
    </footer>
  );
}

export default Footer;
