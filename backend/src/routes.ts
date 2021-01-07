import express from 'express';
import UsersController from './controllers/Users';
import BooksController from './controllers/Books';

const routes = express.Router();

routes.post('/users', UsersController.create);
routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.delete('/users/:id', UsersController.delete);

routes.post('/books', BooksController.create);
routes.get('/books', BooksController.index)
routes.get('/books/:id', BooksController.show);
routes.put('/books/:id', BooksController.update);
routes.delete('/books/:id', BooksController.delete);

export default routes;