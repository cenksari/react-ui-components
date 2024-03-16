import { memo } from 'react';

import PropTypes from 'prop-types';

const Tab = memo(({ text, active }) => (
  <div className='tab'>
    <button type='button' className={active ? 'active' : 'passive'}>
      {text}
    </button>
  </div>
));

Tab.defaultProps = {
  active: false,
};

Tab.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

export default Tab;
