interface IProps {
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = ({ name, type, placeholder, value = '', onChange = () => {} }) => (
  <input
    type={type}
    name={name}
    className='input-text'
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default Input;
