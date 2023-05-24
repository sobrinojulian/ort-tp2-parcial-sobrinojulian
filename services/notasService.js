import notasMemoria from '../models/DAOs/notasMemoria.js';

class NotasService {
  async ingresoNota(nota) {
    await notasMemoria.guardarNota(nota);
  }

  async obtenerNotas() {
    return notasMemoria.obtenerNotas();
  }

  async calcularPromedio() {
    const notas = await notasMemoria.obtenerNotas();
    const suma = notas.reduce((suma, nota) => suma + nota, 0);
    return suma / notas.length;
  }

  async obtenerMinMax() {
    const notas = await notasMemoria.obtenerNotas();
    const min = Math.min(...notas);
    const max = Math.max(...notas);
    return { min, max };
  }

  async obtenerCantidad() {
    const notas = await notasMemoria.obtenerNotas();
    return notas.length;
  }
}

const notasService = new NotasService();

export default notasService;