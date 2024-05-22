import { memo } from 'react';

interface IProps {
  text: string;
  active?: boolean;
  onClick?: () => void;
}

const Tab = memo(({ text, active = false, onClick = () => {} }: IProps): React.JSX.Element => (
  <div className='tab'>
    <button type='button' className={active ? 'active' : 'passive'} onClick={onClick}>
      {text}
    </button>
  </div>
));

export default Tab;
