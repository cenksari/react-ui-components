import { memo } from 'react';

import PropTypes from 'prop-types';

const Row = memo(({ children, className }) => (
  <div className={className ? `row ${className}` : 'row'}>{children}</div>
));

Row.defaultProps = {
  className: null,
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Row;
