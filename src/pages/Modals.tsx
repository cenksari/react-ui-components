import { useState } from 'react';

import Row from '../components/Containers/Row';
import Button from '../components/Buttons/Button';
import Modal from '../components/Elements/Modal';

const Modals = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Row className='margin-bottom'>
      <Button
        type='button'
        text='Open modal window'
        color='blue-filled'
        onClick={() => setShowModal(true)}
      />
      <Modal show={showModal} closeModalFunction={() => setShowModal(false)}>
        <p>Lorem ipsum dolor sit amet consecteteur adispicing elit.</p>
        <br />
        <strong>modal html content</strong>
        <br />
        <ul>
          <li>test list</li>
          <li>test list</li>
          <li>test list</li>
        </ul>
      </Modal>
      <code>
        &lt;Modal show={'{showModal}'} closeModalFunction={'{() => setShowModal(false)}'}&gt;
        <br />
        <span className='tab' />
        &lt;p&gt;Lorem ipsum dolor sit amet consecteteur adispicing elit.&lt;/p&gt;
        <br />
        <span className='tab' />
        &lt;br /&gt;
        <br />
        <span className='tab' />
        &lt;strong&gt;modal html content&lt;/strong&gt;
        <br />
        <span className='tab' />
        &lt;br /&gt;
        <br />
        <span className='tab' />
        &lt;ul&gt;
        <br />
        <span className='tab' />
        <span className='tab' />
        &lt;li&gt;test list&lt;/li&gt;
        <br />
        <span className='tab' />
        <span className='tab' />
        &lt;li&gt;test list&lt;/li&gt;
        <br />
        <span className='tab' />
        <span className='tab' />
        &lt;li&gt;test list&lt;/li&gt;
        <br />
        <span className='tab' />
        &lt;/ul&gt;
        <br />
        &lt;/Modal&gt;
      </code>
    </Row>
  );
};

export default Modals;
