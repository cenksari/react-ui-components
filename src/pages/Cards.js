import Row from '../components/Containers/Row';
import Heading from '../components/Elements/Heading';

const Cards = () => (
  <Row className='margin-bottom'>
    <Heading type={2} className='gray' text='Large card' />
    <Heading type={2} className='gray' text='Medium card' />
    <Heading type={2} className='gray' text='Small card' />
  </Row>
);

export default Cards;
