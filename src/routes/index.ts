import { Router } from 'express'; // importando rotas

const routes = Router(); // criando a constante rotas

routes.get('/', (request, response) =>
  response.json({ message: 'Hello World' }),
); // criando a rota raiz do projeto

export default routes;
