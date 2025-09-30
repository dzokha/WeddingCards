import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
}

export const Button: React.FC<Props> = ({ variant = 'primary', children, ...rest }) => {
  return (
    <button className={`wc-btn wc-btn--${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
