/*Import styles*/
import './psicologosCard.css';

function PsicologosCard({ nombre, especialidad, descripcion, universidad, imagen }) {
  return (
    <div className="psicologoCard">
      <img src={imagen} alt={`Imagen de ${nombre}`} className="psicologoImage" />
      <div className="psicologoInfo">
        <h2 className="psicologoName">{nombre}</h2>
        <h3 className="psicologoEspecialidad">{especialidad}</h3>
        <p className="psicologoDescripcion">{descripcion}</p>
        <p className="psicologoUniversidad"><strong>Universidad:</strong> {universidad}</p>
      </div>
    </div>
  );
}

export default PsicologosCard;