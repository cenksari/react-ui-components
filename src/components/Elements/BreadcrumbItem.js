import { memo } from 'react';

import PropTypes from 'prop-types';

const BreadcrumbItem = memo(({ text, disabled, onClick }) => (
  <button type='button' className={disabled ? 'disabled' : 'operational'} onClick={onClick}>
    {text}
  </button>
));

BreadcrumbItem.defaultProps = {
  disabled: false,
  onClick: () => {},
};

BreadcrumbItem.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default BreadcrumbItem;
