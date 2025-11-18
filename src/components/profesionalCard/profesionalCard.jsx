import React from 'react';
import './profesionalCard.css';

function ProfesionalCard({ nombre, apellido, especialidad, titulo, universidad, descripcion, id_psicologo, onClick, isSelected }) {
  return (
    <div
      className={`card ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <img
        src="https://via.placeholder.com/150"
        alt="Perfil"
        className="profile-img"
      />
      <div className="card-info">
        <h2 className="name">{nombre + ' ' + apellido} </h2>
        <div className="description">
          <p> <strong>Especialidad:</strong> {especialidad}<br /> </p>
          <p> {titulo + ' - ' + universidad}<br /> </p>
          <p> <strong>{'Sobre ' + nombre + ':'}</strong> {descripcion} </p>
        </div>


      </div>

    </div>
  );
}

export default ProfesionalCard;
