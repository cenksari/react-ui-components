import { memo } from 'react';

import PropTypes from 'prop-types';

const Tabs = memo(({ children, className }) => (
  <div className='tabs'>
    <div className={`tab-bar ${className}`}>{children}</div>
  </div>
));

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default Tabs;
