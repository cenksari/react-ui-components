import Row from '../components/Containers/Row';
import Heading from '../components/Elements/Heading';

const Headings = (): React.JSX.Element => (
  <>
    <Row className='margin-bottom'>
      <a aria-label='h1' id='h1' href='#h1' />
      <Heading type={1} color='gray' text='Heading 1' />
      <code>&lt;Heading type={'{1}'} color=&quot;gray&quot; text=&quot;Heading 1&quot; /&gt;</code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='h2' id='h2' href='#h2' />
      <Heading type={2} color='yellow' text='Heading 2' />
      <code>
        &lt;Heading type={'{2}'} color=&quot;yellow&quot; text=&quot;Heading 2&quot; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='h3' id='h3' href='#h3' />
      <Heading type={3} color='purple' text='Heading 3' />
      <code>
        &lt;Heading type={'{3}'} color=&quot;purple&quot; text=&quot;Heading 3&quot; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='h4' id='h4' href='#h4' />
      <Heading type={4} color='red' text='Heading 4' />
      <code>&lt;Heading type={'{4}'} color=&quot;red&quot; text=&quot;Heading 4&quot; /&gt;</code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='h5' id='h5' href='#h5' />
      <Heading type={5} color='orange' text='Heading 5' />
      <code>
        &lt;Heading type={'{5}'} color=&quot;orange&quot; text=&quot;Heading 5&quot; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='h6' id='h6' href='#h6' />
      <Heading type={6} color='green' text='Heading 6' />
      <code>&lt;Heading type={'{6}'} color=&quot;green&quot; text=&quot;Heading 6&quot; /&gt;</code>
    </Row>
    <Row className='margin-bottom'>
      <Heading type={6} color='blue' text='Heading 6' />
      <code>&lt;Heading type={'{6}'} color=&quot;blue&quot; text=&quot;Heading 6&quot; /&gt;</code>
    </Row>
  </>
);

export default Headings;
