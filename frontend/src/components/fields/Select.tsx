import React from 'react';
import { useField  } from 'formik';

import iSelect from '../../interfaces/select';
import '../../styles/components/form/select.css'

const Select: React.FC<iSelect> = (props)=> {
   const [ field, meta ] = useField(props.name);

   return (
      <div id='component-select'>
         <label htmlFor={props.name}>{props.label}</label>
         <select id={props.name} {...field} {...props} >
            {props.options.map(options => {
               return (
                  <option key={options.value} value={options.value}>{options.description}</option>
               )
            })}
         </select>
         { meta.error && meta.touched && (<span className='error'>{meta.error}</span>) }
      </div>
   )
}

export default Select;