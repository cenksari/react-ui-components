import { memo } from 'react';

interface IProps {
  show: boolean;
  children: React.ReactNode;
  closeModalFunction: () => void;
}

const Modal = memo(({ show = false, children, closeModalFunction }: IProps): React.JSX.Element => {
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

  return <></>;
});

export default Modal;
