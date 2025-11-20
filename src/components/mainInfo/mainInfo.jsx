import React from 'react';
import './mainInfo.css';

function MainInfo() {
  return (
    <section className='mainInfoContainer' id="info"> 
      <h2 className="mainInfoTitle">¿Por qué deberias tomar una Asesoría en Salud Mental?</h2>

      <section className="mainInfo">
        <article className="mainInfoCard">
          <img src="/iconProfesional.jpg" alt="Icono Profesionales" className="mainInfoIcon" />
          <div>
            <h3>Evita la Crisis: Psicología Preventiva</h3>
            <p>Construye tu autonomía mental con herramientas prácticas y un plan de acción definido. Mis 5 años de experiencia te guían hacia el rendimiento óptimo y el bienestar diario, previniendo el estrés en lugar de solo explorarlo.</p>
          </div>
        </article>

        <article className="mainInfoCard">
          <img src="/iconAtencionOnline.jpg" alt="Icono Atención" className="mainInfoIcon" />
          <div>
            <h3>Conocimiento Integral del Sistema de Salud </h3>
            <p>Mi experiencia abarca todos los niveles de atención de salud: APS, hospitales y clínicas particulares. Esto garantiza que mi asesoría no solo sea teórica, sino que esté anclada en una comprensión completa y real del bienestar y la enfermedad dentro del sistema.</p>
          </div>
        </article>

        <article className="mainInfoCard">
          <img src="/iconEspecialidades.jpg" alt="Icono Especialidades" className="mainInfoIcon" />
          <div>
            <h3>Asesoría psicológica Remota</h3>
            <p>Accede a 5 años de experiencia clínica con asesoría psicológica online práctica y preventiva. Olvídate de los desplazamientos. Concéntrate en tu solución y bienestar con total flexibilidad horaria y máxima comodidad.</p>
          </div>
        </article>
      </section>
    </section>
  );
}

export default MainInfo;
