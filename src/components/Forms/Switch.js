import { memo } from 'react';

import PropTypes from 'prop-types';

const Switch = memo(({ name, checked, className, description }) => (
  <div className='switch-container'>
    <label className={`switch ${className}`}>
      <input name={name} type='checkbox' defaultChecked={checked} />
      <span className='slider round' />
    </label>
    {description && <span className='switch-description'>{description}</span>}
  </div>
));

Switch.defaultProps = {
  checked: false,
  description: null,
};

Switch.propTypes = {
  checked: PropTypes.bool,
  description: PropTypes.string,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Switch;
