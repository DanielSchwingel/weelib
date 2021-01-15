import React  from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { validationsMessages } from '../../utils/Message';
import Input from '../fields/Input';

export const ForgotPassword: React.FC = ()=> {
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
               <h1>Esqueci a senha</h1>
               <p>Sua redefinição de senha será enviada para o e-mail cadastrado.</p>
               <Input label='E-mail' fieldName='email' placeholder='Informe seu e-mail' />
               <button className='success' type='submit'>Entrar </button>
            </Form>
         )}
      </Formik>
   )
};