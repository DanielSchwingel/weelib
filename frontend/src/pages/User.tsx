import React from 'react';

import Sidebar from '../components/Sidebar';
import { User as Form } from '../components/forms/User';
import '../styles/pages/user.css';

const User: React.FC = ()=> {
   return (
      <div id='page-user'>
         <Sidebar/>
         <div className='content'>
            <header>
               <p>Adicionando um usuário</p>
            </header>
            <main>
               <h1>Dados</h1>
               <Form />            
            </main>
         </div>
      </div>
   )
};

export default User;