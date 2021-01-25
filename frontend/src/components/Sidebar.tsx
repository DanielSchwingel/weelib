import React, { useContext } from 'react';
import { FiUsers, FiBook, FiPower, FiArrowLeft } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';
import iSidebar from '../interfaces/sidebar';
import History from '../utils/History';
import { AuthContext } from '../contexts/Authentication';
import '../styles/components/sidebar.css';

const Sidebar: React.FC<iSidebar> = ({ isDashboard })=> {

   function handleNavigateToBack(){
      History.goBack();
   }

   const { signOut } = useContext(AuthContext);
   return (
      <aside id="component-sidebar">
         <header>
            <img src={logoImg} alt='Logo'/>
         </header>
         {isDashboard && (
            <main>
               <NavLink to='/books'>
                  <FiBook size={24} color='#FFFFFF' />
               </NavLink>
               <NavLink to='/users'>
                  <FiUsers size={24} color='#FFFFFF' />
               </NavLink>
            </main>
         )}
         <footer>
            {isDashboard ? (
               <button onClick={signOut}>
                  <FiPower size={24} color='#FFFFFF' />
               </button>
            ) : (
               <button onClick={handleNavigateToBack}>
                  <FiArrowLeft size={24} color='#FFFFFF' />
               </button>
            )}
         </footer>
      </aside>
   )
};

export default Sidebar;