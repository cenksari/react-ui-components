interface IProps {
  color: string;
  children: React.ReactNode;
}

const Breadcrumb = ({ color, children }: IProps): JSX.Element => (
  <div className={`breadcrumb ${color}`}>{children}</div>
);

export default Breadcrumb;
