interface IProps {
  children: React.ReactNode;
}

const TabContent: React.FC<IProps> = ({ children }) => (
  <div className='tab-content'>{children}</div>
);

export default TabContent;
