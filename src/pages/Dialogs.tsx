import { useState } from 'react';

import Row from '../components/Containers/Row';
import Button from '../components/Buttons/Button';
import Dialog from '../components/Elements/Dialog';
import Heading from '../components/Elements/Heading';

const Dialogs = (): JSX.Element => {
  const [dialogActionShow, setDialogActionShow] = useState<boolean>(false);
  const [dialogClassicShow, setDialogClassicShow] = useState<boolean>(false);

  return (
    <>
      <Row className='margin-bottom'>
        <a aria-label='d-classic' id='d-classic' href='#d-classic' />
        <Heading type={2} color='gray' text='Classic' />
        <Button
          type='button'
          text='Open dialog'
          color='blue-filled'
          onClick={() => setDialogClassicShow(true)}
        />
        <Dialog
          show={dialogClassicShow}
          color='blue'
          title='Classic'
          content='Classic dialog for information messages.'
          closeDialogFunction={() => setDialogClassicShow(false)}
        />
        <code>
          &lt;Dialog
          <br />
          <span className='tab' />
          show={'{dialogClassicShow}'}
          <br />
          <span className='tab' />
          color=&apos;blue&apos;
          <br />
          <span className='tab' />
          title=&apos;Classic&apos;
          <br />
          <span className='tab' />
          content=&apos;Classic dialog for information messages.&apos;
          <br />
          <span className='tab' />
          closeDialogFunction={'{() => setDialogClassicShow(false)}'}
          <br />
          /&gt;
        </code>
      </Row>
      <Row className='margin-bottom'>
        <a aria-label='d-action' id='d-action' href='#d-action' />
        <Heading type={2} color='gray' text='with action button' />
        <Button
          type='button'
          text='Open dialog'
          color='orange-filled'
          onClick={() => setDialogActionShow(true)}
        />
        <Dialog
          show={dialogActionShow}
          color='orange'
          title='Action'
          content='Dialog with action button.'
          actionButtonText='Action button'
          actionButtonFunction={() => {}}
          closeDialogFunction={() => setDialogActionShow(false)}
        />
        <code>
          &lt;Dialog
          <br />
          <span className='tab' />
          show={'{dialogActionShow}'}
          <br />
          <span className='tab' />
          color=&apos;orange&apos;
          <br />
          <span className='tab' />
          title=&apos;Action&apos;
          <br />
          <span className='tab' />
          content=&apos;Dialog with action button.&apos;
          <br />
          <span className='tab' />
          actionButtonText=&apos;Action button&apos;
          <br />
          <span className='tab' />
          actionButtonFunction={'{() => {}}'}
          <br />
          <span className='tab' />
          closeDialogFunction={'{() => setDialogActionShow(false)}'}
          <br />
          /&gt;
        </code>
      </Row>
    </>
  );
};

export default Dialogs;
