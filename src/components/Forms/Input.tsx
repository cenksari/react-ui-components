interface IProps {
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  type,
  placeholder,
  value = '',
  onChange = () => {},
}: IProps): JSX.Element => (
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
