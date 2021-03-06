import React, { useState, useContext } from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { validationsMessages } from '../../utils/Message';
import { AuthContext } from '../../contexts/Authentication';
import Input from '../fields/Input';
import { iUserLogin } from '../../interfaces/authentication';

export const Login: React.FC = ()=> {
   const [ remember, setRemember ] = useState(true);
   const { signIn, message } = useContext(AuthContext);

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
               const user = {
                  email: values.email,
                  password: values.password,
                  rememberMe: remember
               } as iUserLogin;
               signIn(user);
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

               <p className='alert'>{message}</p>
            </Form>
         )}
      </Formik>
   )
};