import React, { useState, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { formatearFecha } from '../../../utils/utils';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Para la redirección

/* Import styles */
import './confirmarHora.css';

/*Import context*/
import { useCitas } from '../../../context/CitasContext';

export const ConfirmarHora = () => {

    const navigate = useNavigate(); // Inicializa el hook de navegación
    const {
        rutUsuario,
        profesionalEscogido,
        citaDetails,
        createCita,
        prevStep,
        finalStep,
        currentStep,
        getUserData,
        updateContactPatient,
        createNewPatientByConctact,
        confirmationCitaMail
    } = useCitas();

    const [correoUser, setCorreoUser] = useState('');
    const [telefonoUser, setTelefonoUser] = useState('');
    const [correoOriginal, setCorreoOriginal] = useState('');
    const [telefonoOriginal, setTelefonoOriginal] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    /*Revisar datos*/
    useEffect(() => {
        async function loadUserData() {
            const data = await getUserData(rutUsuario)
            if(data){
                setCorreoOriginal(data.email)
                setTelefonoOriginal(data.telefono) 
                setCorreoUser(data.email)
                setTelefonoUser(data.telefono)
            }
        }
        loadUserData()  
           }, [rutUsuario]);

    // Este estado controla si el checkbox debe estar habilitado
    const [isCheckboxEnabled, setIsCheckboxEnabled] = useState(false);

    // Habilitar el checkbox solo si email y phone están llenos
    useEffect(() => {
        if (correoUser.trim() !== "" && telefonoUser.trim() !== "") {
            setIsCheckboxEnabled(true);
        } else {
            setIsCheckboxEnabled(false);
            setTermsAccepted(false); // Desmarcar el checkbox si los datos están incompletos
        }
    }, [correoUser, telefonoUser]);

    const handleConfirmarCita = async () => {

        /*if patient doesn't exists create new patient; only patients who doesn´t exit can have correoUser   */
        if(!correoOriginal && !telefonoOriginal){
            /*create new patient */
            createNewPatientByConctact({rut: rutUsuario, correo: correoUser, telefono: telefonoUser})
                    }else{
            /*update Contact pacient*/
            if(correoUser !== correoOriginal || telefonoUser !== telefonoOriginal ){
                updateContactPatient({rut: rutUsuario, correo: correoUser, telefono: telefonoUser})
            } 
        }

        const nuevaCita = {
            rut_paciente: rutUsuario,
            id_psicologo: profesionalEscogido.idPsicologoEscogido,
            fecha: formatearFecha(citaDetails.fecha),
            hora: citaDetails.hora,
        };
        try {
            const appointmentId = await createCita(nuevaCita);
            Swal.fire({
                title: '¡Cita creada con éxito!',
                text: `Su cita ha sido creada con éxito para el día ${formatearFecha(nuevaCita.fecha)}. Recibirá una notificación por correo 24 horas antes para confirmar su cita.`,
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then((result) => {
                if (result.isConfirmed) {
                    const citaData = {
                        ...nuevaCita,
                        nombrePsicologo: profesionalEscogido.nombrePsicologoEscogido,
                        especialidad: profesionalEscogido.especialidad,
                        correoPaciente: correoUser,
                        id_appointment: appointmentId
                    };
                    confirmationCitaMail(citaData);
                    navigate('/');
                }
            });
            finalStep();
        } catch (error) {
            console.error("Error al confirmar la cita:", error);
            Swal.fire({
                title: 'Error',
                text: 'Hubo un error al confirmar la cita. Inténtalo nuevamente.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    };

    return (
        <div className="citasCard">
            <section className="citaDetails">
                <h2>Confirmar Cita</h2>
                <div>
                    <p><strong>RUT Paciente:</strong> {rutUsuario}</p>
                    <p><strong>Profesional:</strong> {profesionalEscogido.nombrePsicologoEscogido}</p>
                    <p><strong>Especialidad:</strong> {profesionalEscogido.especialidad}</p>
                    <p><strong>Fecha:</strong> {citaDetails.fecha}</p>
                    <p><strong>Hora:</strong> {citaDetails.hora}</p>
                </div>

            </section>
            <section className="contactFieldsetContainer">
                <fieldset className="contactFieldset">
                    <legend className="legendTitle">CONTACTO</legend>

                    <div className="inputGroup">
                        <label className="inputLabel">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="textInput"
                            placeholder="usuario@correo.com"
                            value={correoUser}
                            onChange={(e) => setCorreoUser(e.target.value)}
                        />
                    </div>

                    <div className="inputGroup">
                        <label className="inputLabel">Celular:</label>
                        <input
                            type="phone"
                            id="phone"
                            name="phone"
                            className="textInput"
                            placeholder="+569 50727028"
                            value={telefonoUser}
                            onChange={(e) => setTelefonoUser(e.target.value)}
                        />
                    </div>

                    <div className="checkboxGroup">
                        <input
                            type="checkbox"
                            name="terms"
                            id="terms"
                            className="checkboxInput"
                            disabled={!isCheckboxEnabled}
                            checked={termsAccepted}
                            onChange={() => setTermsAccepted(!termsAccepted)}
                        />
                        <label htmlFor="terms" className="checkboxLabel">
                            ¿Acepta ser contactada(o) para confirmar hora?
                        </label>
                    </div>
                </fieldset>

            </section>


            <footer className='formNavigationContainer'>
                {currentStep > 0 && (
                    <button type="button" onClick={prevStep} className='citasCardButtonBack'>
                        <IoMdArrowRoundBack />
                    </button>
                )}

                <button
                    type="button"
                    className='citasCardButton'
                    onClick={handleConfirmarCita}
                    disabled={!termsAccepted} // Deshabilita si no se aceptaron los términos
                >
                    CONFIRMAR HORA
                </button>
            </footer>
        </div>
    );
};

export default ConfirmarHora;
