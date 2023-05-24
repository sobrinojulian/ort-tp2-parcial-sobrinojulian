class NotasMemoria {
  constructor() {
    this.notas = [];
  }

  async guardarNota(nota) {
    this.notas.push(nota);
  }

  async obtenerNotas() {
    return this.notas;
  }
}

const notasMemoria = new NotasMemoria();

export default notasMemoria;