import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Branding from '../components/Branding';
import { ForgotPassword as Form } from '../components/forms/ForgotPassword';

const ForgotPassword: React.FC = ()=> {
   return (
      <Branding>
         <Link to='/login' className='back-link'>
            <FiArrowLeft size={24} color='#15C3D6' />
         </Link>
         <Form />
      </Branding>
   )
};

export default ForgotPassword;