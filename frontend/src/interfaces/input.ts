import { InputHTMLAttributes } from "react";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
   label: string,
   fieldName: string
}

export default iInputProps;