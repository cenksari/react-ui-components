import { memo } from 'react';

import PropTypes from 'prop-types';

const Heading = memo(({ text, type, color }) => {
  if (type === 1) {
    return <h1 className={color}>{text}</h1>;
  }

  if (type === 2) {
    return <h2 className={color}>{text}</h2>;
  }

  if (type === 3) {
    return <h3 className={color}>{text}</h3>;
  }

  if (type === 4) {
    return <h4 className={color}>{text}</h4>;
  }

  if (type === 5) {
    return <h5 className={color}>{text}</h5>;
  }

  if (type === 6) {
    return <h6 className={color}>{text}</h6>;
  }

  return null;
});

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default Heading;
