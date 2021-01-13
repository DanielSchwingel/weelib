import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Formik, Form } from 'formik';

import Branding from '../components/Branding';
import Input from '../components/form/Input';

const ResetPassword: React.FC = ()=> {
   return (
      <Branding>
         <Link to='/login' className='back-link'>
            <FiArrowLeft size={24} color='#15C3D6' />
         </Link>
         <Formik
            initialValues= {
               {
                  password: '',
                  confirm_password: '',
               }
            }
            onSubmit={ (values,actions) => 
               {
                  actions.setSubmitting(false);
                  console.log(values)
               }
            }
         >
            {({ handleSubmit })=>(
               <Form>
                  <h1>Redefinição de senha</h1>
                  <p>Escolha uma nova senha para você acessar o dashboard do Weelib</p>
                  <Input label='Nova senha' isPassword={true} fieldName='password' placeholder='Informe a nova senha' />
                  <Input label='Repetir a senha' isPassword={true} fieldName='confirm_password' placeholder='Confirme sua senha' />
                  <button className='success' type='submit'>Entrar </button>
               </Form>
            )}
         </Formik>
      </Branding>
   )
};

export default ResetPassword;