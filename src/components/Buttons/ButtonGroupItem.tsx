import React from 'react';

interface IProps {
  text: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonGroupItem = ({
  text,
  active = false,
  disabled = false,
  onClick = () => {},
}: IProps): React.JSX.Element => {
  let className = '';

  if (disabled) {
    className = 'disabled';
  } else if (active) {
    className = 'active';
  } else {
    className = 'passive';
  }

  return (
    <button type='button' className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonGroupItem;
