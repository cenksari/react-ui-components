interface IProps {
  name: string;
  color: string;
  min: number;
  max: number;
  value: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider = ({ name, color, min, max, value, onChange = () => {} }: IProps): JSX.Element => (
  <input
    type='range'
    className={color}
    name={name}
    min={min}
    max={max}
    value={value}
    onChange={onChange}
  />
);

export default Slider;
