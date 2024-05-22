import { memo } from 'react';

interface IProps {
  name: string;
  color: string;
  min: number;
  max: number;
  value: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider = memo(({ name, color, min, max, value, onChange = () => {} }: IProps): React.JSX.Element => (
  <input
    type='range'
    className={color}
    name={name}
    min={min}
    max={max}
    value={value}
    onChange={onChange}
  />
));

export default Slider;
