/* Import dependencies */
import { createContext, useContext, useState } from "react";

/* Import API functions */
import { getAppointments, createAppointmentRequest, getUserDataRequest, updatePatientRequest, createNewPatientByConctactRequest, confirmationCitaMailRequest, getCitaRequest } from "../api/citas.api";

/* Context instance */
const CitasContext = createContext();


export const useCitas = () => {
    const context = useContext(CitasContext);
    if (!context) {
        throw new Error('useCitas must be used within a CitasProvider');
    }
    return context;
}

export function CitasProvider({ children }) {
    const [citas, setCitas] = useState([]);
    const [rutUsuario, setRutUsuario] = useState('');
    const [profesionalEscogido, setProfesionalEscogido] = useState({nombrePsicologoEscogido: '', idPsicologoEscogido: '', especialidad: ''});
    const [citaDetails, setCitaDetails] = useState({ fecha: '', hora: '' }); 

    const [currentStep, setCurrentStep] = useState(0);

    const saveRut = (rut) => setRutUsuario(rut);

    const nextStep = () => setCurrentStep((prevStep) => prevStep + 1);
    const prevStep = () => {
        if (currentStep === 1) {
            setRutUsuario('');
        }
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const finalStep = () => {
        setCurrentStep(0);
        setProfesionalEscogido({nombrePsicologoEscogido: '', idPsicologoEscogido: '', especialidad: ''});
        setCitaDetails({ fecha: '', hora: '' });
        setRutUsuario('');
    };

    const getRutUsuario = () => rutUsuario;

    const getUserData = async (rut) => {
        try {
            const res = await getUserDataRequest(rut);
            return res.data;
        } catch (error) {
            throw new Error(error);
        }
    };

    const getCitas = async () => {
        try {
            const res = await getAppointments();
            setCitas(res.data);
        } catch (error) {
            throw new Error(error);
        }
    };

    const createCita = async (cita) => {
        console.log("llegue al createCita citaContext")
        try {
            const res = await createAppointmentRequest(cita);
            setCitas([...citas, res.data]);
            return res.data.id_sesion;
        } catch (error) {
            console.error('Error creating appointment:', error);
            throw new Error(error);
        }
    };

    const updateContactPatient = async (patientData) => {
        console.log(patientData)
        try {
            const res = await updatePatientRequest(patientData);
            return res.data;
        } catch (error) {
            throw new Error(error);
        }
    } 

    const createNewPatientByConctact = async (patientData) => {
        try {
            const res = await createNewPatientByConctactRequest(patientData);
            return res.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    const confirmationCitaMail = async(citaData) => {
        console.log(citaData)
        try {
            const res = await confirmationCitaMailRequest(citaData);
            return res.data;
        } catch (error) {
            throw new Error(error);
        }
    }

    const getCita = async (citaId) => {
        try {
            const res = await getCitaRequest(citaId);
            return res.data;
        } catch (error) {
            throw new Error(error);
        }
    };

    return (
        <CitasContext.Provider value={{
            citas,
            getCitas,
            getCita,
            createCita,
            rutUsuario,
            getUserData,
            updateContactPatient,
            createNewPatientByConctact,
            confirmationCitaMail,
            profesionalEscogido,
            setProfesionalEscogido,
            getRutUsuario,
            saveRut,
            currentStep,
            nextStep,
            prevStep,
            citaDetails, 
            setCitaDetails, 
            finalStep,

        }}>
            {children}
        </CitasContext.Provider>
    );
}
