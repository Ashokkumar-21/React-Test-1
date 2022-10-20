import React from "react";
import './styles/TextInput.css'

interface TextInputProps {
  id?:string;
  type: 'text' | 'password';
  label?:string;
  addclass?:string;
}

export const TextInput: React.FC<TextInputProps> = ({id,type,label,addclass}) => {
    return (
      <div className={`input-group ${addclass}`}>
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} />
      </div>
        );
    };