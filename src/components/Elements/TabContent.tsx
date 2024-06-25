import React from 'react';

interface IProps {
  children: React.ReactNode;
}

const TabContent = ({ children }: IProps): React.JSX.Element => (
  <div className='tab-content'>{children}</div>
);

export default TabContent;
