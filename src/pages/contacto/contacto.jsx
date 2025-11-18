/* Import dependencies */
import React from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"

/* Import styles */
import './contacto.css';

/* Import context */
import { useContact } from '../../context/ContactoContext';

function Contacto() {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm()
  const { sendMailContact } = useContact();

  const onSubmit = handleSubmit(async (data) => {
    Swal.fire({
      title: 'Enviando correo...',
      text: 'Por favor espera un momento.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    }); 
    try {
      const solicitudContacto = await sendMailContact(data)
      if (solicitudContacto.status = 200) {
        Swal.fire({
          title: '¡Correo enviado!',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'swal2-button',
          }
        }).then(() => {
          navigate('/')
        })
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al enviar el correo. Intenta de nuevo',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'swal2-button',
        }
      })
    }
  })

  return (
    <div className="contactoContainer">
      <div className="contactoBox">
        <h1 className="contactoTitle">Contáctanos</h1>
        <h2 className="contactoSubtitle">
          Estamos aquí para ayudarte. Completa el formulario y nos pondremos en contacto contigo lo antes posible.
        </h2>
        
        <form className="contactoForm" onSubmit={onSubmit}>
          <div className="contactoField">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder='Nombre completo'
              {...register("nombre", { required: true })}
            />
          </div>

          <div className="contactoField">
            <label htmlFor="correo">Correo Electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              placeholder='usuario@correo.com'
              {...register("correo", { required: true })}
            />
          </div>

          <div className="contactoField">
            <label htmlFor="telefono">Teléfono contacto</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder='(569) 1234 5678'
              {...register("telefono", { required: true })}
            />
          </div>

          <div className="contactoField">
            <label htmlFor="asunto">Asunto</label>
            <input
              type="text"
              id="asunto"
              name="asunto"
              placeholder='Escribe un asunto'
              {...register("asunto", { required: true })}
            />
          </div>

          <div className="contactoField">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder='Mi situación es ...'
              {...register("mensaje", { required: true })}
            />
          </div>
          <button type="submit" className="contactoButton">ENVIAR</button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;

