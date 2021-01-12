import React from 'react';

import logoImg from '../assets/images/logo_full.svg';
import '../styles/components/branding.css';

const Branding: React.FC = ({children})=> {
   return(
      <div id='component-branding'>
         <header>
            <img src={logoImg} alt='Logo' />
         </header>
         <main>
            { children }
         </main>
      </div>
   )
};

export default Branding;