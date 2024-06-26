import React from 'react';

interface IProps {
  text: string;
  active?: boolean;
  onClick?: () => void;
}

const DropdownItem = ({ text, active = false, onClick = () => {} }: IProps): React.JSX.Element => (
  <button type='button' className={active ? 'active' : 'passive'} onClick={onClick}>
    {text}
  </button>
);

export default DropdownItem;
