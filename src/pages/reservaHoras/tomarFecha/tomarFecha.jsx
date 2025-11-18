/* Import dependencies */
import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import es from 'date-fns/locale/es';

/*Import styles*/
import './tomarFecha.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

/*Import context*/
import { useCitas } from '../../../context/CitasContext';

/* Import icons */
import { IoMdArrowRoundBack } from "react-icons/io";

/*Import custom Toolbar */
import CustomToolbar from '../../../utils/customToolbarCalendar/customToolbarCalendar';

const locales = { 'es-ES': es };

const localizer = dateFnsLocalizer({
    format: (date, formatStr, options) =>
        format(date, formatStr, { ...options, locale: es }),
    parse: (date, formatStr, options) =>
        parse(date, formatStr, new Date(), { ...options, locale: es }),
    startOfWeek: () => startOfWeek(new Date(), { locale: es }),
    getDay,
    locales,
});

const availableHours = {
    '2025-11-09': ['10:00', '11:00', '12:00', '13:00'], // Horas disponibles para el 10 de septiembre
    '2025-09-11': ['14:00', '15:00', '16:00'], // Horas disponibles para el 11 de septiembre
    '09-11-2025': ['14:00', '15:00', '16:00'], // Horas disponibles para el 11 de septiembre
};

function TomarFecha() {
    const { rutUsuario, profesionalEscogido, currentStep, nextStep, prevStep, setCitaDetails } = useCitas();

    const [selectedDate, setSelectedDate] = useState(null);
    const [hours, setHours] = useState([]);
    const [selectedHour, setSelectedHour] = useState(null);


    const handleSelectSlot = ({ start }) => {
        const formattedDate = format(start, 'dd-MM-yyyy');
        setSelectedDate(formattedDate);
        setHours(availableHours[formattedDate] || []);
        setSelectedHour(null);
    };

    const handleHourSelect = (hour) => {
        setSelectedHour(hour); // Establecer la hora seleccionada
    };

    const dayPropGetter = (date) => {
        const formattedDate = format(date, 'dd-MM-yyyy');
        if (availableHours[formattedDate]) {
            return {
                className: 'available', // Clase verde para días con horas disponibles
            };
        } else {
            return {
                className: 'unavailable', // Clase roja para días sin horas disponibles
            };
        }
    };

    const handleViewChange = (view) => {
        if (view !== 'month') {
            return; // No permite cambiar a otra vista
        }
    };

    const handleContinue = () => {
        if (selectedDate && selectedHour) {
            setCitaDetails({ fecha: selectedDate, hora: selectedHour }); // Guardar en el contexto
            nextStep(); // Avanzar al siguiente paso
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Debes elegir una hora para continuar.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <>
            <div className='citasCard'>
                <div> Rut Paciente: {rutUsuario}</div>
                <div> Profesional escogido: {profesionalEscogido.nombrePsicologoEscogido}</div>

                <div className='calendarContainer'>
                    <h2>Agenda de citas</h2>
                    <Calendar
                        localizer={localizer}
                        className='calendarContent'
                        selectable
                        onSelectSlot={handleSelectSlot}
                        style={{ height: 500 }}
                        defaultView="month"
                        views={['month']} // Limita las vistas disponibles solo a 'month'
                        onView={handleViewChange} // Prevenir que cambie la vista
                        dayPropGetter={dayPropGetter} // Aplica estilos dinámicos a los días
                        components={{
                            toolbar: CustomToolbar, // Usamos el toolbar personalizado
                        }}
                    />

                    {selectedDate && (
                        <div className='hoursContainer'>
                            <div className='hoursContent'>
                                <h2>Horas disponibles para {selectedDate}</h2>
                                {hours.length > 0 ? (
                                    <ul className='hoursList'>
                                        {hours.map((hour, index) => (
                                            <li
                                                key={index}
                                                className={`hourItem ${selectedHour === hour ? 'selected' : ''}`}
                                                onClick={() => handleHourSelect(hour)} // Seleccionar la hora
                                            >
                                                {hour}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className='noHoursMessage'>No hay horas disponibles para esta fecha.</p>
                                )}
                            </div>

                        </div>
                    )}
                </div>


                <footer className='formNavigationContainer'>
                    {currentStep > 0 && (
                        <button type="button" onClick={prevStep} className='citasCardButtonBack'>
                            <IoMdArrowRoundBack />
                        </button>
                    )}

                    <button
                        type="button"
                        className='citasCardButton'
                        onClick={handleContinue}
                        disabled={!selectedHour}
                    >
                        CONTINUAR
                    </button>
                </footer>
            </div>


        </>
    );
}

export default TomarFecha;
