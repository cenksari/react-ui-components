interface IProps {
  text: string;
  color: string;
}

const Notification: React.FC<IProps> = ({ text, color }) => (
  <span className={`notification ${color}`}>{text}</span>
);

export default Notification;
