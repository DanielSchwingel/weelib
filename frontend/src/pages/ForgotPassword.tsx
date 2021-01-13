import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Branding from '../components/Branding';
import ForgotPasswordForm from '../components/form/forms/ForgotPasswordForm';

const ForgotPassword: React.FC = ()=> {
   return (
      <Branding>
         <Link to='/login' className='back-link'>
            <FiArrowLeft size={24} color='#15C3D6' />
         </Link>
         <ForgotPasswordForm />
      </Branding>
   )
};

export default ForgotPassword;