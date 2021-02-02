import React, { useState, useEffect } from 'react';

import Sidebar from '../components/Sidebar';
import BookCard from '../components/BookCard';
import api from '../services/api';
import '../styles/pages/books.css';
import { iBook } from '../interfaces/book';

const Books: React.FC = ()=> {
   const [ books, setBooks ] = useState<Array<iBook>>() 

   useEffect(()=> {
      api.get('books')
         .then(response => {
            setBooks(response.data)
            console.log(response.data)
         });
      
   },[]);


   return (
      <div id="page-books">
         <Sidebar isDashboard={true}/>
         <div className='content'>
            <header>
               <h1>Livros cadastrados</h1>
               <span>32 livros cadastrados</span>
            </header>
            <main>
               
               {books?.map(book=> {
                  return (
                     <BookCard key={book.id} book={book} />
                  )
               })}
            </main>
         </div>
      </div>
   )
};

export default Books;