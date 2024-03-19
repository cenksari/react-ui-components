import { memo } from 'react';

import PropTypes from 'prop-types';

const Modal = memo(({ show, children, closeModalFunction }) => {
  if (show) {
    return (
      <div className='modal-backdrop'>
        <div className='modal'>
          <div className='title'>
            <button type='button' onClick={closeModalFunction}>
              <i className='material-icons'>close</i>
            </button>
          </div>
          <div className='contents'>{children}</div>
        </div>
      </div>
    );
  }

  return null;
});

Modal.defaultProps = {
  show: false,
};

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node.isRequired,
  closeModalFunction: PropTypes.func.isRequired,
};

export default Modal;
