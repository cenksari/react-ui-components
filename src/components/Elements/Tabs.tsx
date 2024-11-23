interface IProps {
  children: React.ReactNode;
  color: string;
}

const Tabs = ({ children, color }: IProps): JSX.Element => (
  <div className='tabs'>
    <div className={`tab-bar ${color}`}>{children}</div>
  </div>
);

export default Tabs;
