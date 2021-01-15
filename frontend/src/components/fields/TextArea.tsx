import React from 'react';
import { useField  } from 'formik';

import iTextAreaProps from '../../interfaces/textarea';
import '../../styles/components/form/textarea.css'

const Input: React.FC<iTextAreaProps> = (props)=> {
   const [ field, meta ] = useField(props.name);

   return (
      <div id='component-textarea'>
         <label htmlFor={props.name}>{props.label}</label>
            <textarea id={props.name} {...field} {...props} />
         { meta.error && meta.touched && (<span className='error'>{meta.error}</span>) }
      </div>
   )
}

export default Input;