import React from 'react';

interface IProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const BreadcrumbItem = ({
  text,
  disabled = false,
  onClick = () => {},
}: IProps): React.JSX.Element => (
  <button type='button' className={disabled ? 'disabled' : 'operational'} onClick={onClick}>
    {text}
  </button>
);

export default BreadcrumbItem;
