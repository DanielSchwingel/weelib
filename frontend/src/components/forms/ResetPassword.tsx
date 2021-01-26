import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useLocation } from 'react-router-dom';

import Input from '../fields/Input';
import { validationsMessages } from '../../utils/Message';
import api from '../../services/api';

function useQuery() {
   return new URLSearchParams(useLocation().search);
}

export const ResetPassword: React.FC = ()=> {
   const [ message, setMessage ] = useState('');
   const [ error, setError ] = useState('');
   const queryParams = useQuery();


   const validationSchema = Yup.object().shape(
      {
         password: Yup.string().required(validationsMessages.required),
         confirm_password: Yup.string().required(validationsMessages.required).oneOf([Yup.ref('password'), null], 'Senhas não conferem')
      }
   )
   return ( 
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
               api.post(`reset-password?token=${queryParams.get('token')}`, { password: values.password })
                  .then(response => {
                     setMessage(response.data.message);
                  }).catch(error => {
                     setError(error.response.data.message);
                  });
            }
         }
         validationSchema={validationSchema}
      >
         {({ handleSubmit })=>(
            <Form>
               <h1>Redefinição de senha</h1>
               <p>Escolha uma nova senha para você acessar o dashboard do Weelib</p>
               <Input label='Nova senha' isPassword={true} fieldName='password' placeholder='Informe a nova senha' />
               <Input label='Repetir a senha' isPassword={true} fieldName='confirm_password' placeholder='Confirme sua senha' />
               <button className='success' type='submit'>Entrar </button>
               {message && <p className='alert'>{message}</p>}
               {error && <p className='alert'>{error}</p>}
            </Form>
         )}
      </Formik>  
   )
};

