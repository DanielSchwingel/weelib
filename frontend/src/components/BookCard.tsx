import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';

import { iBook } from '../interfaces/book';

import '../styles/components/bookcard.css';

interface iObject {
   book: iBook
}

const BookCard: React.FC<iObject> = (props)=> {
   return (
      <div id='component-bookcard'>
         <div className='header'>
            <p className='name'>{props.book.title}</p>
            <div className='links'>
               <Link to=''>
                  <FiEdit3 size={24} color='#15C3D6' />
               </Link>
               <Link to=''>
                  <FiTrash2 size={24} color='#15C3D6' />
               </Link>
            </div>
         </div>
         <div className='main'>
            <p>{props.book.about} </p>
         </div>
      </div>
   )
};

export default BookCard;