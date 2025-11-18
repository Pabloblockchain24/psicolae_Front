/*Import dependencies*/
import React, { useState, useEffect } from 'react';

/* Import styles */
import './reservaHoras.css';

/* Import context */
import { useCitas } from '../../context/CitasContext';

/* Import components */
import ProgressBar from '../../components/stepper/stepper';

/* Import pages */
import IdentificarPaciente from './identificarPaciente/identificarPaciente';
import Profesional from './profesional/profesional';
import TomarFecha from './tomarFecha/tomarFecha';
import ConfirmarHora from './confirmarHora/confirmarHora';

function Citas() {
  const { currentStep, nextStep, prevStep } = useCitas();
  const [isValido, setIsValido] = useState(false);

  const handleSubmit = () => {
    if (isValido) {
      nextStep();
    }
  };

  const handleNextStep = () => {
    handleSubmit(); // Llama a la función de envío directamente
  };

  // const ejecutarIdentificarPaciente = (rut) => {
  //   console.log('Ejecute ejecutarIdentificarPaciente')
  //   console.log('rut', rut)
  //   saveRut(rut);
  //   console.log('El rut guardado en el context es:', rutUsuario)
  // }


  const handlePrevStep = () => {
    prevStep();
    setIsValido(false);
  };

  /*Reset at each step back*/
  useEffect(() => {
    if (currentStep === 0) {
      setIsValido(false);
    }
  }, [currentStep]);

  return (
    <main className='citasContainer'>
      <div className='citasContent'>
        <ProgressBar />

        {currentStep === 0 && (
          <IdentificarPaciente
            setIsValido={setIsValido}
            handleSubmit={handleSubmit}
          />
        )}

        {currentStep === 1 &&
          <Profesional setIsValido={setIsValido}
          />}

        {currentStep === 2 &&
          <TomarFecha />
        }

        {currentStep === 3 &&
          <ConfirmarHora />
        }

      </div>

    </main>
  );
}

export default Citas;
