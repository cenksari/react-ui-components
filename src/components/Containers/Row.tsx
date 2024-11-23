interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Row = ({ children, className }: IProps): JSX.Element => (
  <div className={className ? `row ${className}` : 'row'}>{children}</div>
);

export default Row;
