interface IProps {
  color: string;
  children: React.ReactNode;
}

const Breadcrumb: React.FC<IProps> = ({ color, children }) => (
  <div className={`breadcrumb ${color}`}>{children}</div>
);

export default Breadcrumb;
