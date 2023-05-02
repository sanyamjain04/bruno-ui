import React, { HTMLAttributes, ReactNode } from 'react';
import './Button.css';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className="bg-slate-50 text-red-400 p-2" {...props}>
      {children}
    </button>
  );
};

export default Button;
