interface IProps {
  name: string;
  checked?: boolean;
  color: string;
  description?: string;
}

const Switch = ({ name, checked = false, color, description }: IProps): JSX.Element => (
  <div className='switch-container'>
    <label className={`switch ${color}`}>
      <input name={name} type='checkbox' defaultChecked={checked} />
      <span className='slider round' />
    </label>
    {description && <span className='switch-description'>{description}</span>}
  </div>
);

export default Switch;
