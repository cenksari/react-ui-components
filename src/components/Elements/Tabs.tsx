import { memo } from 'react';

interface IProps {
  children: React.ReactNode;
  color: string;
}

const Tabs = memo(
  ({ children, color }: IProps): React.JSX.Element => (
    <div className='tabs'>
      <div className={`tab-bar ${color}`}>{children}</div>
    </div>
  )
);

export default Tabs;
