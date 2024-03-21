import Row from '../components/Containers/Row';
import Button from '../components/Buttons/Button';
import Heading from '../components/Elements/Heading';

const Buttons = () => (
  <>
    <Row className='margin-bottom'>
      <a aria-label='b-gray' id='b-gray' href='#b-gray' />
      <Heading type={2} color='gray' text='Gray' />
      <Button type='button' text='The button' color='gray-filled' leftIcon='arrow_forward' />
      &nbsp;&nbsp;
      <Button type='button' text='The button' color='gray-overlay' rightIcon='arrow_forward' />
      <code>
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot; color=&quot;gray-filled&quot;
        leftIcon=&quot;arrow_forward&quot; onClick={'{() => {}}'} /&gt;
        <br />
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        color=&quot;gray-overlay&quot; rightIcon=&quot;arrow_forward&quot; onClick={
          '{() => {}}'
        }{' '}
        /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='b-yellow' id='b-yellow' href='#b-yellow' />
      <Heading type={2} color='yellow' text='Yellow' />
      <Button type='button' text='The button' color='yellow-filled' />
      &nbsp;&nbsp;
      <Button type='button' text='The button' color='yellow-overlay' />
      <code>
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        color=&quot;yellow-filled&quot; onClick={'{() => {}}'} /&gt;
        <br />
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        color=&quot;yellow-overlay&quot; onClick={'{() => {}}'} /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='b-purple' id='b-purple' href='#b-purple' />
      <Heading type={2} color='purple' text='Purple' />
      <Button type='button' text='The button' color='purple-filled' />
      &nbsp;&nbsp;
      <Button type='button' text='The button' color='purple-overlay' />
      <code>
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        color=&quot;purple-filled&quot; onClick={'{() => {}}'} /&gt;
        <br />
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        color=&quot;purple-overlay&quot; onClick={'{() => {}}'} /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='b-red' id='b-red' href='#b-red' />
      <Heading type={2} color='red' text='Red' />
      <Button type='button' text='The button' color='red-filled' />
      &nbsp;&nbsp;
      <Button type='button' text='The button' color='red-overlay' />
      <code>
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot; color=&quot;red-filled&quot;
        onClick={'{() => {}}'}
        /&gt;
        <br />
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot; color=&quot;red-overlay&quot;
        onClick={'{() => {}}'}
        /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='b-orange' id='b-orange' href='#b-orange' />
      <Heading type={2} color='orange' text='Orange' />
      <Button type='button' text='The button' color='orange-filled' />
      &nbsp;&nbsp;
      <Button type='button' text='The button' color='orange-overlay' />
      <code>
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        color=&quot;orange-filled&quot; onClick={'{() => {}}'} /&gt;
        <br />
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        color=&quot;orange-overlay&quot; onClick={'{() => {}}'} /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='b-green' id='b-green' href='#b-green' />
      <Heading type={2} color='green' text='Green' />
      <Button type='button' text='The button' color='green-filled' />
      &nbsp;&nbsp;
      <Button type='button' text='The button' color='green-overlay' />
      <code>
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        color=&quot;green-filled&quot; onClick={'{() => {}}'} /&gt;
        <br />
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        color=&quot;green-overlay&quot; onClick={'{() => {}}'} /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='b-blue' id='b-blue' href='#b-blue' />
      <Heading type={2} color='blue' text='Blue' />
      <Button type='button' text='The button' color='blue-filled' />
      &nbsp;&nbsp;
      <Button type='button' text='The button' color='blue-overlay' />
      <code>
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot; color=&quot;blue-filled&quot;
        onClick={'{() => {}}'}
        /&gt;
        <br />
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot;
        color=&quot;blue-overlay&quot; onClick={'{() => {}}'} /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='b-disabled' id='b-disabled' href='#b-disabled' />
      <Heading type={2} color='gray' text='Disabled button' />
      <Button type='button' text='The button' color='disabled' />
      <code>
        &lt;Button type=&quot;button&quot; text=&quot;The button&quot; color=&quot;disabled&quot;
        /&gt;
      </code>
    </Row>
  </>
);

export default Buttons;
