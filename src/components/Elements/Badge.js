import { memo } from 'react';

import PropTypes from 'prop-types';

const Badge = memo(({ text, className }) => <span className={`badge ${className}`}>{text}</span>);

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Badge;
