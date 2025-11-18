/*Import dependencies*/
import axios from "./axios";


export const getAppointments = () => axios.get('/appointments')
export const getCitaRequest = (citaId) => axios.get(`/appointment/${citaId}`)


export const createAppointmentRequest = (cita) => axios.post('/appointment', cita)
export const getUserDataRequest = (rut) => axios.get(`/patientByRut/${rut}`)
export const updatePatientRequest = (patientData) => axios.put(`/updatePatient`, {patientData})
export const createNewPatientByConctactRequest = (patientData) => axios.post(`/createNewPatientByContact`, {patientData})
export const confirmationCitaMailRequest = (citaData) => axios.post('/confirmationAppointmentMail', {citaData}) 
