import Row from '../components/Containers/Row';
import Heading from '../components/Elements/Heading';

interface IProps {
  anchor: string;
  title: string;
  text: string;
  children: React.ReactNode;
}

const Section: React.FC<IProps> = ({ anchor, title, text, children }) => (
  <Row className='margin-bottom'>
    <a aria-label={anchor} id={anchor} href={anchor} />
    <Heading type={1} color='black' text={title} />
    <p className='black'>{text}</p>
    {children}
  </Row>
);

export default Section;
