import { memo } from 'react';

import PropTypes from 'prop-types';

const Tab = memo(({ text, active, onClick }) => (
  <div className='tab'>
    <button type='button' className={active ? 'active' : 'passive'} onClick={onClick}>
      {text}
    </button>
  </div>
));

Tab.defaultProps = {
  active: false,
  onClick: () => {},
};

Tab.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Tab;
