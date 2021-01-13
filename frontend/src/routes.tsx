import { writeSync } from 'fs';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';

const Routes: React.FC = ()=> {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/reset-password' component={ResetPassword} />
         </Switch>
      </BrowserRouter>
   )
};

export default Routes;