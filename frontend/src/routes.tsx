import { writeSync } from 'fs';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';

const Routes: React.FC = ()=> {
   return (
      <BrowserRouter>
         <Switch>
            <Route path='/' component={Landing} />
         </Switch>
      </BrowserRouter>
   )
};

export default Routes;