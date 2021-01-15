import { TextareaHTMLAttributes } from 'react';

interface iTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
   label: string,
   name: string,
}

export default iTextAreaProps;