import React, { createContext, useState, useEffect } from 'react';

import { iAuthenticationContext, iUserLogin } from '../interfaces/authentication';
import api from '../services/api';
import History from '../utils/History';

const AuthContext = createContext<iAuthenticationContext>({} as iAuthenticationContext);

const AuthProvider: React.FC = ({ children })=> {
   const [ user, setUser ] = useState<object | null>(null);
   const [ remember, setRemember ] = useState(true);
   const [ loading, setLoading ] = useState(true);
   const [ message, setMessage ] = useState('');

   useEffect(()=>{
      if (!remember) return; 
      const userStorage = localStorage.getItem('@WEELIBAuth:user');
      const tokenStorage = localStorage.getItem('@WEELIBAuth:token');

      if(userStorage && tokenStorage) {
         api.defaults.headers.authorization = `Bearer ${JSON.parse(tokenStorage)}`;
         setUser(JSON.parse(userStorage))
      }
      setLoading(false);
   },[remember])

   async function signIn(user:iUserLogin) {
      const { email, password, rememberMe } = user;
      setRemember(rememberMe);

      await api.post('/authenticate', { email, password })
         .then(response => {
            const { user, token } = response.data;
            if(remember) {
               localStorage.setItem('@WEELIBAuth:user', JSON.stringify(user));
               localStorage.setItem('@WEELIBAuth:token', JSON.stringify(token));
            };            
            api.defaults.headers.authorization = `Bearer ${token}`;
            setUser(user);
            History.push('/books')
         })   
         .catch(error => {
            setMessage(error.response.data.message);
         });

   }

   function signOut(){
      localStorage.clear();
      api.defaults.headers.authorization = undefined;
      setUser(null);
      History.push('/login');
   }

   return (
      <AuthContext.Provider 
         value={
            {
               signed: Boolean(user),
               user,
               signIn,
               signOut,
               loading,
               message
            }
         }
      >
         {children}
      </AuthContext.Provider>
   )
};

export { AuthContext, AuthProvider };