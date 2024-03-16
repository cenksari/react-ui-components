import { memo } from 'react';

import PropTypes from 'prop-types';

const TextArea = memo(({ name, rows, className, placeholder }) => (
  <textarea name={name} rows={rows} className={className} placeholder={placeholder} />
));

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextArea;
