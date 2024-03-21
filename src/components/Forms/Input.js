import { memo } from 'react';

import PropTypes from 'prop-types';

const Input = memo(({ name, type, placeholder, value, onChange }) => (
  <input
    type={type}
    name={name}
    className='input-text'
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
));

Input.defaultProps = {
  value: '',
  onChange: () => {},
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
