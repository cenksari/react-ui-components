import Row from '../components/Containers/Row';
import Heading from '../components/Elements/Heading';

const Cards = () => (
  <>
    <Row className='margin-bottom'>
      <a aria-label='c-large' id='c-large' href='#c-large' />
      <Heading type={2} className='gray' text='Large card' />
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='c-medium' id='c-medium' href='#c-medium' />
      <Heading type={2} className='gray' text='Medium card' />
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='c-small' id='c-small' href='#c-small' />
      <Heading type={2} className='gray' text='Small card' />
    </Row>
  </>
);

export default Cards;
