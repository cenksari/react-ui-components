import { memo } from 'react';

import PropTypes from 'prop-types';

const TabContent = memo(({ children }) => <div className='tab-content'>{children}</div>);

TabContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabContent;
