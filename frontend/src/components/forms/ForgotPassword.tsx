import React, { useState }  from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { validationsMessages } from '../../utils/Message';
import Input from '../fields/Input';
import api from '../../services/api';

export const ForgotPassword: React.FC = ()=> {
   const [ message, setMessage ] = useState('');
   const validationSchema = Yup.object().shape(
      {
         email: Yup.string().required(validationsMessages.required).email(validationsMessages.invalid)
      }
   );

   return (
      <Formik
         initialValues= {
            {
               email: '',
            }
         }
         onSubmit={ (values,actions) => {
            actions.setSubmitting(false);
               api.post('forgot-password', { email: values.email })
                  .then(response => {
                     setMessage(response.data.message)
                  }).catch(error => {
                     setMessage(error.response.data.message);
                  });
            }
         }
         validationSchema={validationSchema}
      >
         {({ handleSubmit })=>(
            <Form>
               <h1>Esqueci a senha</h1>
               <p>Sua redefinição de senha será enviada para o e-mail cadastrado.</p>
               <Input label='E-mail' fieldName='email' placeholder='Informe seu e-mail' />
               <button className='success' type='submit'>Entrar </button>
               <p className='alert'>{message}</p>
            </Form>
         )}
      </Formik>
   )
};