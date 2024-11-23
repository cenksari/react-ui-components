interface IProps {
  text: string;
  active?: boolean;
  onClick?: () => void;
}

const Tab = ({ text, active = false, onClick = () => {} }: IProps): JSX.Element => (
  <div className='tab'>
    <button type='button' className={active ? 'active' : 'passive'} onClick={onClick}>
      {text}
    </button>
  </div>
);

export default Tab;
