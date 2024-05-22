import { memo } from 'react';

interface IProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

const BreadcrumbItem = memo(
  ({ text, disabled = false, onClick = () => {} }: IProps): React.JSX.Element => (
    <button type='button' className={disabled ? 'disabled' : 'operational'} onClick={onClick}>
      {text}
    </button>
  )
);

export default BreadcrumbItem;
