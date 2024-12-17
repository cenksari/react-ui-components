interface IProps {
  show: boolean;
  children: React.ReactNode;
  closeModalFunction: () => void;
}

const Modal: React.FC<IProps> = ({ show = false, children, closeModalFunction }) => {
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
};

export default Modal;
