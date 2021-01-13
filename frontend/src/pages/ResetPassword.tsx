import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Branding from '../components/Branding';
import ResetPasswordForm from '../components/form/forms/ResetPasswordForm';

const ResetPassword: React.FC = ()=> {
   return (
      <Branding>
         <Link to='/forgot-password' className='back-link'>
            <FiArrowLeft size={24} color='#15C3D6' />
         </Link>
         <ResetPasswordForm />
      </Branding>
   )
};

export default ResetPassword;