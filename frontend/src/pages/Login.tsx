import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import '../styles/pages/login.css';

import Branding from '../components/Branding';
import Input from '../components/form/Input';


const Login: React.FC = ()=> {
   const [ remember, setRemember ] = useState(true);
   return (
      <Branding>
         <Link to='' className='back-link'>
            <FiArrowLeft size={24} color='#15C3D6' />
         </Link>
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
         >
            {({ handleSubmit })=>(
               <Form>
                  <h1>Fazer login</h1>
                  <Input label='E-mail' fieldName='email' placeholder='Informe seu e-mail' />
                  <Input label='Senha' type='password' fieldName='password' placeholder='Informe sua senha' />
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
                  <Link to=''>
                     Esqueci minha senha
                  </Link>
                  </div>
                  <button className='success' type='submit'>Entrar </button>
               </Form>
            )}
         </Formik>
      </Branding>
   )
}

export default Login;