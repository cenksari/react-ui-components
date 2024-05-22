import { memo } from 'react';

interface IProps {
  value: string;
  name: string;
  rows: number;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea = memo(
  ({ value = '', name, rows, placeholder, onChange = () => {} }: IProps): React.JSX.Element => (
    <textarea
      value={value}
      name={name}
      rows={rows}
      className='input-text'
      placeholder={placeholder}
      onChange={onChange}
    />
  )
);

export default TextArea;
