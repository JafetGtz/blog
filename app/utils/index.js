export const recortarTexto = (longitudMaxima = 70) => {
  return function (texto) {
    if (texto.length <= longitudMaxima) {
      return texto;
    } else {
      const textoRecortado = texto.slice(0, longitudMaxima - 3);
      return textoRecortado + '...';
    }
  };
};

export const obtenerFechaHoraActual = () => {
  const fechaHoraActual = new Date();
  return fechaHoraActual;
};

export const formatearFechaHora = (fechaHora) => {
  const fechaActual = new Date();
  const fechaPasada = new Date(fechaHora);
  const diferenciaEnMS = fechaActual - fechaPasada;

  const segundos = Math.floor(diferenciaEnMS / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  if (dias > 0) {
    return `hace ${dias} ${dias === 1 ? 'día' : 'días'}`;
  } else if (horas > 0) {
    return `hace ${horas} ${horas === 1 ? 'hora' : 'horas'}`;
  } else if (minutos > 0) {
    return `hace ${minutos} ${minutos === 1 ? 'minuto' : 'minutos'}`;
  } else {
    return `hace ${segundos} ${segundos === 1 ? 'segundo' : 'segundos'}`;
  }
};

