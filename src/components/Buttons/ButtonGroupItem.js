import { memo } from 'react';

import PropTypes from 'prop-types';

const ButtonGroupItem = memo(({ text, active, disabled }) => {
  let className = '';

  if (disabled) {
    className = 'disabled';
  } else if (active) {
    className = 'active';
  } else {
    className = 'passive';
  }

  return (
    <button type='button' className={className}>
      {text}
    </button>
  );
});

ButtonGroupItem.defaultProps = {
  active: false,
  disabled: false,
};

ButtonGroupItem.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default ButtonGroupItem;
