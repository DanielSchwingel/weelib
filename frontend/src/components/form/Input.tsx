import React, { useState } from 'react';
import { useField  } from 'formik';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import iInputProps from '../../interfaces/input';
import '../../styles/components/form/input.css'

const Input: React.FC<iInputProps> = ({ label, fieldName, ...props })=> {
   const [ field, meta ] = useField(fieldName);
   const [ hide, setHide ] = useState(true);
   const [ type, setType ] = useState('password');

   function handleTogglePassword(){
      if (hide) {
         setHide(false);
         setType('text');
      } else {
         setHide(true);
         setType('password')
      }
   }

   return (
      <div id='component-input'>
         <label htmlFor={fieldName}>{label}</label>
         { props.isPassword === true ? (
            <div className='password'>
               <input 
                  id={fieldName}
                  value={field.value}
                  onChange={field.onChange(fieldName)}
                  type={type}
                  {...props}  
               />
               {hide ? <FiEye onClick={handleTogglePassword} size={24} color='#8FA7B2'/> : <FiEyeOff onClick={handleTogglePassword} size={24} color='#15C3D6' />}
            </div>
         ) : (
            <input 
               id={fieldName}
               value={field.value}
               onChange={field.onChange(fieldName)}
               {...props}  
            />
         )}

         { meta.error && meta.touched && (<label>{meta.error}</label>) }
      </div>
   )
}

export default Input;