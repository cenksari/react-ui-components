import { memo } from 'react';

interface IProps {
  children: React.ReactNode;
}

const TabContent = memo(({ children }: IProps): React.JSX.Element => <div className='tab-content'>{children}</div>);

export default TabContent;
