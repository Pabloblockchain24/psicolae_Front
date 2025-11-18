/*Import dependencies*/
import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

/*Import context*/
import { useCitas } from '../../context/CitasContext'

/*Import styles*/
import './confirmarCita.css';

function confirmarCita() {
    const { cid } = useParams();

    const { getCita } = useCitas()
    const [dataCita, setDataCita] = useState({});


    useEffect(() => {
        async function getDataAppointment() {
            const resCita = await getCita(cid)
            if (resCita){
                setDataCita(resCita)
            }
        }
        getDataAppointment()
    }, [cid]);



    return (
        <div className="confirmarCitaContainer">
          <h1 className="confirmarCitaTitle">Confirmar Hora</h1>
          <div className="citaDetails">
            <p><span className="label">ID de la cita:</span> {cid}</p>
            <p><span className="label">Fecha:</span> {dataCita.fecha}</p>
            <p><span className="label">Hora:</span> {dataCita.hora}</p>
            <p><span className="label">Estado actual:</span> {dataCita.estado}</p>
          </div>
          <div className="buttonContainer">
            <button className="confirmButton">Confirmar cita</button>
            <button className="cancelButton">Cancelar cita</button>
          </div>
        </div>
      );
}

export default confirmarCita