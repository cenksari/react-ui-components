import React from 'react';

import Row from '../components/Containers/Row';
import Alert from '../components/Elements/Alert';
import Heading from '../components/Elements/Heading';

const Alerts = (): React.JSX.Element => (
  <>
    <Row className='margin-bottom'>
      <a aria-label='a-info' id='a-info' href='#a-info' />
      <Heading type={2} color='gray' text='Info' />
      <Alert type='info' text='This is info alert.' />
      <code>&lt;Alert type=&apos;info&apos; text=&apos;This is info alert.&apos; /&gt;</code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='a-error' id='a-error' href='#a-error' />
      <Heading type={2} color='gray' text='Error' />
      <Alert type='error' text='This is error alert.' />
      <code>&lt;Alert type=&apos;error&apos; text=&apos;This is error alert.&apos; /&gt;</code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='a-warning' id='a-warning' href='#a-warning' />
      <Heading type={2} color='gray' text='Warning' />
      <Alert type='warning' text='This is warning alert.' />
      <code>&lt;Alert type=&apos;warning&apos; text=&apos;This is warning alert.&apos; /&gt;</code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='a-success' id='a-success' href='#a-success' />
      <Heading type={2} color='gray' text='Success' />
      <Alert type='success' text='This is success alert.' />
      <code>&lt;Alert type=&apos;success&apos; text=&apos;This is success alert.&apos; /&gt;</code>
    </Row>
  </>
);

export default Alerts;
