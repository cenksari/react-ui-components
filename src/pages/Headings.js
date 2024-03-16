import Row from '../components/Containers/Row';
import Heading from '../components/Elements/Heading';

const Headings = () => (
  <>
    <Row className='margin-bottom'>
      <a aria-label='h1' id='h1' href='#h1' />
      <Heading type={1} className='gray' text='Heading 1' />
      <code>&lt;Heading type={1} className=&quot;gray&quot; text=&quot;Heading 1&quot; /&gt;</code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='h2' id='h2' href='#h2' />
      <Heading type={2} className='gray' text='Heading 2' />
      <code>&lt;Heading type={2} className=&quot;gray&quot; text=&quot;Heading 2&quot; /&gt;</code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='h3' id='h3' href='#h3' />
      <Heading type={3} className='gray' text='Heading 3' />
      <code>&lt;Heading type={3} className=&quot;gray&quot; text=&quot;Heading 3&quot; /&gt;</code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='h4' id='h4' href='#h4' />
      <Heading type={4} className='gray' text='Heading 4' />
      <code>&lt;Heading type={4} className=&quot;gray&quot; text=&quot;Heading 4&quot; /&gt;</code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='h5' id='h5' href='#h5' />
      <Heading type={5} className='gray' text='Heading 5' />
      <code>&lt;Heading type={5} className=&quot;gray&quot; text=&quot;Heading 5&quot; /&gt;</code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='h6' id='h6' href='#h6' />
      <Heading type={6} className='gray' text='Heading 6' />
      <code>&lt;Heading type={6} className&quot;gray&quot; text=&quot;Heading 6&quot; /&gt;</code>
    </Row>
  </>
);

export default Headings;
