import { memo } from 'react';

import PropTypes from 'prop-types';

const Input = memo(({ name, type, placeholder }) => (
  <input type={type} name={name} className='input-text' placeholder={placeholder} />
));

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
