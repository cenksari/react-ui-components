import Row from '../components/Containers/Row';
import Badge from '../components/Elements/Badge';

const Badges = () => (
  <Row className='margin-bottom'>
    <Badge text='gray' className='gray' />
    &nbsp;
    <Badge text='yellow' className='yellow' />
    &nbsp;
    <Badge text='purple' className='purple' />
    &nbsp;
    <Badge text='red' className='red' />
    &nbsp;
    <Badge text='orange' className='orange' />
    &nbsp;
    <Badge text='green' className='green' />
    &nbsp;
    <Badge text='blue' className='blue' />
    <code>
      &lt;Badge text=&apos;gray&apos; className=&apos;gray&apos; /&gt;
      <br />
      &lt;Badge text=&apos;yellow&apos; className=&apos;yellow&apos; /&gt;
      <br />
      &lt;Badge text=&apos;purple&apos; className=&apos;purple&apos; /&gt;
      <br />
      &lt;Badge text=&apos;red&apos; className=&apos;red&apos; /&gt;
      <br />
      &lt;Badge text=&apos;orange&apos; className=&apos;orange&apos; /&gt;
      <br />
      &lt;Badge text=&apos;green&apos; className=&apos;green&apos; /&gt;
      <br />
      &lt;Badge text=&apos;blue&apos; className=&apos;blue&apos; /&gt;
    </code>
  </Row>
);

export default Badges;
