interface IProps {
  children: React.ReactNode;
}

const TabContent = ({ children }: IProps): JSX.Element => (
  <div className='tab-content'>{children}</div>
);

export default TabContent;
