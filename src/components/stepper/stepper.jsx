/*Import styles*/
import './stepper.css'

/*Import dependencies*/
import React, { useContext } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

/*Import context*/
import { useCitas } from '../../context/CitasContext';

const steps = ['Identificar paciente', 'Escoger profesional', 'Escoger hora', 'Confirmar hora'];

const ProgressBar = () => {
  const { currentStep } = useCitas();

  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        {steps.map((label, index) => (
          <div key={index} className={`step ${index <= currentStep ? 'active' : ''}`}>
            <div className="circle">{index + 1}</div>
            <div className="label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProgressBar;