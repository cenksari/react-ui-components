import { memo } from 'react';

import PropTypes from 'prop-types';

const Slider = memo(({ name, color, min, max, value, onChange }) => (
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

Slider.defaultProps = {
  onChange: () => {},
};

Slider.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};

export default Slider;
