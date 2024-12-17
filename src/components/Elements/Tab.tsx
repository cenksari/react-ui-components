interface IProps {
  text: string;
  active?: boolean;
  onClick?: () => void;
}

const Tab: React.FC<IProps> = ({ text, active = false, onClick = () => {} }) => (
  <div className='tab'>
    <button type='button' className={active ? 'active' : 'passive'} onClick={onClick}>
      {text}
    </button>
  </div>
);

export default Tab;
