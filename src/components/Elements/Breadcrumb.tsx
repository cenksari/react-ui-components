import { memo } from 'react';

interface IProps {
  color: string;
  children: React.ReactNode;
}

const Breadcrumb = memo(({ color, children }: IProps): React.JSX.Element => (
  <div className={`breadcrumb ${color}`}>{children}</div>
));

export default Breadcrumb;
