import Row from '../components/Containers/Row';
import Heading from '../components/Elements/Heading';
import Card from '../components/Elements/Card';

const Cards = (): JSX.Element => (
  <>
    <Row className='margin-bottom'>
      <a aria-label='c-large' id='c-large' href='#c-large' />
      <Heading type={2} color='gray' text='Large' />
      <Card
        size='large'
        color='blue'
        title='Card title goes here'
        image='https://www.cenksari.com/images/background-code.jpg'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        button1Text='First button'
        button2Text='Second button'
      />
      <code>
        &lt;Card
        <br />
        <span className='tab' />
        size=&apos;large&apos;
        <br />
        <span className='tab' />
        color=&apos;blue&apos;
        <br />
        <span className='tab' />
        title=&apos;Card title goes here&apos;
        <br />
        <span className='tab' />
        image=&apos;https://www.cenksari.com/images/background-code.jpg&apos;
        <br />
        <span className='tab' />
        content=&apos;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.&apos;
        <br />
        <span className='tab' />
        button1Text=&apos;First button&apos;
        <br />
        <span className='tab' />
        button2Text=&apos;Second button&apos;
        <br />
        /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='c-medium' id='c-medium' href='#c-medium' />
      <Heading type={2} color='gray' text='Medium' />
      <Card
        size='medium'
        color='orange'
        title='Card title goes here'
        image='https://www.cenksari.com/images/background-code.jpg'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        button1Text='First button'
      />
      <code>
        &lt;Card
        <br />
        <span className='tab' />
        size=&apos;medium&apos;
        <br />
        <span className='tab' />
        color=&apos;orange&apos;
        <br />
        <span className='tab' />
        title=&apos;Card title goes here&apos;
        <br />
        <span className='tab' />
        image=&apos;https://www.cenksari.com/images/background-code.jpg&apos;
        <br />
        <span className='tab' />
        content=&apos;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.&apos;
        <br />
        <span className='tab' />
        button1Text=&apos;First button&apos;
        <br />
        /&gt;
      </code>
    </Row>
    <Row className='margin-bottom'>
      <a aria-label='c-small' id='c-small' href='#c-small' />
      <Heading type={2} color='gray' text='Small' />
      <Card
        size='small'
        color='red'
        title='Card title goes here'
        image='https://www.cenksari.com/images/background-code.jpg'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
        button1Text='First button'
      />
      <code>
        &lt;Card
        <br />
        <span className='tab' />
        size=&apos;small&apos;
        <br />
        <span className='tab' />
        color=&apos;red&apos;
        <br />
        <span className='tab' />
        title=&apos;Card title goes here&apos;
        <br />
        <span className='tab' />
        image=&apos;https://www.cenksari.com/images/background-code.jpg&apos;
        <br />
        <span className='tab' />
        content=&apos;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt.&apos;
        <br />
        <span className='tab' />
        button1Text=&apos;First button&apos;
        <br />
        /&gt;
      </code>
    </Row>
  </>
);

export default Cards;
