import { SelectHTMLAttributes } from 'react';

interface iOption {
   value: number,
   description: string
}

interface iSelect extends SelectHTMLAttributes<HTMLSelectElement> {
   label: string,
   name: string,
   options : Array<iOption>
};

export default iSelect;