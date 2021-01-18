import React from 'react';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';

import Input from '../fields/Input';
import Select from '../fields/Select';
import iUser from '../../interfaces/user';
import {validationsMessages} from '../../utils/Message';

const options = [
   {
      value: 1,
      description: 'Administrador',
   },
   {
      value: 2,
      description: 'Usuário'
   }
]

export const User: React.FC = ()=> {
   const validationSchema = Yup.object().shape(
      {
         name: Yup.string().required(validationsMessages.required),
         email: Yup.string().email(validationsMessages.invalid).required(validationsMessages.required),
         password: Yup.string().required(validationsMessages.required),
         category: Yup.number().required(validationsMessages.required)
      }
   );

   return (
      <Formik
         initialValues= {
            {
               name: '',
               email: '',
               password: '',
               category: 2
            }
         }
         onSubmit={ (values,actions) => 
            {
               alert('cas')
               actions.setSubmitting(false);
               console.log(values);
            }
         }
         validationSchema={validationSchema}
      >
         {( props: FormikProps<iUser> )=>(
            <Form>
               <Input label='Nome' fieldName='name'/>
               <Input label='E-mail' fieldName='email'/>
               <Input label='Senha' fieldName='password' isPassword={true}/>
               <Select label='Categoria' name='category'  options={options}/>
               <button className='success' type='submit'>Entrar </button>
            </Form>
         )}
      </Formik>
   )
};