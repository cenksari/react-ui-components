import { memo } from 'react';

import PropTypes from 'prop-types';

const Radio = memo(({ name, checked, color, description, value }) => (
  <div className='radio-container'>
    <label className={`radio ${color}`}>
      <input name={name} type='radio' defaultChecked={checked} value={value} />
      <span className='slider round' />
    </label>
    {description && <span className='radio-description'>{description}</span>}
  </div>
));

Radio.defaultProps = {
  checked: false,
  description: null,
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  description: PropTypes.string,
  color: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Radio;
