interface IProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const BreadcrumbItem: React.FC<IProps> = ({ text, disabled = false, onClick = () => {} }) => (
  <button type='button' className={disabled ? 'disabled' : 'operational'} onClick={onClick}>
    {text}
  </button>
);

export default BreadcrumbItem;
