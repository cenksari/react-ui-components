import Button from '../Buttons/Button';

interface IProps {
  show: boolean;
  color: string;
  title: string;
  content: string;
  actionButtonText?: string;
  actionButtonFunction?: () => void;
  closeDialogFunction: () => void;
}

const Dialog = ({
  show = false,
  color,
  title,
  content,
  actionButtonText,
  actionButtonFunction = () => {},
  closeDialogFunction,
}: IProps): JSX.Element | null => {
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
};

export default Dialog;
