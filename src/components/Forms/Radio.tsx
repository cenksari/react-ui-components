interface IProps {
  name: string;
  checked?: boolean;
  color: string;
  description?: string;
  value: string;
}

const Radio: React.FC<IProps> = ({ name, checked = false, color, description, value }) => (
  <div className='radio-container'>
    <label className={`radio ${color}`}>
      <input name={name} type='radio' defaultChecked={checked} value={value} />
      <span className='slider round' />
    </label>
    {description && <span className='radio-description'>{description}</span>}
  </div>
);

export default Radio;
