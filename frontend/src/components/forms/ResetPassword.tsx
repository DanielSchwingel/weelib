import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Input from '../fields/Input';
import { validationsMessages } from '../../utils/Message';

export const ResetPassword: React.FC = ()=> {
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
               console.log(values)
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
            </Form>
         )}
      </Formik>  
   )
};

