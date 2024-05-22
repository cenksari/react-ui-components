import Row from '../components/Containers/Row';
import Heading from '../components/Elements/Heading';

interface IProps {
  anchor: string;
  title: string;
  text: string;
  children: React.ReactNode;
}

const Section = ({ anchor, title, text, children }: IProps): React.JSX.Element => (
  <Row className='margin-bottom'>
    <a aria-label={anchor} id={anchor} href={anchor} />
    <Heading type={1} color='black' text={title} />
    <p className='black'>{text}</p>
    {children}
  </Row>
);

export default Section;
