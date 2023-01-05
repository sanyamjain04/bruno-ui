import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button className="bg-slate-50 text-red-400 rotate-45">
      {props.label}
    </button>
  );
};

export default Button;
