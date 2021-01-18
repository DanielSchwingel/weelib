import React from 'react';
import { FiEdit3, FiTrash2} from 'react-icons/fi';
import { Link } from 'react-router-dom';

import iUser from '../interfaces/user';
import '../styles/components/usercard.css';

const UserCard: React.FC<iUser> = (props)=> {
   return (
      <div id='component-usercard'>
         <header>
            <p className='name'>{props.name}</p>
            <div className='links'>
               <Link to=''>
                  <FiEdit3 size={24} color='#15C3D6' />
               </Link>
               <Link to=''>
                  <FiTrash2 size={24} color='#15C3D6' />
               </Link>
            </div>
         </header>
         <main>
            <p>{props.email} </p>
         </main>
      </div>
   )
};

export default UserCard;