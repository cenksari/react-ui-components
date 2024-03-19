import { memo } from 'react';

import PropTypes from 'prop-types';

const Notification = memo(({ text, color }) => (
  <span className={`notification ${color}`}>{text}</span>
));

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Notification;
