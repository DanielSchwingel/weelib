import React, { useContext } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import Books from './pages/Books';
import Users from './pages/Users';
import User from './pages/User';
import Book from './pages/Book';

import History from './utils/History';
import { AuthContext } from './contexts/Authentication';

function PrivateRoute({ ...rest }) {
	const { signed, loading } = useContext(AuthContext);

	if(loading) {
		return <h1>Carregando...</h1>

	}

	if (!signed) {
		return <Redirect to='/login'/>
		
	}
	return (
		<Route {...rest} />
	)
}

const Routes: React.FC = ()=> {
   return (
      <Router history={History}>
         <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword} />
            <Route path='/reset-password' component={ResetPassword} />
            <PrivateRoute path='/books' component={Books} />
            <Route path='/users' component={Users} />
            <Route path='/book/create' component={Book} />
            <Route path='/user/create' component={User} />
         </Switch>
      </Router>
   )
};

export default Routes;