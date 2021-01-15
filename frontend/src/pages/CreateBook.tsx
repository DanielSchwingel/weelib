import React from 'react';

import Sidebar from '../components/Sidebar';
import { Book as Form } from '../components/forms/Book';
import '../styles/pages/createbook.css'

const CreateBook: React.FC = ()=> {
   return (
      <div id='page-create-book'>
         <Sidebar/>
         <div className='content'>
            <header>
               <p>Adicionando um livro</p>
            </header>
            <main>
               <h1>Dados</h1>
               <Form />
            </main>
         </div>
      </div>   
   )
};

export default CreateBook;