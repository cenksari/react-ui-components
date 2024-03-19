import { memo } from 'react';

import PropTypes from 'prop-types';

const Switch = memo(({ name, checked, color, description }) => (
  <div className='switch-container'>
    <label className={`switch ${color}`}>
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
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Switch;
