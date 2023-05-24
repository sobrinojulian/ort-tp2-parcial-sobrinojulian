import notasService from '../services/notasService.js';

class NotasController {
  async ingreso(req, res) {
    try {
      const { nota } = req.body;
      await notasService.ingresoNota(nota);
      res.status(200).json({ message: 'Nota ingresada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al ingresar la nota' });
    }
  }

  async listado(req, res) {
    try {
      const notas = await notasService.obtenerNotas();
      res.status(200).json({ notas });
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el listado de notas' });
    }
  }

  async promedio(req, res) {
    try {
      const promedio = await notasService.calcularPromedio();
      res.status(200).json({ promedio });
    } catch (error) {
      res.status(500).json({ error: 'Error al calcular el promedio' });
    }
  }

  async minmax(req, res) {
    try {
      const { min, max } = await notasService.obtenerMinMax();
      res.status(200).json({ min, max });
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el valor mínimo y máximo' });
    }
  }

  async cantidad(req, res) {
    try {
      const cantidad = await notasService.obtenerCantidad();
      res.status(200).json({ cantidad });
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la cantidad de notas' });
    }
  }
}

const notasController = new NotasController();

export default notasController;