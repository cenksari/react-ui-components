import { memo } from 'react';

import PropTypes from 'prop-types';

const Alert = memo(({ text, type }) => {
  if (type === 'info') {
    return (
      <div className='alert info'>
        <i className='material-icons'>info</i>
        {text}
      </div>
    );
  }

  if (type === 'error') {
    return (
      <div className='alert error'>
        <i className='material-icons'>error</i>
        {text}
      </div>
    );
  }

  if (type === 'warning') {
    return (
      <div className='alert warning'>
        <i className='material-icons'>warning</i>
        {text}
      </div>
    );
  }

  if (type === 'success') {
    return (
      <div className='alert success'>
        <i className='material-icons'>check_circle</i>
        {text}
      </div>
    );
  }

  return null;
});

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;
