import React from 'react';

import Row from '../components/Containers/Row';
import Notification from '../components/Elements/Notification';

const Notifications = (): React.JSX.Element => (
  <Row className='margin-bottom'>
    <Notification text='1' color='gray' />
    <Notification text='5' color='yellow' />
    <Notification text='10' color='purple' />
    <Notification text='99' color='red' />
    <Notification text='3' color='orange' />
    <Notification text='76' color='green' />
    <Notification text='22' color='blue' />
    <code>
      &lt;Notification text=&apos;1&apos; color=&apos;gray&apos; /&gt;
      <br />
      &lt;Notification text=&apos;5&apos; color=&apos;yellow&apos; /&gt;
      <br />
      &lt;Notification text=&apos;10&apos; color=&apos;purple&apos; /&gt;
      <br />
      &lt;Notification text=&apos;99&apos; color=&apos;red&apos; /&gt;
      <br />
      &lt;Notification text=&apos;3&apos; color=&apos;orange&apos; /&gt;
      <br />
      &lt;Notification text=&apos;76&apos; color=&apos;green&apos; /&gt;
      <br />
      &lt;Notification text=&apos;22&apos; color=&apos;blue&apos; /&gt;
    </code>
  </Row>
);

export default Notifications;
