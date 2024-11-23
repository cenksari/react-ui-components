interface IProps {
  text: string;
  color: string;
}

const Notification = ({ text, color }: IProps): JSX.Element => (
  <span className={`notification ${color}`}>{text}</span>
);

export default Notification;
