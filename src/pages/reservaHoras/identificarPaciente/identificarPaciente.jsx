/* Import dependencies */
import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

/*Import styles*/
import './identificarPaciente.css';

/* Import context functions */
import { useCitas } from "../../../context/CitasContext";

/* Import utils functions */
import { formatRut } from "../../../utils/utils";

/* Import icons */
import { IoMdArrowRoundBack } from "react-icons/io";

/* Validation schema */
const validationSchema = Yup.object({
  documento: Yup.string().required('Documento es requerido'),
  rutPaciente: Yup.string()
    .matches(/^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/, 'Formato de Rut inválido')
    .required('Rut Paciente es requerido')
});

function IdentificarPaciente({ setIsValido }) {
  const { saveRut, currentStep, nextStep, prevStep } = useCitas();

  return (
    <Formik
      initialValues={{ documento: '', rutPaciente: '' }}
      validationSchema={validationSchema}
      onSubmit={values => {
        saveRut(values.rutPaciente);
        nextStep();
      }}
    >
      {({ handleChange, values, isValid, setFieldValue }) => {
        useEffect(() => {
          setIsValido(isValid && values.documento && values.rutPaciente);
        }, [isValid, values]);

        return (
          <Form className='citasCard'>
            <h1 className='citasCardTitle'>¡Hola! Por favor, ingrese sus datos para continuar.</h1>
 
              <div className='identificacionInputContainer'>
                <label className='identificacionInputLabel'>Documento</label>
                <select
                  name="documento"
                  onChange={handleChange}
                  className='identificacionInputBox'
                >
                  <option value="">Selecciona una opción</option>
                  <option value="carnet">Carnet de Identidad</option>
                  <option value="pasaporte">Pasaporte</option>
                </select>
              </div>


            <div className='identificacionInputContainer'>
              <label className='identificacionInputLabel'>Rut Paciente</label>
              <input
                type="text"
                name='rutPaciente'
                placeholder='Ej: 12.345.678-9'
                value={values.rutPaciente}
                onChange={(e) => {
                  const formattedRut = formatRut(e.target.value);
                  setFieldValue('rutPaciente', formattedRut);
                }}
                className='identificacionInputBox'
              />
            </div>
            <footer className='formNavigationContainer'>
              {currentStep > 0 && (
                <button type="button" onClick={prevStep} className='citasCardButtonBack'>
                  <IoMdArrowRoundBack />
                </button>
              )}

              <button type="submit" className='citasCardButton' disabled={!isValid}>
                CONTINUAR
              </button>
            </footer>
          </Form>


        );
      }}
    </Formik>


  );
}

export default IdentificarPaciente  