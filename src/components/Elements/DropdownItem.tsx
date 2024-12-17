interface IProps {
  text: string;
  active?: boolean;
  onClick?: () => void;
}

const DropdownItem: React.FC<IProps> = ({ text, active = false, onClick = () => {} }) => (
  <button type='button' className={active ? 'active' : 'passive'} onClick={onClick}>
    {text}
  </button>
);

export default DropdownItem;
