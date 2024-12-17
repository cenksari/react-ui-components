interface IProps {
  children: React.ReactNode;
  color: string;
}

const Tabs: React.FC<IProps> = ({ children, color }) => (
  <div className='tabs'>
    <div className={`tab-bar ${color}`}>{children}</div>
  </div>
);

export default Tabs;
