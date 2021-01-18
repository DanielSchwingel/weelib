import React, { useEffect, useState } from 'react';

import Sidebar from '../components/Sidebar';
import UserCard from '../components/UserCard';
import api from '../services/api';
import iUser from '../interfaces/user';
import '../styles/pages/users.css';

const Users: React.FC = ()=> {
   const [ users, setUsers ] = useState<Array<iUser>>([]);

   useEffect(()=> {
      api.get('/users')
         .then(response => {
            setUsers(response.data);
         });
      
   })

   return (
      <div id="page-users">
         <Sidebar isDashboard={true}/>
         <div className='content'>
            <header>
               <h1>Usuários cadastrados</h1>
               <span>{users.length} usuários cadastrados</span>
            </header>
            <main>
               {users.map(user => {
                  return (
                     <UserCard key={user.id} name={user.name} email={user.email}  />
                  )
               })}
            </main>
         </div>
      </div>
   )
};

export default Users;