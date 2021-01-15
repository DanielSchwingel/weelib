import React from 'react';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';

import Input from '../fields/Input';
import TextArea from '../fields/TextArea';
import iBook from '../../interfaces/book';
import {validationsMessages} from '../../utils/Message';


export const Book: React.FC = ()=> {
   const validationSchema = Yup.object().shape(
      {
         name: Yup.string().required(validationsMessages.required),
         author: Yup.string().required(validationsMessages.required),
         publisher: Yup.string().required(validationsMessages.required),
         about: Yup.string().required(validationsMessages.required),
         purchase: Yup.date().max(new Date(), validationsMessages.topDate).required(validationsMessages)
      }
   );

   return (
      <Formik
         initialValues= {
            {
               name: '',
               author: '',
               publisher: '',
               about: '',
               purchase: String((new Date()).toISOString().split('T')[0]),
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
         {( props: FormikProps<iBook> )=>(
            <Form>
               <Input label='Nome' fieldName='name'/>
               <Input label='Autor' fieldName='author'/>
               <Input label='Editora' fieldName='publisher'/>
               <TextArea label='Sobre' name='about' />
               <Input label='Adquirido em' fieldName='purchase' type='date' />
               <button className='success' type='submit'>Entrar </button>
            </Form>
         )}
      </Formik>
   )
};