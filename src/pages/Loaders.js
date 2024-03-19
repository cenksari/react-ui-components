import Row from '../components/Containers/Row';
import Heading from '../components/Elements/Heading';
import Loader from '../components/Elements/Loader';
import Button from '../components/Buttons/Button';

const Loaders = () => (
  <>
    <Row className='margin-bottom'>
      <a aria-label='l-inline' id='l-inline' href='#l-inline' />
      <Heading type={2} color='gray' text='Inline' />
      <Loader type='inline' color='gray' />
      <br />
      <Loader type='inline' color='yellow' />
      <br />
      <Loader type='inline' color='purple' />
      <br />
      <Loader type='inline' color='red' />
      <br />
      <Loader type='inline' color='orange' />
      <br />
      <Loader type='inline' color='green' />
      <br />
      <Loader type='inline' color='blue' />
      <code>
        &lt;Loader type=&apos;inline&apos; color=&apos;gray&apos; /&gt;
        <br />
        &lt;Loader type=&apos;inline&apos; color=&apos;yellow&apos; /&gt;
        <br />
        &lt;Loader type=&apos;inline&apos; color=&apos;purple&apos; /&gt;
        <br />
        &lt;Loader type=&apos;inline&apos; color=&apos;red&apos; /&gt;
        <br />
        &lt;Loader type=&apos;inline&apos; color=&apos;orange&apos; /&gt;
        <br />
        &lt;Loader type=&apos;inline&apos; color=&apos;green&apos; /&gt;
        <br />
        &lt;Loader type=&apos;inline&apos; color=&apos;blue&apos; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='l-full' id='l-full' href='#l-full' />
      <Heading type={2} color='gray' text='Full screen' />
      <Button type='button' text='Open full screen loader' color='blue-filled' />
      <code>deneme</code>
    </Row>
  </>
);

export default Loaders;
