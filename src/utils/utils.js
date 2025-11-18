
/* Function to format Chilean RUT */
export const formatRut = (value) => {
    const rut = value.replace(/[^\dkK]/g, '').toUpperCase();
    if (rut.length > 1) {
        return rut.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '-' + rut.slice(-1);
    }
    return rut;
}

export const formatearFecha = (fecha) => {
    const partes = fecha.split('-');
    const nuevaFecha = `${partes[2]}-${partes[1]}-${partes[0]}`;
    return nuevaFecha;
}