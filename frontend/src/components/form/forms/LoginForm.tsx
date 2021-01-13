import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { validationsMessages } from '../../../utils/Message';
import Input from '../Input';

const LoginForm: React.FC = ()=> {
   const [ remember, setRemember ] = useState(true);
   const validationSchema = Yup.object().shape(
      {
         email: Yup.string().required(validationsMessages.required).email(validationsMessages.invalid),
         password: Yup.string().required(validationsMessages.required)
      }
   )

   return(
      <Formik
         initialValues= {
            {
               email: '',
               password: '',
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
               <h1>Fazer login</h1>
               <Input label='E-mail' fieldName='email' placeholder='Informe seu e-mail' />
               <Input label='Senha' fieldName='password' placeholder='Informe sua senha' isPassword={true}/>
               <div className='row-field'>
               <div>
                     <input 
                        type="checkbox"
                        id="remember"
                        checked={remember}
                        onChange={()=> setRemember(!remember)}
                     />
                     <label htmlFor="remember">Lembrar-me</label>
               </div>
               <Link to='/forgot-password'>
                  Esqueci minha senha
               </Link>
               </div>
               <button className='success' type='submit'>Entrar </button>
            </Form>
         )}
      </Formik>
   )
};

export default LoginForm;