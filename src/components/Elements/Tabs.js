import { memo } from 'react';

import PropTypes from 'prop-types';

const Tabs = memo(({ children, color }) => (
  <div className='tabs'>
    <div className={`tab-bar ${color}`}>{children}</div>
  </div>
));

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default Tabs;
