import React from 'react';

import './styles/global.css';
import Routes from './routes';
import { AuthProvider } from './contexts/Authentication';

function App() {
  	return (
   	<AuthProvider>
      	<Routes />
   	</AuthProvider> 
	);  
}

export default App;
