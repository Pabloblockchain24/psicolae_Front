/* Import dependencies */
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

/*Import styles*/
import './profesional.css';

/* Import components */
import ProfesionalCard from '../../../components/profesionalCard/profesionalCard';

/* Import icons */
import { IoMdArrowRoundBack } from "react-icons/io";
import MoonLoader from "react-spinners/MoonLoader";

/* Import context */
import { usePsicologos } from '../../../context/PsicologosContext';
import { useCitas } from '../../../context/CitasContext';

function Profesional() {
  const { rutUsuario, setProfesionalEscogido, currentStep, nextStep, prevStep, saveProfesional } = useCitas();
  const [profesionalSeleccionado, setProfesionalSeleccionado] = useState('');
  const { getPsicologosApi } = usePsicologos();
  const [psicologos, setPsicologos] = useState({});

  useEffect(() => {
    const fetchPsicologos = async () => {
      const psicologosAux = await getPsicologosApi();
      setPsicologos(psicologosAux);
    };

    fetchPsicologos();
  }, [rutUsuario, getPsicologosApi]);

  /* Guarda el psicólogo seleccionado en el estado local */
  const handleProfesionalClick = (psicologo) => {
    setProfesionalSeleccionado(psicologo);
  };

  /* Guardar el profesional seleccionado en el contexto */
  const handleContinue = () => {
    if (profesionalSeleccionado) {
      const nombreCompleto = `${profesionalSeleccionado.nombre} ${profesionalSeleccionado.apellido}`;

      setProfesionalEscogido({
        nombrePsicologoEscogido: nombreCompleto,
        idPsicologoEscogido: profesionalSeleccionado.id_psicologo,
        especialidad: profesionalSeleccionado.especialidad
      });

      nextStep();
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Debes elegir un psicólogo para continuar.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className='citasCard'>
      <div> Rut Paciente: {rutUsuario}</div>
      <h1 className='citasCardTitle'>ESCOGER PROFESIONAL</h1>

      <section className='profesionalesContainer'>
        {psicologos.length > 0 ? (
          psicologos.map((psicologo) => (
            <ProfesionalCard
              key={psicologo.id_psicologo}
              id_psicologo={psicologo.id_psicologo}
              nombre={psicologo.nombre}
              apellido={psicologo.apellido}
              especialidad={psicologo.especialidad}
              titulo={psicologo.titulo}
              universidad={psicologo.universidad}
              descripcion={psicologo.descripcion}
              onClick={() => handleProfesionalClick(psicologo)}
              isSelected={profesionalSeleccionado?.id_psicologo === psicologo.id_psicologo}
            />
          ))
        ) : (
          <div className='citasCardLoader'>
            <MoonLoader color='#007bff' />

          </div>
        )}
      </section>


      <footer className='formNavigationContainer'>
        {currentStep > 0 && (
          <button type="button" onClick={prevStep} className='citasCardButtonBack'>
            <IoMdArrowRoundBack />
          </button>
        )}

        <button type="button" className='citasCardButton' onClick={handleContinue}>
          CONTINUAR
        </button>
      </footer>
    </div>
  );
}

export default Profesional;
