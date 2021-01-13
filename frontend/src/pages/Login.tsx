import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Branding from '../components/Branding';
import LoginForm from '../components/form/forms/LoginForm';


const Login: React.FC = ()=> {
   return (
      <Branding>
         <Link to='/' className='back-link'>
            <FiArrowLeft size={24} color='#15C3D6' />
         </Link>
         <LoginForm/>
      </Branding>
   )
}

export default Login;