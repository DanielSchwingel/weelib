import React from 'react';
import { FiUsers, FiBook, FiPower } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';
import '../styles/components/sidebar.css';

const Sidebar: React.FC = ()=> {
   return (
      <aside id="component-sidebar">
         <header>
            <img src={logoImg} alt='Logo'/>
         </header>
         <main>
            <NavLink to='/books'>
               <FiBook size={24} color='#FFFFFF' />
            </NavLink>
            <NavLink to='/users'>
               <FiUsers size={24} color='#FFFFFF' />
            </NavLink>
         </main>
         <footer>
            <button>
               <FiPower size={24} color='#FFFFFF' />
            </button>
         </footer>
      </aside>
   )
};

export default Sidebar;