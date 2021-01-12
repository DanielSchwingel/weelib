import { writeSync } from 'fs';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';

const Routes: React.FC = ()=> {
   return (
      <BrowserRouter>
         <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
         </Switch>
      </BrowserRouter>
   )
};

export default Routes;