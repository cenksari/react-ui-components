interface IProps {
  name: string;
  color: string;
  min: number;
  max: number;
  value: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Slider: React.FC<IProps> = ({ name, color, min, max, value, onChange = () => {} }) => (
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
