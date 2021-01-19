import express from 'express';
import UsersController from './controllers/Users';
import BooksController from './controllers/Books';
import RentsController from './controllers/Rents';
import AuthenticationController from './controllers/Authentication';

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

routes.post('/rents', RentsController.create);
routes.get('/rents', RentsController.index);
routes.get('/rents/:id', RentsController.show);
routes.put('/rents/:id', RentsController.update);

routes.post('/authenticate', AuthenticationController.authenticate);
routes.post('/forgot-password', AuthenticationController.forgotPassword);
routes.post('/reset-password', AuthenticationController.resetPassword)

export default routes;