import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Row = ({ children, className }: IProps): React.JSX.Element => (
  <div className={className ? `row ${className}` : 'row'}>{children}</div>
);

export default Row;
