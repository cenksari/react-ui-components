import { memo } from 'react';

import PropTypes from 'prop-types';

const TextArea = memo(({ name, rows, placeholder }) => (
  <textarea name={name} rows={rows} className='input-text' placeholder={placeholder} />
));

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextArea;
