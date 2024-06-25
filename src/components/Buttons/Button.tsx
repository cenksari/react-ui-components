import React from 'react';

interface IProps {
  type: string;
  text: string;
  leftIcon?: string;
  rightIcon?: string;
  color: string;
  onClick?: () => void;
}

const Button = ({
  type = 'button',
  text,
  leftIcon,
  rightIcon,
  color,
  onClick = () => {},
}: IProps): React.JSX.Element => (
  <button type={type === 'button' ? 'button' : 'submit'} className={color} onClick={onClick}>
    {leftIcon && <i className='material-icons left-icon'>{leftIcon}</i>}
    {text}
    {rightIcon && <i className='material-icons right-icon'>{rightIcon}</i>}
  </button>
);

export default Button;
