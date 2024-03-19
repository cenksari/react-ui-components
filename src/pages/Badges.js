import Row from '../components/Containers/Row';
import Badge from '../components/Elements/Badge';

const Badges = () => (
  <Row className='margin-bottom'>
    <Badge text='gray' color='gray' />
    &nbsp;
    <Badge text='yellow' color='yellow' />
    &nbsp;
    <Badge text='purple' color='purple' />
    &nbsp;
    <Badge text='red' color='red' />
    &nbsp;
    <Badge text='orange' color='orange' />
    &nbsp;
    <Badge text='green' color='green' />
    &nbsp;
    <Badge text='blue' color='blue' />
    <code>
      &lt;Badge text=&apos;gray&apos; color=&apos;gray&apos; /&gt;
      <br />
      &lt;Badge text=&apos;yellow&apos; color=&apos;yellow&apos; /&gt;
      <br />
      &lt;Badge text=&apos;purple&apos; color=&apos;purple&apos; /&gt;
      <br />
      &lt;Badge text=&apos;red&apos; color=&apos;red&apos; /&gt;
      <br />
      &lt;Badge text=&apos;orange&apos; color=&apos;orange&apos; /&gt;
      <br />
      &lt;Badge text=&apos;green&apos; color=&apos;green&apos; /&gt;
      <br />
      &lt;Badge text=&apos;blue&apos; color=&apos;blue&apos; /&gt;
    </code>
  </Row>
);

export default Badges;
