import express from 'express';
import notasController from '../controllers/notasController.js';

class NotasRouter {
  constructor() {
    this.router = express.Router();
    this.configurarRoutes();
  }

  configurarRoutes() {
    this.router.post('/ingreso', notasController.ingreso);
    this.router.get('/listado', notasController.listado);
    this.router.get('/promedio', notasController.promedio);
    this.router.get('/minmax', notasController.minmax);
    this.router.get('/cantidad', notasController.cantidad);
  }

  getRouter() {
    return this.router;
  }
}

const notasRouter = new NotasRouter();

export default notasRouter.getRouter();
