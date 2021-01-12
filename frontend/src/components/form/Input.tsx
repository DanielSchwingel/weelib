import React from 'react';
import { useField  } from 'formik';

import iInputProps from '../../interfaces/input';
import '../../styles/components/form/input.css'

const Input: React.FC<iInputProps> = ({ label, fieldName, ...props })=> {
   const [ field, meta ] = useField(fieldName);

   return (
      <div id='component-input'>
         <label htmlFor={fieldName}>{label}</label>
         <input 
            id={fieldName}
            value={field.value}
            onChange={field.onChange(fieldName)}
            {...props}  
         />
         { meta.error && meta.touched && (<label>{meta.error}</label>) }
      </div>
   )
}

export default Input;