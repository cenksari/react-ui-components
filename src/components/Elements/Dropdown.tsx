import { memo } from 'react';

interface IProps {
  color: string;
  children: React.ReactNode;
}

const Dropdown = memo(({ color, children }: IProps): React.JSX.Element => (
  <div className={`dropdown ${color}`}>{children}</div>
));

export default Dropdown;
