import { memo } from 'react';

import PropTypes from 'prop-types';

const Breadcrumb = memo(({ color, children }) => (
  <div className={`breadcrumb ${color}`}>{children}</div>
));

Breadcrumb.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Breadcrumb;
