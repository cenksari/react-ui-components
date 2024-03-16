import Row from '../components/Containers/Row';
import Button from '../components/Buttons/Button';
import Heading from '../components/Elements/Heading';

const Buttons = () => (
  <>
    <Row className='margin-bottom'>
      <a aria-label='b-colored' id='b-colored' href='#b-colored' />
      <Heading type={2} className='gray' text='Gray' />
      <Button type='button' text='The button' className='gray-filled' leftIcon='arrow_forward' />
      &nbsp;&nbsp;
      <Button type='button' text='The button' className='gray-overlay' rightIcon='arrow_forward' />
      <code>
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        className=&quot;gray-filled&quot; leftIcon=&quot;arrow_forward&quot; /&gt;
        <br />
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        className=&quot;gray-overlay&quot; rightIcon=&quot;arrow_forward&quot; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <Heading type={2} className='yellow' text='Yellow' />
      <Button type='button' text='The button' className='yellow-filled' />
      &nbsp;&nbsp;
      <Button type='button' text='The button' className='yellow-overlay' />
      <code>
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        className=&quot;yellow-filled&quot; /&gt;
        <br />
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        className=&quot;yellow-overlay&quot; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <Heading type={2} className='purple' text='Purple' />
      <Button type='button' text='The button' className='purple-filled' />
      &nbsp;&nbsp;
      <Button type='button' text='The button' className='purple-overlay' />
      <code>
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        className=&quot;purple-filled&quot; /&gt;
        <br />
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        className=&quot;purple-overlay&quot; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <Heading type={2} className='red' text='Red' />
      <Button type='button' text='The button' className='red-filled' />
      &nbsp;&nbsp;
      <Button type='button' text='The button' className='red-overlay' />
      <code>
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        className=&quot;red-filled&quot; /&gt;
        <br />
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        className=&quot;red-overlay&quot; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <Heading type={2} className='orange' text='Orange' />
      <Button type='button' text='The button' className='orange-filled' />
      &nbsp;&nbsp;
      <Button type='button' text='The button' className='orange-overlay' />
      <code>
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        className=&quot;orange-filled&quot; /&gt;
        <br />
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        className=&quot;orange-overlay&quot; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <Heading type={2} className='green' text='Green' />
      <Button type='button' text='The button' className='green-filled' />
      &nbsp;&nbsp;
      <Button type='button' text='The button' className='green-overlay' />
      <code>
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        className=&quot;green-filled&quot; /&gt;
        <br />
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        className=&quot;green-overlay&quot; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <Heading type={2} className='blue' text='Blue' />
      <Button type='button' text='The button' className='blue-filled' />
      &nbsp;&nbsp;
      <Button type='button' text='The button' className='blue-overlay' />
      <code>
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        className=&quot;blue-filled&quot; /&gt;
        <br />
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        className=&quot;blue-overlay&quot; /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='b-disabled' id='b-disabled' href='#b-disabled' />
      <Heading type={2} className='gray' text='Disabled button' />
      <Button type='button' text='The button' className='disabled' />
      <code>
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        className=&quot;disabled&quot; /&gt;
      </code>
    </Row>
  </>
);

export default Buttons;
