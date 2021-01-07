import express from 'express';
import UsersController from './controllers/Users';

const routes = express.Router();

routes.post('/users', UsersController.create);
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.delete('/users/:id', UsersController.delete);

export default routes;