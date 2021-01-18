import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import Books from './pages/Books';
import Users from './pages/Users';
import CreateBook from './pages/CreateBook';
import User from './pages/User';

const Routes: React.FC = ()=> {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword} />
            <Route path='/reset-password' component={ResetPassword} />
            <Route path='/books' component={Books} />
            <Route path='/users' component={Users} />
            <Route path='/book/create' component={CreateBook} />
            <Route path='/user/create' component={User} />
         </Switch>
      </BrowserRouter>
   )
};

export default Routes;