/* import dependencies*/
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*import components*/
import Navbar from "./components/navbar/navbar"
import Footer from "./components/footer/footer"
import WhatsAppButton  from "./components/whatsAppButton/whatsAppButton"

/*import pages*/
import Home from "./pages/home/home"
import ReservaHoras from "./pages/reservaHoras/reservaHoras"
import Nosotros from "./pages/nosotros/nosotros"
import Contacto from "./pages/contacto/contacto"
import Psicologos from "./pages/psicologos/psicologos"
import ConfirmarCita from "./pages/confirmarCita/confirmarCita";
import NotFound from "./pages/notFound/notFound"
 

/* import context*/
import { CitasProvider } from "./context/CitasContext";
import { PsicologosProvider } from "./context/PsicologosContext";
import { ContactProvider } from "./context/ContactoContext";
function App() {

  return (
    <BrowserRouter>
      <CitasProvider>
        <ContactProvider>
          <PsicologosProvider>
            <Navbar />
            <WhatsAppButton />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/reservarHora" element={<ReservaHoras />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/psicologos" element={<Psicologos />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/confirmarHora/:cid" element={<ConfirmarCita />} />

            </Routes>
            <Footer />
          </PsicologosProvider>
        </ContactProvider>
      </CitasProvider>
    </BrowserRouter>
  )
}

export default App
