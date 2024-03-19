import { memo } from 'react';

import PropTypes from 'prop-types';

import Button from '../Buttons/Button';

const Dialog = memo(
  ({
    show,
    color,
    title,
    content,
    actionButtonText,
    actionButtonFunction,
    closeDialogFunction,
  }) => {
    if (show) {
      return (
        <div className='modal-backdrop'>
          <div className='dialog'>
            <div className='title flex flex-h-center flex-space-between'>
              <h4>{title}</h4>
              <button type='button' onClick={closeDialogFunction}>
                <i className='material-icons'>close</i>
              </button>
            </div>
            <div className='contents'>{content}</div>
            <div className='buttons'>
              {actionButtonText && actionButtonFunction && (
                <Button
                  type='button'
                  text={actionButtonText}
                  color={`${color}-filled`}
                  onClick={actionButtonFunction}
                />
              )}
              <Button
                type='button'
                text='Close'
                color={`${color}-overlay`}
                onClick={closeDialogFunction}
              />
            </div>
          </div>
        </div>
      );
    }

    return null;
  }
);

Dialog.defaultProps = {
  show: false,
  actionButtonText: null,
  actionButtonFunction: () => {},
};

Dialog.propTypes = {
  show: PropTypes.bool,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  actionButtonText: PropTypes.string,
  actionButtonFunction: PropTypes.func,
  closeDialogFunction: PropTypes.func.isRequired,
};

export default Dialog;
