interface IProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const BreadcrumbItem = ({ text, disabled = false, onClick = () => {} }: IProps): JSX.Element => (
  <button type='button' className={disabled ? 'disabled' : 'operational'} onClick={onClick}>
    {text}
  </button>
);

export default BreadcrumbItem;
