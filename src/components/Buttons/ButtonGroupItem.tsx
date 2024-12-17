interface IProps {
  text: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const ButtonGroupItem: React.FC<IProps> = ({
  text,
  active = false,
  disabled = false,
  onClick = () => {},
}) => {
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
