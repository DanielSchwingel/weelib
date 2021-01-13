import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Formik, Form } from 'formik';

import Branding from '../components/Branding';
import Input from '../components/form/Input';

const ForgotPassword: React.FC = ()=> {
   return (
      <Branding>
         <Link to='/login' className='back-link'>
            <FiArrowLeft size={24} color='#15C3D6' />
         </Link>
         <Formik
            initialValues= {
               {
                  email: '',
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
                  <h1>Esqueci a senha</h1>
                  <p>Sua redefinição de senha será enviada para o e-mail cadastrado.</p>
                  <Input label='E-mail' fieldName='email' placeholder='Informe seu e-mail' />
                  <button className='success' type='submit'>Entrar </button>
               </Form>
            )}
         </Formik>
      </Branding>
   )
};

export default ForgotPassword;