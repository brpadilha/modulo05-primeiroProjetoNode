import express from 'express';
import routes from './routes'; // importando as rotas

const app = express();

app.use(routes);

app.listen(3333, () => {
  console.log('Server is runnig');
});
