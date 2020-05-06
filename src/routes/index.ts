import { Router } from 'express'; // importando rotas

const routes = Router(); // criando a constante rotas

routes.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };
  response.json(user);
}); // criando a rota raiz do projeto

export default routes;
