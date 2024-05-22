import { memo } from 'react';

interface IProps {
  text: string;
  color: string;
}

const Notification = memo(
  ({ text, color }: IProps): React.JSX.Element => (
    <span className={`notification ${color}`}>{text}</span>
  )
);

export default Notification;
