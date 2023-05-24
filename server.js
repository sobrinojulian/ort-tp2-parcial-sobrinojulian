import express from 'express';
import notasRouter from './routes/notasRouter.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/notas', notasRouter);
app.use(express.static('views'));

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
