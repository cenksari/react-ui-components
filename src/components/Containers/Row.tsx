interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Row: React.FC<IProps> = ({ children, className }) => (
  <div className={className ? `row ${className}` : 'row'}>{children}</div>
);

export default Row;
