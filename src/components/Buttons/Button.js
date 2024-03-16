import { memo } from 'react';

import PropTypes from 'prop-types';

const Button = memo(({ type, text, leftIcon, rightIcon, className }) => (
  <button type={type === 'button' ? 'button' : 'submit'} className={className}>
    {leftIcon && <i className='material-icons left-icon'>{leftIcon}</i>}
    {text}
    {rightIcon && <i className='material-icons right-icon'>{rightIcon}</i>}
  </button>
));

Button.defaultProps = {
  type: 'button',
  leftIcon: null,
  rightIcon: null,
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
};

export default Button;
