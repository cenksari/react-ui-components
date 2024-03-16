import Row from '../components/Containers/Row';
import Heading from '../components/Elements/Heading';

const Headings = () => (
  <Row className='margin-bottom'>
    <Heading type={1} className='gray' text='Heading 1' />
    <Heading type={2} className='gray' text='Heading 2' />
    <Heading type={3} className='gray' text='Heading 3' />
    <Heading type={4} className='gray' text='Heading 4' />
    <Heading type={5} className='gray' text='Heading 5' />
    <Heading type={6} className='gray' text='Heading 6' />
    <code>
      &lt;Heading type={1} className=&quot;gray&quot; text=&quot;Heading 1&quot; /&gt;
      <br />
      &lt;Heading type={2} className=&quot;gray&quot; text=&quot;Heading 2&quot; /&gt;
      <br />
      &lt;Heading type={3} className=&quot;gray&quot; text=&quot;Heading 3&quot; /&gt;
      <br />
      &lt;Heading type={4} className=&quot;gray&quot; text=&quot;Heading 4&quot; /&gt;
      <br />
      &lt;Heading type={5} className=&quot;gray&quot; text=&quot;Heading 5&quot; /&gt;
      <br />
      &lt;Heading type={6} className&quot;gray&quot; text=&quot;Heading 6&quot; /&gt;
    </code>
  </Row>
);

export default Headings;
