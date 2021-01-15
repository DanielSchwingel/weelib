import React from 'react';

import Sidebar from '../components/Sidebar';
import '../styles/pages/users.css';

const Users: React.FC = ()=> {
   return (
      <div id="page-users">
         <Sidebar/>
         <div className='content'>
            <header>
               <h1>Usuários cadastrados</h1>
               <span>12 usuários cadastrados</span>
            </header>
            <main>

            </main>
         </div>
      </div>
   )
};

export default Users;