import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'default' | 'outline';
  className?: string;  // className is optional
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, variant = 'default', className = '', onClick }) => {
  const baseStyles =
    'inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50';
  const variants = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}  // Merge className prop
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
