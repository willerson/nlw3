import express from 'express';
import './database/connection';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes)

app.listen(3333);
// ROTA = conjunto
// Recurso = usuário
// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar informação
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Detando uma informação

//Query Params: http://localhost:3333/users?search=diego
//Route Params: http://localhost:3333/users/1 (Identificar um recurso)
//Body: http://localhost:3333/users (Identificar um recurso)


