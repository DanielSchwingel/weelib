import React from 'react';

import Sidebar from '../components/Sidebar';
import '../styles/pages/books.css';

const Books: React.FC = ()=> {
   return (
      <div id="page-books">
         <Sidebar/>
         <div className='content'>
            <header>
               <h1>Livros cadastrados</h1>
               <span>32 livros cadastrados</span>
            </header>
            <main>

            </main>
         </div>
      </div>
   )
};

export default Books;