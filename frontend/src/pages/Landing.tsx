import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'

import logoImg from '../assets/images/logo_full.svg';

import '../styles/pages/landing.css';

const Landing: React.FC = ()=> {
   return (
      <div id='page-landing'>
         <div className="content">
            <header>
               <img src={logoImg} alt="Logo"/>
               <Link to='login'>
                  Acesso restrito
               </Link>
            </header>
            <main>
               <div>
                  <h1>Nunca ouse parar de aprender</h1>
                  <p>
                     Confira nossos livros disponíveis, é de graça.
                  </p>
               </div>
               <Link to=''>
                  <FiArrowRight size={26} color="#8D734B" />
               </Link>
            </main>
         </div>
      </div>
   )
}

export default Landing;